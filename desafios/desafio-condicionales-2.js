// Según datos financieros, hoy en día se considera en situacion de "pobreza" a quienes tengan ingresos por debajo de $70.000 por hogar.

// En el primer desafío analizamos la situación de las personas.

let nombrePila = "Ezequiel";

let usuario = prompt("ingrese su nombre");

if(usuario == nombrePila) {
    console.log("¡Hola, Ezequiel!")
}else {
    alert("No sos Ezequiel, andate")
}

let sueldo1 = 35000;
let sueldo2 = prompt("ingrese su último sueldo")

let suma = (sueldo1) + parseInt(sueldo2); /* sueldo1 no tiene parseInt ya que es un numero y no hace falta el parse para convertirlo en numero dos veces */

if(suma >= 70000) {
    console.log("Usted NO es pobre")
}
else {
    console.log("Usted es Pobre")
}
