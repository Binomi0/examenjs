
class Mochila {
    constructor(objetos) {
      this.agua = objetos.find(_item => _item.type === 'agua').value
      this.pelota = objetos.find(_item => _item.type === 'pelota').value
      this.papel = objetos.find(_item => _item.type === 'papel').value
  
    }
  }
  
  module.exports = Mochila