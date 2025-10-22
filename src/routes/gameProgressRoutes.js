const express = require("express")
const router = express.Router()
const {
    createProgress,
    searchProgress
} = require("../controllers/gameProgressController")


router.post("/",createProgress)
router.get("/:id",searchProgress)

module.exports = router