const express = require("express")
const router = express.Router()
const {
    addGameToLibrary,
    searchProgress
} = require("../controllers/gameProgressController")


router.post("/",addGameToLibrary)
router.get("/:id",searchProgress)

module.exports = router