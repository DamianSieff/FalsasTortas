const express = require("express")
const { Router } = express
const router = Router()

/////////////////////////////////////////////////////////

const mascotas = []

/////////////////////////////////////////////////////////

router.get("/", (req, res) => {
    res.send({ mascotas })
})

/////////////////////////////////////////////////////////

router.post("/", (req, res) => {
    const { nombre, raza, edad } = req.body
    mascotas.push({ nombre, raza, edad })
    res.send({ agregada: { nombre, raza, edad } })
});

/////////////////////////////////////////////////////////

module.exports = router