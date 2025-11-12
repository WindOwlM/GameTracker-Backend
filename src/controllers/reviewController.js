const Review = require("../models/reviewModel")
const Game = require("../models/gameModel")

const createReview = async (req,res) =>{
    
    try {
        const newReview = new Review(req.body)
        await newReview.save()
        res.status(201).json(newReview)
    } catch (error) {
        if ( error.code == 11000) return res.status(400).json({ message: "Ya dejaste una reseña "+error.message })
        res.status(400).json({ error: error.message })
    }
}

const searchReview = async (req,res) =>{
    try {
        const { id } = req.params
        const review = await Review.find({user_id:id})
        .collection("games")
        .populate("user_id", "username")
        .populate("game_id", "title")

        if (!review) {
            return res.status(404).json({ message: "Review no encontrada" })
        }
        res.json(review)
    } catch (error) {
        res.status(400).json({ error: err.message })
    }
}

const searchAllReviews = async (req,res) =>{
    try {
        const { id } = req.params
        const game = await Game.findById({_id: id}).select("_id")

        if (!game) return res.status(404).json({message: "Juego no encontrado"})
        
        const review = await Review.find({game_id : game._id})
        .populate("user_id", "username")
        .select("score review")

        if (!review) {
            return res.status(404).json({ message: "Review no encontrada" })
        }
        res.json(review)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateReview = async (req,res) =>{
    try {
        const { game_id } = req.params
        const {user_id, ...updateData} = req.body
        const UReview = await Review.findOneAndUpdate(
            { user_id, game_id }, 
            updateData, 
            { new: true, upsert : true })
        if (!UReview) return res.status(404).json({ error: "Reseña no encontrada" })
            return res.json(UReview)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const deleteReview = async (req, res) => {
    try {
        const { review_id } = req.params
        const DReview = await Review.findByIdAndDelete(review_id)
        if (!DReview) return res.status(404).json({ error: "Reseña no encontrada" })
        res.json({ mensaje: "Reseña eliminada" })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

module.exports = {
    createReview,
    searchReview,
    searchAllReviews,
    updateReview,
    deleteReview
}