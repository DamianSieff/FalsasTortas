const http = require('http')
const moment = require('moment')


const server = http.createServer((req, res) => {
    const hora = moment().hours()

    if (hora >= 6 && hora <= 19) {
        res.end('Buenos dias!')
    }else if (hora >= 13 && hora <= 19) {
        res.end('Buenas tardes!')
    } else {
        res.end('Buenas noches!')
    }
})

const conn = server.listen(8082, () => {
    console.log(`Servidor activo en el puerto: ${conn.address().port}`)
})

