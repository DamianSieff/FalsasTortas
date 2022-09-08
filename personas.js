const express = require("express")
const { Router } = express
const router = Router()

//Confirguración de MIDDLEWARE multer
const multer = require("multer")
const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.fieldname)
    },
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    }
})

//ejecución de multer
const upload = multer({ storage })

/////////////////////////////////////////////////////////

const personas = []

/////////////////////////////////////////////////////////

router.get("/", (req, res) => {
    res.send({ personas })
})

/////////////////////////////////////////////////////////

router.post("/subir", upload.single("myFile"), (req, res) => {
    const { file } = req
    res.send(file)
});

router.post("/album", upload.array("myFile", 5), (req, res) => {
    const { file } = req
    res.send(file)
});

router.post("/", (req, res) => {
    const { nombre, apellido, edad } = req.body
    personas.push({ nombre, apellido, edad })
    res.send({ agregada: { nombre, apellido, edad } })
});

/////////////////////////////////////////////////////////

module.exports = router