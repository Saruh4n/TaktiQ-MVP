const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Import your Mongoose models
const Player = require('../src/models/Player').default;
const Team = require('../src/models/Team').default;

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Error: MONGODB_URI is not defined in .env.local');
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const importData = async () => {
  await connectDB();

  const lineupsDir = path.join(__dirname, '../open-data-master/data/lineups');
  const matchesBaseDir = path.join(__dirname, '../open-data-master/data/matches');
  const competitionsFile = path.join(__dirname, '../open-data-master/data/competitions.json');

  let competitionsData = [];
  try {
    const rawCompetitions = fs.readFileSync(competitionsFile, 'utf8');
    competitionsData = JSON.parse(rawCompetitions);
  } catch (error) {
    console.error('Error reading competitions.json:', error);
  }

  const teamsToProcess = new Map(); // Store teams by id to avoid duplicates
  const playersToProcess = new Map(); // Store players by id to avoid duplicates

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
            _id: new mongoose.Types.ObjectId(), // Generate new ObjectId
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
              _id: new mongoose.Types.ObjectId(), // Generate new ObjectId
              name: player.player_name,
              position: player.positions.length > 0 ? player.positions[0].position : 'Unknown',
              age: 0, // Default value
              country: player.country ? player.country.name : 'Unknown',
              team: lineup.team_name, // Assign current team, will be updated later if a player plays for multiple teams
              stats: {}, // Mongoose will apply default: 0 for all nested stat fields
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
  for (const teamData of teamsToProcess.values()) {
    try {
      // Check if team already exists by name to avoid duplicates
      let existingTeam = await Team.findOne({ name: teamData.name });
      if (existingTeam) {
        // Update existing team
        existingTeam.set(teamData);
        await existingTeam.save();
        // console.log(`Updated team: ${existingTeam.name}`);
      } else {
        // Create new team
        const newTeam = new Team(teamData);
        await newTeam.save();
        // console.log(`Added new team: ${newTeam.name}`);
      }
    } catch (error) {
      console.error(`Error saving team ${teamData.name}:`, error);
    }
  }
  console.log('Teams saved.');

  // Save Players to DB
  console.log('Saving players to database...');
  for (const playerData of playersToProcess.values()) {
    try {
      // Check if player already exists by name and team to avoid duplicates
      let existingPlayer = await Player.findOne({ name: playerData.name, team: playerData.team });
      if (existingPlayer) {
        // Update existing player
        existingPlayer.set(playerData);
        await existingPlayer.save();
        // console.log(`Updated player: ${existingPlayer.name}`);
      } else {
        // Create new player
        const newPlayer = new Player(playerData);
        await newPlayer.save();
        // console.log(`Added new player: ${newPlayer.name}`);
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