const express = require("express")
const app = express()



app.get("/", (req, res) => {
    res.send('<h1 style="color:red;">Ver los productos en /productos</h1>')
})

app.get("/productos", (req, res) => {
    const hora = new Date()
    res.send({ fecha: hora.toLocaleString() })
})



const server = app.listen(8080, () => {
    console.log("Servidor iniciado")
})

server.on("error", (error) => {
    console.error(`Error! ${error}`)
})
