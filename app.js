const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("waaa")
})

app.listen(8080, () => {
  console.log("Running on localhost...")
})
