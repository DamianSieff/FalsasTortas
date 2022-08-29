const express = require("express")

//equivalente a createServer
const app = express()

//Apuntar rutas
app.get("/", (req, res) => {
    res.send('<h1 style="color:blue;">Bienvenidos al servidor express</h1>')
})

let contador = 0
app.get("/visitas", (req, res) => {
    try {
        contador++
        res.send(`La cantidad de visitas es ${contador}`)
    } catch (e) {
        res.send({ error: true })
    }
})

app.get("/fyh", (req, res) => {
    const hora = new Date()
    res.send({ fecha: hora.toLocaleString() })
})

// Escucha
const server = app.listen(8080, () => {
    console.log("Servidor iniciado")
})

server.on("error", (error) => {
    console.error(`Error! ${error}`)
})
