const fs = require(`fs`)

class Contenedor {
    constructor(file) {
        this.file = file
    }

    async save(prod) {
        try {
            const data = await fs.promises.readFile(
                `${this.file}/data.json`, "utf-8")
            const products = JSON.parse(data)

            const id = products.length + 1
            prod.id = id

            products.push(prod)

            const prodString = JSON.stringify(products)
            await fs.promises.writeFile(
                `${this.file}/data.json`, prodString)
        } catch (err) {
            console.log(err)
        }

    }

    async getById(id) {
        const data = await fs.promises.readFile(`${this.file}/data.json`, "utf-8")
        const products = JSON.parse(data)
        const foundProd = products.find((prod) => prod.id == id)
        return foundProd;

    }

    async getAll() {
        const data = await fs.promises.readFile(`${this.file}/data.json`, "utf-8")
        const products = JSON.parse(data)
        return products;
    }

    async deleteById(id) {
        const data = await fs.promises.readFile(`${this.file}/data.json`, "utf-8")
        const parse = JSON.parse(data)

        const deleteFile = parse.filter((item) => item.id !== id)
        const write = JSON.stringify(deleteFile)

        await fs.promises.writeFile(`${this.file}/data.json`, write)
        return deleteFile
            ? `Se elimino el id:${id}`
            : `No se encontro id:${id} para eliminar`
    }

    async deleteAll(file) {
        const prodString = []
        await fs.promises.writeFile(
            `${this.file}/data.json`, prodString)
    }
}

async function test() {
    const file = new Contenedor("data")
    // file.save({ name: "Falsa Torta x" })
    // console.log(await file.getById(1))
    console.log(await file.getAll())
    // console.log(await file.deleteById(5))
    // await file.deleteAll("data")

}
test()