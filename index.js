const Personaje = require('./personaje')
const {Mochila, Mochila2} = require('./items')
const {lista1, lista2} = require('./constants')

const mochila = new Mochila(lista1)
const personajeA = new Personaje(1000, 10000, 300, mochila, 'Personaje 1')
const mochila2 = new Mochila2(lista2)
const personajeB = new Personaje(500, 5000, 150, mochila2, 'Personaje 2')

personajeA.velocidad

console.log(personajeA)

console.log(personajeB)
