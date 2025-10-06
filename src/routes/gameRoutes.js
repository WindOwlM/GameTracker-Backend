const express = require("express")
const router = express.Router()
const {
    buscar
} = require("../controllers/gameController")


router.get("/",buscar)

module.exports = router