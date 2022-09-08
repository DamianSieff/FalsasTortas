const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/////////////////////////////////////////////////////////

app.get("/api/sumar/:num1/:num2", (req, res) => {
    const { num1, num2 } = req.params
    res.send({ val: Number(num1) + Number(num2) })
})

app.get("/api/sumar", (req, res) => {
    const { num1, num2 } = req.query
    res.send({ val: Number(num1) + Number(num2) })
})

app.get("/api/sumar/:operacion", (req, res) => {
    const { operacion } = req.params
    res.send({ val: eval(operacion) })
})

/////////////////////////////////////////////////////////

app.listen(8080, () => {
    console.log("iniciado")
})