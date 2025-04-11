const items = [
  { id: 1, name: "Mouse", quantity: 15 },
  { id: 2, name: "Keyboard", quantity: 7 },
  { id: 3, name: "Monitor", quantity: 3 },
]

const getInventory = (req, res) => {
  res.json(items)
}

module.exports = { getInventory }
