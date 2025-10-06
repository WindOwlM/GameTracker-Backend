const express = require("express")
const cors = require("cors")
const app = express()
const userRoutes = require("./routes/userRoutes")
const gameRoutes = require("./routes/gameRoutes")

app.use(express.json())
app.use(cors())

app.use("/user", userRoutes)
app.use("/games", gameRoutes)

app.get("/", (req, res) => {
  res.send("🚀 API funcionando")
});

module.exports = app
