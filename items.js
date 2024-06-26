
class Mochila {
    constructor(objetos) {
      this.agua = objetos.find(_item => _item.type === 'agua').value
      this.pelota = objetos.find(_item => _item.type === 'pelota').value
      this.papel = objetos.find(_item => _item.type === 'papel').value
  
    }
  }

  class Mochila2 {
    constructor(objetos) {
      this.soda = objetos.find(_item => _item.type === 'soda').value
      this.flixo = objetos.find(_item => _item.type === 'flixo').value
      this.armas = objetos.find(_item => _item.type === 'armas').value
  
    }
  }
  
  module.exports = {Mochila, Mochila2}