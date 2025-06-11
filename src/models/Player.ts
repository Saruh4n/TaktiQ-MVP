import mongoose from 'mongoose';

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this player'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  position: {
    type: String,
    required: [true, 'Please provide a position for this player'],
  },
  age: {
    type: Number,
    required: [true, 'Please provide an age for this player'],
  },
  country: {
    type: String,
    required: [true, 'Please provide a country for this player'],
  },
  team: {
    type: String,
    required: [true, 'Please provide a team for this player'],
  },
  stats: {
    goals: { type: Number, default: 0 },
    assists: { type: Number, default: 0 },
    matches: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    yellowCards: { type: Number, default: 0 },
    redCards: { type: Number, default: 0 },
    passAccuracy: { type: Number, default: 0 },
  },
  physical: {
    height: { type: Number, required: true }, // in cm
    weight: { type: Number, required: true }, // in kg
    preferredFoot: { type: String, enum: ['Left', 'Right', 'Both'], required: true },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Player || mongoose.model('Player', PlayerSchema); 