const mongoose = require("mongoose")

const gameSchema = new mongoose.Schema({
    rawgId: {type: BigInt, required: true},
    title: {type: String,required: true},
    platforms: {type: Array},
    released: {type: Date},
    coverImage: {type:String},
    createdAt: {type: Date, default: Date.now},
    genres: {type: Array},
    stores: {type:Array},
    users: {type: Array},
    avgRating: {type: String},
    ratingCount: {type: BigInt},
    developer: {type: String},
    publisher: {type: String},
    tags: {type: Array},
    totalAchievements: {type: BigInt},
    achievementsCompleted: {type: BigInt, default: 0},
    screenshots: {type: Array}
}, {collection: "Games"})

const Game = mongoose.model("Game",gameSchema)

module.exports = Game