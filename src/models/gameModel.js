const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    title: {type: String,required: true},
    platform: String,
    released: {type: Date},
    coverImage: {type:String},
    createdAt: {type: Date, default: Date.now},
    genres: [String],
    users: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    avgRating: {type: Number, default: 0},
    ratingCount: {type: Number, default: 0},
    developer: {type: String},
    publisher: {type: String},
    tags: [String],
    totalAchievements: {type: Number, default: 0},
    description: {type: String, default: "null"}
}, {collection: "Games"})

const Game = mongoose.model("Game",gameSchema)

module.exports = Game