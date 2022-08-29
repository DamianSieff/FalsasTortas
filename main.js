const express = require("express")
const app = express()

const contenedor = require("./container")
const newCont = new contenedor("./data/productos.json")



app.get("/", (req, res) => {
    res.send('<h1>Bienvenidos al servidor express</h1>')
})

app.get("/productos", (req, res) => {
    res.send(newCont.getAll())
})

app.get("/productoRandom", (req, res) => {
    res.send(newCont.getRandom())
})



const server = app.listen(8080, () => {
    console.log("Servidor iniciado")
})