const Game = require("../models/gameModel")

const createGame = async (req,res) => {
    try{

        const {title} = req.body

        const newGame = new Game(req.body)
        await newGame.save()
        res.status(201).json(newGame)
    }catch(err) {
        res.status(500).json({ error: err.message });
    }

}

const searchAllGames = async (req,res) => {
    try{
        const Games = await Game.find()
        res.status(201).json(Games)
    }catch(err) {
        res.status(500).json({ error: err.message });
    }
}

const searchGame = async (req, res) =>{
    try {
        const { id } = req.params
        const game = await Game.findById(id)
        if (!game) {
            return res.status(404).json({ message: "Juego no encontrado" })
        }
        res.json(game)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateGame = async (req, res) => {
    try {
        const { id } = req.params
        const UGame = await Game.findByIdAndUpdate(id, req.body, { new: true })
        if (!UGame) return res.status(404).json({ error: "Juego no encontrado" })
            return res.json(UGame)
        res.status(201).json(UGame)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
};

const deleteGame = async (req, res) => {
    try {
        const { id } = req.params
        const DGame = await Game.findByIdAndDelete(id)
        if (!DGame) return res.status(404).json({ error: "Juego no encontrado" })
        res.json({ mensaje: "Juego eliminado" })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

module.exports ={
    createGame,
    searchAllGames,
    searchGame,
    updateGame,
    deleteGame
}