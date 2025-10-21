const Review = require("../models/reviewModel")

const createReview = async (req,res) =>{
    
    try {
        const newReview = new Review(req.body)
        await newReview.save()
        res.status(201).json(newReview)
    } catch (error) {
        res.status(400).json({ error: err.message })
    }
}

const searchReview = async (req,res) =>{
    try {
        const { id } = req.params
        const review = await Review.findById(id)
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

module.exports = {
    createReview,
    searchReview
}