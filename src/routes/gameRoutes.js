const express = require("express")
const router = express.Router()
const {
    createGame,
    searchAllGames,
    searchGame,
    updateGame,
    deleteGame
} = require("../controllers/gameController")


router.post("/",createGame)
router.get("/",searchAllGames)
router.get("/:id",searchGame)
router.patch("/:id",updateGame)
router.delete("/:id",deleteGame)

module.exports = router