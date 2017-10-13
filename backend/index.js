const express = require("express")
const app = express()

const gunplaCollection = [
  {
    id: 0,
    model: "DUMMY",
    year: 2000,
    price: 100000
  },
  {
    id: 1,
    model: "Gundam Barbatos",
    year: 2015,
    price: 800000
  },
  {
    id: 2,
    model: "Gundam Unicorn",
    year: 2010,
    price: 1200000
  },
  {
    id: 3,
    model: "Gundam RX",
    year: 2000,
    price: 3200000
  }
]

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.get("/", (req, res) => {
  res.send(gunplaCollection)
})

app.listen(3000, () => {
  console.log("API running on localhost:3000")
})
