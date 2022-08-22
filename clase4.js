/* const palabra = 'perro'
const fin = () => console.log('terminé')

const mostrarLetras = (string, fun) => {
    for (i = 0; i < string.length; i++) {
        let letra = string[i]
        setTimeout(() => {
            console.log(letra)
        }, 1000 * i)
    }
    setTimeout(() => {
        fun()
    }, 1000 * i)
}

mostrarLetras(palabra, fin) */

/* function mostrarLetras(palabra,cb){
    let i = 0
    const timer = setInterval(() => {
        if(palabra.length > i){
            console.log(palabra[i])
            i++
        }else{
            clearInterval(timer)
            cb()
        }
    }, 1000);
}

const fin = () => console.log('terminé')

setTimeout(() => {mostrarLetras('hola',fin)}, 0);
setTimeout(() => {mostrarLetras('hola',fin)}, 250);
setTimeout(() => {mostrarLetras('hola',fin)}, 500); */


/////////////////////////////////////////////////

const menu = {
    hamburguesa: 2,
    milanesa: 3,
    tiramisu: 2,
    pasta: 4
}

const productos = Object.keys(menu)

const crearPedido = (producto) => {
    return new Promise((resolve, reject) => {
        if (menu[producto] > 0) {
            menu[producto] -= 1
            resolve(`${producto} servido`)
        } else {
            reject(`${producto} agotado`)
        }
    })
}

const atenderCliente = (num) => {
    const pedido = productos[Math.floor(Math.random() * productos.length)]

    crearPedido(pedido)
        .then((data) => console.log(`Mostrador ${num} - [THEN]`, data))
        .catch((error) => console.error(`Mostrador ${num} - [CATCH]`, error))
        .finally(() => {
            console.log(
                `Mostrador ${num} - [FINALLY] Orden finalizada`,
                new Date()
            )
            console.log("menu restante:")
            console.table(menu)
        })
}

function habilitarMostrador(num) {
    const atencion = setInterval(atenderCliente, 2000)

    setTimeout(() => {
        clearInterval(atencion)
    }, 5000);
}

// habilitarMostrador(1)
// habilitarMostrador(2)

async function start() {
    setInterval(async () => {
        const pedir = productos[Math.floor(Math.random() * productos.length)]
        try {
            const data = await crearPedido(pedir)
            console.log(`[EQUIVALENTE THEN]`, data)
        } catch (error) {
            console.log(`[EQUIVALENTE CATCH]`, error)
        }
        console.log(`[EQUIVALENTE FINALLY] Orden finalizada`)
        console.log('Menu restante:')
        console.table(menu)
    }, 2000)
}

start()