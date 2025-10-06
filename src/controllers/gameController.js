const fs = require("fs")

const Game = require("../models/gameModel")

const buscar = async (req,res) => {

    try{
        const data = fs.readFileSync("./game.json", "utf-8")
        const games =JSON.parse(data)

        const data2 = fs.readFileSync("./screenshots.json", "utf-8")
        const pantalla =JSON.parse(data2)

        const data3 = fs.readFileSync("./achievements.json", "utf-8")
        const logros =JSON.parse(data3)

        const plataformas = games.platforms
        ? games.platforms.map(p => p.platform.name)
        : [];

        const generos = games.genres
        ? games.genres.map(g => g.name)
        : [];

        const tienda = games.stores
        ? games.stores.map(s => s.store.name)
        : [];

        const tags = games.tags
        ? games.tags.map(t => t.name)
        : [];

        const result = {
            id: games.id,
            nombre: games.name,
            plataformas,
            released: games.released,
            cover_image: games.background_image,
            generos,
            tienda,
            tags,
            pantallazos:{
                cuenta:pantalla.count,
                varios:pantalla.results.map(s => s.image)
            },
            logros:{
                cuenta: logros.count
            }
        }
        res.json(result);
    }catch(err) {
        res.status(500).json({ error: err.message });
    }

}

module.exports ={
    buscar
}