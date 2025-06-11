"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TeamSchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.models.Team || mongoose_1.default.model('Team', TeamSchema);
