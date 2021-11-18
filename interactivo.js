/* let usuario = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));


if(usuario != "" && edad >= 18) {
    alert("Bienvenido " +usuario+ ". Puede hacer su pedido!");
    comprar()
}else {
    alert("Solo se acepta +18");
}


function comprar(){

    let precioFinal = 0;
    productosMaximos = 3;


    for(let productosComprados = 0 ; productosComprados <= productosMaximos ; ){

        let cerveza = 50;
        let vino = 100;
        let espumante = 80;

        console.log(productosComprados)


        if(productosComprados == productosMaximos){
            alert("Compró la capacidad máxima");
            alert("El total es de:  "+precioFinal);
            break;
        }else{

            let bebida = prompt("¿Que bebida desea comprar?");

            if(bebida == "cerveza" || bebida == "Cerveza" || bebida == "CERVEZA") {
                ivaAgregado = cerveza * 0.21;
                cerveza = cerveza + ivaAgregado;
                precioFinal += cerveza;
                alert("Se añadió al carrito. Cuesta: "+cerveza);
                productosComprados++;
                console.log(precioFinal)
            }else if (bebida == "vino"){
                ivaAgregado = vino * 0.21;
                vino = vino + ivaAgregado;
                precioFinal = precioFinal + vino;
                alert("Se añadió al carrito. Cuesta: "+vino);
                console.log(precioFinal)
                productosComprados++;
            }else if (bebida == "espumante"){
                ivaAgregado = espumante * 0.21;
                espumante = espumante + ivaAgregado;
                precioFinal = precioFinal + espumante;
                alert("Se añadió al carrito. Cuesta: "+espumante);
                console.log(precioFinal)
                productosComprados++;
            }else if(bebida == "ESC") {
                break;
            }
            else {
                alert("No vendemos eso");
            }
        }

    }
}

// DESAFIO FUNCIONES

alert("Solo aceptamos visa o mastercard en 3 y 6 cuotas");
let credito = prompt("Ingrese su tarjeta");
let pagos = parseInt(prompt("Ingrese las cuotas deseadas"));

if(credito != "ESC" && pagos != "ESC"){
    tarjetaCredito( tarjeta , cuotas );
    let valorNeto = precioFinal + tarjetaCredito( tarjeta , cuotas );
    alert(valorNeto);
}else {
    alert("forma de pago invalida");
}

function tarjetaCredito (tarjeta, cuotas) {

    interesCuotas = 0;
    tarjeta = credito;
    cuotas = pagos;
    
    if(tarjeta == "visa" && cuotas == 3 ) {
        interesCuotas = precioFinal * 0.15;
        return interesCuotas;
    }
    else if(credito == "visa" && pagos == 6) {
        interesCuotas = precioFinal * 0.30;
        return interesCuotas;
    }
    else if(credito == "mastercard" && pagos == 3) {
        interesCuotas = precioFinal * 0.20;
        return interesCuotas;
    }
    else if(credito == "mastercard" && pagos == 6) {
        interesCuotas = precioFinal * 0.35;
        return interesCuotas;
    }
    else {
        alert("Esta forma de pago no es valida")
    }
} */


// CLASS CLIENTE

class cliente {
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    mayorEdad (){
        if(this.edad >= 18){
            return true
        }else{
            return false
        }
    }
}

// ARRAY

let listaDeClientes = [];

for(let i = 0 ; i <= 5 ; i++){
    let nombreCliente = prompt("Ingrese su nombre");
    let edadCliente = prompt("Ingrese su Edad");

    listaDeClientes.push(new cliente (nombreCliente, edadCliente));
}

console.log(listaDeClientes);

for(let cliente of listaDeClientes){
    if(cliente.mayorEdad()){
        console.log(cliente.nombre + ": puede comprar");
    }else{
        console.log("El usuario " + cliente.nombre + " es menor de edad");
    }
}

// El cliente busca comparar celulares. Quiere saber sus funcionalidades.

class celular {
    constructor (nombre , rdp , rdc , ram , precio) {

        this.nombre = nombre;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.precio = precio;
        this.encendido = false;

    }

    ivaAgregado() {
        let iva = this.precio * 0.21;
        return this.precio + iva;
    }

    presionarBotonEncendido() {
        if(this.encendido == false) {
            alert("Celular Prendido");
            this.encendido = true;
        }else {
            alert("Celular Apagado")
            this.encendido = false;
        }
    }

    reiniciar() {
        if(this.encendido == true) {
            alert("Reiniciando Celular");
        }else {
            alert("El celular está apagado")
        }
    }
}

celular1 = new celular ("Iphone X" , "HD" , "10px" , "4 GB" , 400);
celular2 = new celular ("Iphone XS" , "Full HD" , "12px" , "8 GB" , 590);
celular3 = new celular ("Iphone XS MAX" , "Full HD" , "14px" , "16 GB" , 720);

celular1.presionarBotonEncendido();
celular1.reiniciar();

celular1.ivaAgregado();
console.log("El celular: " + celular1.nombre + " tiene un valor final de: " + celular1.ivaAgregado() + " USD");

celular2.ivaAgregado();
console.log("El celular: " + celular2.nombre + " tiene un valor final de: " + celular2.ivaAgregado() + " USD");

celular3.ivaAgregado();
console.log("El celular: " + celular3.nombre + " tiene un valor final de: " + celular3.ivaAgregado() + " USD");



