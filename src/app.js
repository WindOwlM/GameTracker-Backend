const express = require("express")
const cors = require("cors")
const app = express()
const userRoutes = require("./routes/userRoutes")
const gameRoutes = require("./routes/gameRoutes")
const reviewRoutes = require("./routes/reviewRoutes")
const gameProgressRoutes = require("./routes/gameProgressRoutes")

app.use(express.json())
app.use(cors())

app.use("/user", userRoutes)
app.use("/games", gameRoutes)
app.use("/review", reviewRoutes)
app.use("/progress", gameProgressRoutes)

app.get("/", (req, res) => {
  res.send("🚀 API funcionando")
});

module.exports = app
