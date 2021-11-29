// DESAFIO FOR

// Hay solo 3 cupos para una Beca Universitaria

let nota = 10;
let beca = 0;
let nombre = prompt("Ingrese su nombre");
let alumno = prompt("Ingrese su nota final");

for (let i = 0 ; i < 10 ; i++) {

    if(alumno == nota) {
        console.log("Felicidades " + nombre + " obtuviste la BECA")
        beca++;
    }
    else {
        console.log("Lo sentimos " + nombre + " ,suerte para la próxima")
    }

    if (beca == 3) {
        console.log("Lo sentimos, no hay más cupos disponibles")
        break;
    }

     nombre = prompt("Ingrese su nombre");
     alumno = prompt("Ingrese su nota final");
}


// WHILE
// Control de Asistencias

let ingreso = prompt("Ingrese su nombre");
let asistencia = prompt("Si está presente ingrese: si")

while(asistencia != "ESC") {

    console.log("Muchas gracias por su colaboración")

    if ( asistencia == "si" || asistencia == "SI") {
        console.log("El alumno " + ingreso + " se encuentra presente")
    }

    else {
        console.log("El alumno " + ingreso + " se encuentra ausente")
    }

    ingreso = prompt("Ingrese su nombre");
    asistencia = prompt ("Si está presente ingrese: si");
}

// DO - WHILE

let numero = 0;

do {
    document.write(numero + "<br>");
}

while(numero > 6) {
    console.log(numero + " es menor a 6")

    if (numero == 3) {
        break;
    }
}