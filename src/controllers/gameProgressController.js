const gameProgress = require("../models/gameProgressModel")
const Game = require("../models/gameModel")
const User = require("../models/userModel")

const addGameToLibrary = async (req, res) => {
    try {
        const { user_id, game_id } = req.body

        const user = await User.findById(user_id)
        const game = await Game.findById(game_id)

        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' })
        if (!game) return res.status(404).json({ error: 'Juego no encontrado' })

        const exists = await gameProgress.findOne({ user_id: user_id, game_id: game_id })
        if (exists) return res.status(200).json({ message: 'El juego ya está en la biblioteca', exists })

        // 3️⃣ Crear nuevo registro de progreso
        const newProgress = new gameProgress({
        user_id: user_id,
        game_id: game_id,
        progress: 0,
        achievementsUnlocked: 0,
        totalAchievements: game.totalAchievements || 0
        })

        await newProgress.save()

        // 4️⃣ Responder con el registro creado
        res.status(201).json({
        message: 'Juego agregado correctamente a la biblioteca',
        progress: newProgress
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const searchProgress = async (req, res) =>{
    try {
        const { id } = req.params
        const progress = await gameProgress.findById(id)
        .populate("user_id", "username")
        .populate("game_id", "title")

        if (!progress) {
            return res.status(404).json({ message: "Progreso no encontrado" })
        }
        res.json(progress)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports = {
    addGameToLibrary,
    searchProgress
}