const express = require("express")
const app = express()

//Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.get("/api/frase", (req, res) => {
    res.send({ frase: palabras.join(' ') })
})


app.get("/api/letra/:num", (req, res) => {
    const { num } = req.params

    if (isNaN(parseInt(num))) { //isNaN = si NO es numerico
        res.status(403).send({ error: true, msg: "no numerico" })
    } else {
        res.send(palabras[num - 1])
    }
})

/////////////////////////////////////////////////////////

app.listen(8080, () => {
    console.log("iniciado")
})