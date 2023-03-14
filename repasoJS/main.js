var nombre = "Nerea ";
var altura = 189;

var concatenacion = nombre + " " + altura;

if (altura >= 190) {
    datos.innerHTML += '<h1> Eres una persona alta </h1>'
} else {
    datos.innerHTML += '<h1> Eres una persona baja </h1>'
}

for (var i = 2000; i <= 2020; i++) {
    // Bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año:" + i;
}

function MuestraMiNombre(nombre, altura) {
    var misDatos = `
<h1>Soy la caja de datos </h1>
<h2>Mi nombre es: ${nombre}</h2>
<h3>Mido: ${altura}cm</h3>`;

    return misDatos;
}

function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Nerea Sánchez", 148);
}
imprimir();

// Arrays

document.write('<h1>Listado de nombres</h1>')
var nombres = ["Nerea ", "Antonio ", "Fulanito"];
// for (i = 0; i < nombres.length; i++) {
//     document.write(nombres[i] + '<br/>');
// }

nombres.forEach((nombre) => {
    document.write(nombres + '<br/>');
});


var coche = {
    modelo: 'Toyota clase Eco',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos() {
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    propiedad1: "valor aleatorio"
};

document.write("<h1>" + coche.antiguedad + "</h1>")
coche.mostrarDatos();
console.log(coche);

// Promesas - valor que puede estar disponible en el futuro o no

var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola muy buenas a todos queridos!!!";
        saludo = false;
        if (saludo) {
            resolve(saludo);
        } else {
            reject('No hay saludo disponible');
        }
    }, 2000);
});

saludar.then(resultado => {
        alert(resultado);
    })
    .catch(err => {
        alert(err);
    })