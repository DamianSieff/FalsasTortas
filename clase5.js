const fs = require('fs')
// const FSPromise = fs.promises

// Sync
function leerDatos() {
    fs.promises.readFile("/productos.json", "utf-8")
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
        .finally(() => console.log("archivo leido"))
}

// Async
async function leerDatosawait() {
    // Simil .then()
    try {
        const data = await fs.promises.readFile("/productos.json", "utf-8")
        console.log(data)
    }
    // Simil .catch()
    catch (error) {
        console.log(error)
    }
}

async function escribirDatosawait(data) {
    try {
        await fs.promises.writeFile("data/productos.json", data)
        console.log("Archivo escrito")
    }
    catch (error) {
        console.log("Error")
    }
}

const numeros = {}
function numeroAleatorio(num) {
    return parseInt(Math.random() * num) + 1
}

for (i = 0; i < 10000; i++) {
    const alAzar = numeroAleatorio(20)
    if (!numeros[alAzar]) {
        numeros[alAzar] = 0
    }
    numeros[alAzar] ++
}




