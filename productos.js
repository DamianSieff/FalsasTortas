const express = require("express")
const { Router } = express
const router = Router()

const contenedor = require("./container")
const newCont = new contenedor("./data/productos.json")

/////////////////////////////////////////////////////////

router.get("/", async (req, res) => {
    const productos = await newCont.getAll()
    res.send(productos)
})

router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const data = await newCont.getById(id)
        return res.send(data)
    } catch (e) {
        return res.status(404).send({ error: true, msg: e.message })
    }
})

/////////////////////////////////////////////////////////

router.post("/", async (req, res) => {
    const prod = req.body
    await newCont.save(prod)
    res.send(prod)
})

/////////////////////////////////////////////////////////

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    const parse = await newCont.deleteById(id)
    res.send(parse)
})

/////////////////////////////////////////////////////////

module.exports = router