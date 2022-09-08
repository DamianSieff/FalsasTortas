const express = require("express")
const { Router } = express
const router = Router()

/////////////////////////////////////////////////////////

let palabras = ["Frase", "inicial"]

/////////////////////////////////////////////////////////

router.get("/:pos", (req, res) => {
    const { pos } = req.params
    res.send({ buscada: palabras[pos - 1] })
})

/////////////////////////////////////////////////////////

router.post("/", (req, res) => {
    const { palabra } = req.body
    palabras.push(palabra)
    res.send({ agregada: palabra, pos: palabras.length })
});

/////////////////////////////////////////////////////////

router.put("/:pos", (req, res) => {
    const { pos } = req.params
    const { palabra } = req.body
    const anterior = palabras[pos - 1]
    palabras[pos - 1] = palabra
    res.send({ actualizada: palabra, anterior: anterior })
})

/////////////////////////////////////////////////////////

router.delete("/:pos", (req, res) => {
    const { pos } = req.params
    const palabra = palabras[pos - 1]
    palabras = palabras.filter(palabra => palabra !== palabras[pos - 1])
    
    res.send({ eliminada: palabra })
})

/////////////////////////////////////////////////////////

module.exports = router