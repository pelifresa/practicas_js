// Clases - molde que nos permite generar objetos de un tipo concreto similares unos a otros


class Coche {
    constructor(modelo, velocidad, antiguedad) {
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }
    aumentarVelocidad() {
        this.velocidad += 1;
    }
    reducirVelocidad() {
        this.velocidad -= 1;
    }

}

var coche1 = new Coche('Toyota', 200, 2017);
var coche2 = new Coche('Audi', 200, 2018);
var coche3 = new Coche('BMW', 200, 2015);
var coche4 = new Coche('Hyundai', 200, 2013);

document.write("<h1>Velocidad: " + coche1.velocidad + "</h1>")
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();

document.write("<h1>Velocidad: " + coche1.velocidad + "</h1>")


// Herencia - 

class Autobus extends Coche {
    constructor(modelo, velocidad, antiguedad) {
        super(modelo, velocidad, antiguedad);
        this.altura = 5;
    }
    mostrarAltura() {
        return "La altura del bus es: " + this.altura;
    }
}

var autobus1 = new Autobus("Pegasus", 300, 2030);
console.log(autobus1.mostrarAltura());