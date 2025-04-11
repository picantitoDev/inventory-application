const express = require("express")
const app = express()
const { getInventory } = require("./controllers/inventoryController")

app.get("/", (req, res) => {
  res.send("waaa")
})

app.listen(8080, () => {
  console.log("Running on localhost...")
})
app.get("/inventory", getInventory)
