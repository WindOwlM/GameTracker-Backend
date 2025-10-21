const express = require("express")
const router = express.Router()
const {
    createReview
} = require("../controllers/reviewController")


router.get("/",createReview)

module.exports = router