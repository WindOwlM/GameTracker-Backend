const mongoose = require("mongoose")

const gameSchema = new mongoose.Schema({
    rawgId: {type: Int, required: true},
    title: {type: String,required: true},
    platforms: {type: Array},
    released: {type: Date},
    coverImage: {type:String},
    createdAt: {type: Date, default: Date.now},
    genres: {type: Array},
    users: {type: Array},
    avgRating: {type: Float},
    ratingCount: {type: Int},
    description: {type: String},
    developer: {type: String},
    publisher: {type: String},
    tags: {type: Array},
    achievements: {type: Int}
}, {collection: "Games"})

const Game = mongoose.model("Game",gameSchema)

module.exports = Game