const fs = require("fs")

module.exports = class Contenedor {
    constructor(archivo) {
        this.archivo = archivo
    }

    async save(producto) {
        try {
            const data = await fs.promises.readFile(this.archivo, "utf-8")
            const objetos = JSON.parse(data)

            const id = objetos.length + 1
            producto.id = id
            objetos.push(producto)

            const productosString = JSON.stringify(objetos)
            await fs.promises.writeFile(this.archivo, productosString)
            console.log("Se guardo el producto")
        }
        catch (err) {
            console.log("No se pudo guardar el producto")
        }
    }

    async getById(id) {
        const data = await fs.promises.readFile(this.archivo, "utf-8")
        const objetos = JSON.parse(data)
        const objeto = objetos.find((objeto) => objeto.id == id)
        if (objeto) {
            return objeto
        } else {
            console.log("Producto no encontrado!")
        }
    }

    async putById(id) {
        const data = await fs.promises.readFile(this.archivo, "utf-8")
        const objetos = JSON.parse(data)
        const objeto = objetos.find((objeto) => objeto.id == id)
        if (objeto) {
            return objeto
        } else {
            console.log("Producto no encontrado!")
        }
    }

    getAll() {
        try {
            const data = fs.readFileSync(this.archivo, "utf-8")
            const objetos = JSON.parse(data)
            return objetos
            console.log(objetos)
        } catch (err) {
            console.log("Archivo inexistente")
            console.log(err)
        }

    }

    async deleteById(id) {
        const data = await fs.promises.readFile(this.archivo, "utf-8")
        const parse = JSON.parse(data)

        const filtro = parse.filter(objeto => objeto.id != id)

        if (parse.length == filtro.length) {
            return { error: 'Producto no encontrado' }
        } else {
            const string = JSON.stringify(filtro)
            await fs.promises.writeFile(this.archivo, string)

            console.log("Se eliminó el producto")
            return string
        }
    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify([]))
            const data = await fs.promises.readFile(this.archivo, "utf-8")
            console.log("Archivo vaciado")
            console.log(data)
        } catch (err) {
            console.log("No se pudo vaciar el archivo")
        }
    }

    getRandom() {
        const data = fs.readFileSync(this.archivo, "utf-8")
        const parse = JSON.parse(data)
        const random = parse[Math.floor(Math.random() * parse.length)]
        console.log(random)
        return random
    }

}