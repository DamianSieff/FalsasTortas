// Se importa/referencia al file System
const fs = require('fs')

// Se crea clase + constructor
class baseDeDatos {

    constructor(archivo) {
        this.archivo = archivo
    }

    // Crear usuario
    async createUser(objUser) {
        const data = await fs.promises.readFile(`${this.archivo}/usuarios.json`, 'utf-8')
        const usuarios = JSON.parse(data)
        const id = usuarios.length + 1

        objUser.id = id
        objUser.likes = []
        usuarios.push(objUser)

        const usuariosString = JSON.stringify(usuarios)
        await fs.promises.writeFile(`${this.archivo}/usuarios.json`, usuariosString)

        return usuarios
    }


    // Obtener todos los usuarios
    async getAllUsers() {
        const data = await fs.promises.readFile(`${this.archivo}/usuarios.json`, 'utf-8')
        return JSON.parse(data)
    }


    // Obtener usuarios por ID
    async getUserById(id) {
        const data = await fs.promises.readFile(`${this.archivo}/usuarios.json`, 'utf-8')
        const usuarios = JSON.parse(data)
        const usuario = usuarios.find((usuario) => usuario.id == id)

        if (usuario) {
            return usuario
        } else {
            return 'usuario no encontrado'
        }
    }


    // Obtener like de usuarios por ID
    async getLikesById() {
        const data = await fs.promises.readFile(`${this.archivo}/usuarios.json`, 'utf-8')
        const usuarios = JSON.parse(data)
        const usuario = usuarios.find((usuario) => usuario.id == id)

        if (usuario) {
            return usuario.likes
        } else {
            return 'usuario no encontrado'
        }
    }



    // Dar like
    async likePage() {

    }


    // Crear pagina
    async createPage(pageObj) {
        const data = await fs.promises.readFile(`${this.archivo}/pages.json`, 'utf-8')
        const paginas = JSON.parse(data)

        const id = paginas.length + 1
        pageObj.id = id

        paginas.push(pageObj)

        const stringPaginas = JSON.stringify(paginas)
        await fs.promises.writeFile(`${this.archivo}/pages.json`, stringPaginas)

        return paginas //no estoy segurp
    }

}


async function start() {
    const db = new baseDeDatos('data')

    db.createUser({ nombre: 'Marcelo', correo: 'mdg@gmail.com' })
    const users = await db.getAllUsers()
    console.log(users)

    // console.log(await db.getLikesById(1))
    // console.log(usuario)
}

start()