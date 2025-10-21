const express = require("express")
const router = express.Router()
const {
    createGame
} = require("../controllers/gameController")


router.get("/",createGame)

module.exports = router