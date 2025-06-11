import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Import your Mongoose models
import Player from '../src/models/Player';
import Team from '../src/models/Team';

const MONGODB_URI: string | undefined = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Error: MONGODB_URI is not defined in .env.local');
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB Connected...');
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

const importData = async () => {
  await connectDB();

  // Clear existing data (for testing purposes)
  console.log('Clearing existing data...');
  await Player.deleteMany({});
  await Team.deleteMany({});
  console.log('Existing data cleared.');

  const lineupsDir = path.join(__dirname, '../open-data-master/data/lineups');
  const matchesBaseDir = path.join(__dirname, '../open-data-master/data/matches');
  const competitionsFile = path.join(__dirname, '../open-data-master/data/competitions.json');

  let competitionsData: any[] = [];
  try {
    const rawCompetitions = fs.readFileSync(competitionsFile, 'utf8');
    competitionsData = JSON.parse(rawCompetitions);
  } catch (error) {
    console.error('Error reading competitions.json:', error);
  }

  const teamsToProcess = new Map<number, any>(); // Store teams by id to avoid duplicates
  const playersToProcess = new Map<number, any>(); // Store players by id to avoid duplicates

  // Process all lineup files
  console.log('Processing lineup files...');
  const lineupFiles = fs.readdirSync(lineupsDir).filter(file => file.endsWith('.json'));

  for (const file of lineupFiles) {
    try {
      const rawData = fs.readFileSync(path.join(lineupsDir, file), 'utf8');
      const lineups = JSON.parse(rawData);

      for (const lineup of lineups) {
        // Process Team data
        const teamId = lineup.team_id;
        if (!teamsToProcess.has(teamId)) {
          teamsToProcess.set(teamId, {
            name: lineup.team_name,
            league: 'Unknown League', // Default, try to get from matches/competitions later
            founded: 0, // Default value
            stadium: 'Unknown Stadium', // Default value
            coach: 'Unknown Coach', // Default value, try to get from matches later
          });
        }

        // Process Player data
        for (const player of lineup.lineup) {
          const playerId = player.player_id;
          if (!playersToProcess.has(playerId)) {
            playersToProcess.set(playerId, {
              name: player.player_name,
              position: player.positions.length > 0 ? player.positions[0].position : 'Unknown',
              age: 0, // Default value
              country: player.country ? player.country.name : 'Unknown',
              team: lineup.team_name, // Assign current team, will be updated later if a player plays for multiple teams
              stats: {},
              physical: {
                height: 0,
                weight: 0,
                preferredFoot: 'Both', // Default value
              },
            });
          }
        }
      }
    } catch (error) {
      console.error(`Error processing lineup file ${file}:`, error);
    }
  }

  // Process all matches files to get league, stadium, and coach information
  console.log('Processing matches files for additional team data...');
  const competitionDirs = fs.readdirSync(matchesBaseDir).filter(dir => fs.statSync(path.join(matchesBaseDir, dir)).isDirectory());

  for (const compDir of competitionDirs) {
    const matchFilesDir = path.join(matchesBaseDir, compDir);
    const matchFiles = fs.readdirSync(matchFilesDir).filter(file => file.endsWith('.json'));

    for (const file of matchFiles) {
      try {
        const rawData = fs.readFileSync(path.join(matchFilesDir, file), 'utf8');
        const matches = JSON.parse(rawData);

        for (const match of matches) {
          // Update Home Team
          if (teamsToProcess.has(match.home_team.home_team_id)) {
            const team = teamsToProcess.get(match.home_team.home_team_id);
            if (match.competition && match.competition.competition_name) {
                team.league = match.competition.competition_name;
            } else {
                // Try to get from competitions.json if not in match
                const comp = competitionsData.find(c => c.competition_id === match.competition.competition_id);
                if (comp) team.league = comp.competition_name;
            }
            if (match.stadium && match.stadium.name) team.stadium = match.stadium.name;
            if (match.home_team.managers && match.home_team.managers.length > 0) team.coach = match.home_team.managers[0].name;
          }

          // Update Away Team
          if (teamsToProcess.has(match.away_team.away_team_id)) {
            const team = teamsToProcess.get(match.away_team.away_team_id);
            if (match.competition && match.competition.competition_name) {
                team.league = match.competition.competition_name;
            } else {
                const comp = competitionsData.find(c => c.competition_id === match.competition.competition_id);
                if (comp) team.league = comp.competition_name;
            }
            if (match.stadium && match.stadium.name) team.stadium = match.stadium.name;
            if (match.away_team.managers && match.away_team.managers.length > 0) team.coach = match.away_team.managers[0].name;
          }
        }
      } catch (error) {
        console.error(`Error processing match file ${file}:`, error);
      }
    }
  }

  // Save Teams to DB
  console.log('Saving teams to database...');
  for (const teamData of Array.from(teamsToProcess.values())) {
    try {
      // Check if team already exists by name to avoid duplicates
      let existingTeam = await Team.findOne({ name: teamData.name });

      if (existingTeam) {
        // Update existing team
        existingTeam.set({
          name: teamData.name,
          league: teamData.league,
          founded: teamData.founded,
          stadium: teamData.stadium,
          coach: teamData.coach,
        });
        await existingTeam.save();
      } else {
        // Create new team
        const newTeam = new Team(teamData);
        await newTeam.save();
      }
    } catch (error) {
      console.error(`Error saving team ${teamData.name}:`, error);
    }
  }
  console.log('Teams saved.');

  // Save Players to DB
  console.log('Saving players to database...');
  for (const playerData of Array.from(playersToProcess.values())) {
    try {
      // Check if player already exists by name and team to avoid duplicates
      let existingPlayer = await Player.findOne({ name: playerData.name, team: playerData.team });

      if (existingPlayer) {
        // Update existing player
        existingPlayer.set({
          name: playerData.name,
          position: playerData.position,
          age: playerData.age,
          country: playerData.country,
          team: playerData.team,
          stats: playerData.stats,
          physical: playerData.physical,
        });
        await existingPlayer.save();
      } else {
        // Create new player
        const newPlayer = new Player(playerData);
        await newPlayer.save();
      }
    } catch (error) {
      console.error(`Error saving player ${playerData.name}:`, error);
    }
  }
  console.log('Players saved.');

  mongoose.connection.close();
  console.log('MongoDB connection closed.');
};

importData(); 