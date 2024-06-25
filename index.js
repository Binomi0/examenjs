const personaje = {
  fuerza: 50
}

console.log(personaje)

function addPower (value) {
  personaje.fuerza = personaje.fuerza + value
}
addPower(25)
console.log(personaje.fuerza)

