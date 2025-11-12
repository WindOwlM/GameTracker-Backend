const express = require("express")
const router = express.Router()
const {
    createReview,
    searchReview,
    searchAllReviews,
    updateReview,
    deleteReview
} = require("../controllers/reviewController")


router.post("/",createReview)
router.get("/:id",searchReview)
router.get("/game/:id",searchAllReviews)
router.patch("/:game_id",updateReview)
router.delete("/:review_id",deleteReview)

module.exports = router