"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env.local') });
// Import your Mongoose models
const Player_1 = __importDefault(require("../src/models/Player"));
const Team_1 = __importDefault(require("../src/models/Team"));
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    console.error('Error: MONGODB_URI is not defined in .env.local');
    process.exit(1);
}
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(MONGODB_URI);
        console.log('MongoDB Connected...');
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
const importData = async () => {
    await connectDB();
    const lineupsDir = path_1.default.join(__dirname, '../open-data-master/data/lineups');
    const matchesBaseDir = path_1.default.join(__dirname, '../open-data-master/data/matches');
    const competitionsFile = path_1.default.join(__dirname, '../open-data-master/data/competitions.json');
    let competitionsData = [];
    try {
        const rawCompetitions = fs_1.default.readFileSync(competitionsFile, 'utf8');
        competitionsData = JSON.parse(rawCompetitions);
    }
    catch (error) {
        console.error('Error reading competitions.json:', error);
    }
    const teamsToProcess = new Map(); // Store teams by id to avoid duplicates
    const playersToProcess = new Map(); // Store players by id to avoid duplicates
    // Process all lineup files
    console.log('Processing lineup files...');
    const lineupFiles = fs_1.default.readdirSync(lineupsDir).filter(file => file.endsWith('.json'));
    for (const file of lineupFiles) {
        try {
            const rawData = fs_1.default.readFileSync(path_1.default.join(lineupsDir, file), 'utf8');
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
        }
        catch (error) {
            console.error(`Error processing lineup file ${file}:`, error);
        }
    }
    // Process all matches files to get league, stadium, and coach information
    console.log('Processing matches files for additional team data...');
    const competitionDirs = fs_1.default.readdirSync(matchesBaseDir).filter(dir => fs_1.default.statSync(path_1.default.join(matchesBaseDir, dir)).isDirectory());
    for (const compDir of competitionDirs) {
        const matchFilesDir = path_1.default.join(matchesBaseDir, compDir);
        const matchFiles = fs_1.default.readdirSync(matchFilesDir).filter(file => file.endsWith('.json'));
        for (const file of matchFiles) {
            try {
                const rawData = fs_1.default.readFileSync(path_1.default.join(matchFilesDir, file), 'utf8');
                const matches = JSON.parse(rawData);
                for (const match of matches) {
                    // Update Home Team
                    if (teamsToProcess.has(match.home_team.home_team_id)) {
                        const team = teamsToProcess.get(match.home_team.home_team_id);
                        if (match.competition && match.competition.competition_name) {
                            team.league = match.competition.competition_name;
                        }
                        else {
                            // Try to get from competitions.json if not in match
                            const comp = competitionsData.find(c => c.competition_id === match.competition.competition_id);
                            if (comp)
                                team.league = comp.competition_name;
                        }
                        if (match.stadium && match.stadium.name)
                            team.stadium = match.stadium.name;
                        if (match.home_team.managers && match.home_team.managers.length > 0)
                            team.coach = match.home_team.managers[0].name;
                    }
                    // Update Away Team
                    if (teamsToProcess.has(match.away_team.away_team_id)) {
                        const team = teamsToProcess.get(match.away_team.away_team_id);
                        if (match.competition && match.competition.competition_name) {
                            team.league = match.competition.competition_name;
                        }
                        else {
                            const comp = competitionsData.find(c => c.competition_id === match.competition.competition_id);
                            if (comp)
                                team.league = comp.competition_name;
                        }
                        if (match.stadium && match.stadium.name)
                            team.stadium = match.stadium.name;
                        if (match.away_team.managers && match.away_team.managers.length > 0)
                            team.coach = match.away_team.managers[0].name;
                    }
                }
            }
            catch (error) {
                console.error(`Error processing match file ${file}:`, error);
            }
        }
    }
    // Save Teams to DB
    console.log('Saving teams to database...');
    for (const teamData of Array.from(teamsToProcess.values())) {
        try {
            await Team_1.default.findOneAndUpdate({ name: teamData.name }, {
                $set: {
                    name: teamData.name,
                    league: teamData.league,
                    founded: teamData.founded,
                    stadium: teamData.stadium,
                    coach: teamData.coach,
                },
            }, { upsert: true, new: true, runValidators: true });
            // console.log(`Processed team: ${teamData.name}`);
        }
        catch (error) {
            console.error(`Error saving team ${teamData.name}:`, error);
        }
    }
    console.log('Teams saved.');
    // Save Players to DB
    console.log('Saving players to database...');
    for (const playerData of Array.from(playersToProcess.values())) {
        try {
            await Player_1.default.findOneAndUpdate({ name: playerData.name, team: playerData.team }, {
                $set: {
                    name: playerData.name,
                    position: playerData.position,
                    age: playerData.age,
                    country: playerData.country,
                    team: playerData.team,
                    stats: playerData.stats,
                    physical: playerData.physical,
                },
            }, { upsert: true, new: true, runValidators: true });
            // console.log(`Processed player: ${playerData.name}`);
        }
        catch (error) {
            console.error(`Error saving player ${playerData.name}:`, error);
        }
    }
    console.log('Players saved.');
    mongoose_1.default.connection.close();
    console.log('MongoDB connection closed.');
};
importData();
