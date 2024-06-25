class Personaje {
    constructor(fuerza, vida, velocidad, mochila, name) {
      this.fuerza = fuerza
      this.vida = vida
      this.velocidad = velocidad
      this.mochila = mochila
      this.name = name
    }
  
    addPower(value) {
      this.fuerza = this.fuerza + value;
    }
    addLife(value) {
      this.vida = this.vida + value;
    }
    addSpeed(value) {
      this.velocidad = this.velocidad + value;
    }
    extractPower(value) {
      this.fuerza = this.fuerza - value;
    }
    basicHit(hit) {
      if (this.vida < 1) return
      console.log(`personaje ha recibido un hit de ${hit}`)
      const nuevaVida = this.vida - hit
      if (nuevaVida > 0) {
        this.vida = nuevaVida
      } else {
        this.vida = 0
        console.log('personaje muerto', this.name)
        
      }
    }
    extractSpeed(value) {
      this.velocidad = this.velocidad - value;
    }
  
  
  }

  module.exports = Personaje