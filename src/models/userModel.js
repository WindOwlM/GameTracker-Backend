const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    bio: { type: String, default: "empty" },
    socialLinks: [{ platform: String, url: String }],

    library: [{
        game: { type: mongoose.Schema.Types.ObjectId, ref: "Game" },
        addedAt: { type: Date, default: Date.now },
        progress: { type: Number, default: 0 },
        achievementsUnlocked: { type: Number, default: 0 }
    }],

    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Game" }]
}, {collection: "Users"})

const User = mongoose.model("User",userSchema)

module.exports = User