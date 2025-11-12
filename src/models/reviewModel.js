const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    game_id: { type: mongoose.Schema.Types.ObjectId, ref: "Game", required: true },
    rating: { type: Number, min: 0, max: 5 },
    review: String,
    hoursPlayed: { type: Number, default: 0 },
    difficulty : String,
    recommend : Boolean
}, { timestamps: true },{collection: "Reviews"});

reviewSchema.index({ user_id: 1, game_id: 1 }, { unique: true });

const Review = mongoose.model("Review",reviewSchema)

module.exports = Review