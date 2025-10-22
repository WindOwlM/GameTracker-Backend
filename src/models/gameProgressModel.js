const mongoose = require('mongoose')

const userGameProgressSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    game_id: { type: mongoose.Schema.Types.ObjectId, ref: "Game", required: true },
    achievementsCompleted: { type: Number, default: 0 },
    totalAchievements: { type: Number, default: 0 },
    hoursPlayed: { type: Number, default: 0 },
    lastPlayed: { type: Date, default: Date.now },
    lastAchievementDate: { type: Date },
    progress: { type: Number, default: 0 }
}, { collection: "UserGameProgress" });

const UserGameProgress = mongoose.model("UserGameProgress", userGameProgressSchema);

module.exports = UserGameProgress
