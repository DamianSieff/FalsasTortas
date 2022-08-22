const fs = require('fs')

/* console.log('iniciado')
const data = fs.readFileSync("usuario.json", "utf-8")
console.log(data)
console.log('terminado')

fs.writeFileSync("usuario.json", JSON.stringify({usuario: "Maria"}) , "utf-8")

const data2 = fs.readFileSync("usuario2.json", "utf-8")
console.log(data2) */

// fs.appendFileSync("usuario.json", ' Asi agrega appendFileSync')

// fs.writeFileSync("usuario.json",
//     JSON.stringify({ usuario: "Maria" }), "utf-8")

try {
    // fs.unlinkSync("usuario2.json")
    const data = fs.readFileSync("usuario.json", "utf-8")
    console.log(data)
} catch (err) {
    console.log('Archivo no existe')
}