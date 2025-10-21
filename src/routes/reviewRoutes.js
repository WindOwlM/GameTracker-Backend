const express = require("express")
const router = express.Router()
const {
    createReview,
    searchReview
} = require("../controllers/reviewController")


router.post("/",createReview)
router.get("/:id",searchReview)

module.exports = router