class Personaje {
    constructor(fuerza, vida, velocidad, mochila, name, mochila2) {
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
      if (this.fuerza < 100) return
      const nuevaFuerza = this.fuerza - value
      if (nuevaFuerza >= 100) {
        this.fuerza = nuevaFuerza
      } else {
        this.fuerza = 100
      }
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
      if (this.velocidad < 100) return
      const nuevaVelocidad = this.velocidad - value
      if (nuevaVelocidad >= 100) {
        this.velocidad = nuevaVelocidad
      } else {
        this.velocidad = 100
      }
    }

  }

  module.exports = Personaje