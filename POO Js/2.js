/* 2. Crea una instancia de la clase "Perro" llamada "miPerro" con un nombre de tu elección. Llama al método
ladrar() de la instancia. */

class Perro {
    constructor (nombre){
        this.nombre=nombre;
    }

    ladrar(){
        return "woof " + this.nombre;
    }
}

const miPerro = new Perro("Tarkan");
miPerro.ladrar();