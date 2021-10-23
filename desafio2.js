// Ejercicio 2

// Un cajero de supermercado debe cerrar la caja para terminar su trabajo.

let caja = 12;
let nombre = "Ezequiel";

let cajero = prompt("Ingrese su numero de caja");
let identificacion = prompt("Ingrese su nombre");

if (cajero == caja && identificacion==nombre) {
    console.log("Caja Correcta")
}
else {
    alert("ESTA NO ES SU CAJA")
}

// Una vez ingresado al sistema tiene que cerrar con sus valores. Lo correcto sería que quede con $300. Si cierra con menos le falta, si cierra con más le sobra.

let valorFinal = "300"

let valor = prompt("ingrese con cuanto dinero cierra")


if (valor > valorFinal) {
    console.log("CERRÓ CON SOBRANTE")
}
else if (valor == valorFinal) {
    alert("CERRÓ CORRECTAMENTE")
}
else {
    alert("CERRÓ CON DIFERENCIA")
}