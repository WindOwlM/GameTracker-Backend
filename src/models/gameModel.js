const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    title: {type: String,required: true},
    platforms: {type: Array},
    released: {type: Date},
    coverImage: {type:String},
    createdAt: {type: Date, default: Date.now},
    genres: {type: Array},
    stores: {type:Array},
    users: {type: Array},
    avgRating: {type: String},
    ratingCount: {type: Number, default: 0},
    developer: {type: String},
    publisher: {type: String},
    tags: {type: Array},
    totalAchievements: {type: Number, default: 0},
    achievementsCompleted: {type: Number, default: 0},
}, {collection: "Games"})

const Game = mongoose.model("Game",gameSchema)

module.exports = Game