const express = require("express");
const app = express();

const handlebars = require('express-handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))

app.engine('hbs',handlebars.engine({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'index'
}))

app.set('views', './views')
app.set('view engine', 'hbs')

app.get('/hbs', (req, res) => {
    res.render('main', {
        layout:'index',
        nombre:'machu',
        saludo: 'hola',
        compras: ['manzana', 'pera', 'mango']
    })
})



app.listen(8080, () => {

})