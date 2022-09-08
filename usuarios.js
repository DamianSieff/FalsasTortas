const express = require("express")
const { Router } = express
const router = Router()

const db = require("./db.js");
const DB = new db("data")

/////////////////////////////////////////////////////////

router.get("/", async (req, res) => {
    const data = await DB.getAllUsers()
    return res.send(data)
})

router.get("/:id", (req, res) => {
    res.send({ metodo: "get", query: req.query, params: req.params })
})

router.get("/", async (req, res) => {
    const { id } = req.query
    try {
        const data = await DB.getUserById(id)
        return res.send(data)
    } catch (e) {
        return res.status(404).send({ error: true, msg: e.message })
    }
})

/////////////////////////////////////////////////////////

router.post("/", async (req, res) => {
    const { nombre, correo } = req.body
    const data = await DB.createUser({ nombre, correo })
    return res.send({ error: false, msg: "Usuario creado" })
});

/////////////////////////////////////////////////////////

router.put("/:id", (req, res) => {
    res.send({ metodo: "put", body: req.body, params: req.params })
})

/////////////////////////////////////////////////////////

router.delete("/:id", (req, res) => {
    res.send({ metodo: "delete", params: req.params })
})

/////////////////////////////////////////////////////////

module.exports = router