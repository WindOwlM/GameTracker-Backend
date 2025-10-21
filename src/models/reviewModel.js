const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    game_id: { type: mongoose.Schema.Types.ObjectId, ref: "Game" },
    score: { type: Number, min: 0, max: 5 },
    review: String
}, { timestamps: true },{collection: "Reviews"});