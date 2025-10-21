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

module.exports = {
    createReview
}