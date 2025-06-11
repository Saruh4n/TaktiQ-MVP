import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this team'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  league: {
    type: String,
    required: [true, 'Please provide a league for this team'],
  },
  founded: {
    type: Number,
    required: [true, 'Please provide a founding year for this team'],
  },
  stadium: {
    type: String,
    required: [true, 'Please provide a stadium name for this team'],
  },
  coach: {
    type: String,
    required: [true, 'Please provide a coach name for this team'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Team || mongoose.model('Team', TeamSchema); 