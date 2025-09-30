const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String,required: true},
    passwordHash: {type: String,required: true},
    createdAt: {type: Date, default: Date.now},
    games: {type: Array},
    favorites: {type: Array},
    ratings: {type: Array},
    bio: {type: String},
    socialLinks: {type:Array}
}, {collection: "Games"})