const moment = require('moment')

const hoy = moment()
const nacim = moment("20/06/2022", "DD/MM/YYYY")

const difA = hoy.diff(nacim, "years")
const difD = hoy.diff(nacim, "days")


console.log(`Juana nació el ${nacim.format("DD/MM/YYYY")}`)
console.log(`Hoy es ${hoy.format("DD/MM/YYYY")}`)
console.log(`Juana tiene ${difD} diasrs`)