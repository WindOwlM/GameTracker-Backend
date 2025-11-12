const mongoose = require('mongoose')
const Review = require('./reviewModel')

const gameSchema = new mongoose.Schema({
    title: {type: String,required: true},
    platform: String,
    released: {type: Number},
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
    description: {type: String, default: "null"},
    completed:Boolean
}, {collection: "Games"})

gameSchema.pre('findOneAndDelete', async function (next) {
    const game = await this.model.findOne(this.getFilter());
    if (game) {
        await Review.deleteMany({ game_id: game._id });
    }
    next();
});

const Game = mongoose.model("Game",gameSchema)

module.exports = Game