const gameProgress = require("../models/gameProgressModel")

const createProgress = async (req, res) =>{
    try {
        const Progress = new gameProgress(req.body)
        await Progress.save()
        res.status(201).json(Progress)
    } catch (error) {
        res.status(400).json({ message: error.message });
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
    createProgress,
    searchProgress
}