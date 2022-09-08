const express = require("express");
const app = express();

const fs = require('fs')
const fsPromise = fs.promises

//extension       
app.engine('coder', async (filePath, options, callback) => {

    try {

        //Model
        const { nombre } = options

        //View
        const template = await fsPromise.readFile(filePath, 'utf-8')

        //Controller
        const rendered = template.replace('{{nombre}}', nombre)

        return callback(null, rendered)
    } catch (e) {
        return callback(new Error('Plantilla no encontrada'))
    }

})

app.set('views', './views')
app.set('view engine', 'coder')

app.get('/saludo/:nombre', (req, res) => {
    const data = {
        nombre: req.params.nombre
    }
    res.render('plantilla', data)
})


app.listen(8080, () => { })