const Game = require("../models/gameModel")

const createGame = async (req,res) => {
    try{
        const newGame = new Game(req.body)
        await newGame.save()
        res.status(201).json(newGame)
    }catch(err) {
        res.status(500).json({ error: err.message });
    }

}

module.exports ={
    createGame
}