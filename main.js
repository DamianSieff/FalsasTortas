const express = require("express")
const app = express()

const palabrasRouter = require("./palabras.js")
const usuariosRouter = require("./usuarios.js")
const productosRouter = require("./productos.js")
const personasRouter = require("./personas.js")
const mascotasRouter = require("./mascotas.js")

/////////////////////////////////////////////////////////

//Middlewares generales
app.use(express.urlencoded({ extended: true })) // Parsea el codigo a UTF-8, el extended hace que tambien tome los boolean por ejemplo
app.use(express.json()) // Parsea a JSON los strings

app.use('/api', express.static(__dirname +'/public')) 
/* El primer parametro es opcional, es para indicar en que directorio (ruta) se va a servir,
Por defecto lo asigna al rout (/)
El '__dirname' hace que pueda ser llamado desde cualquier sitio donde me encuentre */


//Middlewares específicos
app.use("/palabras", palabrasRouter)
app.use("/usuarios", usuariosRouter)
app.use("/productos", productosRouter)
app.use("/personas", personasRouter)
app.use("/mascotas", mascotasRouter)

/////////////////////////////////////////////////////////

app.get("/", (req, res) => {
    res.send('<h1>Bienvenidos a Falsas Tortas en express</h1>')
})

/////////////////////////////////////////////////////////

app.listen(8080, () => {
    console.log("Iniciado")
})