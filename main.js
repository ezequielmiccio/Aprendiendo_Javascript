let registro = [];
let apellidoRegistro;
let edadRegistro;
let ganadorDescuento;
let codigoDescuento = 1212;

// DOM TARJETS DINAMICAS

let productos = [
    {nombre: "Iphone X" , precio: "500 USD" , img: "./assets/img/IPHONE-X-BLACK.jpg" , ahorro: "Ahorrá 15%"}, // direccion de una imagen cualquiera
    {nombre: "Iphone Xs", precio: "550 USD" , img: "./assets/img/IPHONE-XS-WHITE.jpg" , ahorro: "Ahorrá 25%"},
    {nombre: "Iphone Xs Max" , precio: "600 USD" , img: "./assets/img/IPHONE-XSMAX-ROSE.jpg" , ahorro: "Ahorrá 30%"}
]

console.log(productos);

let cargaProductos = document.getElementById("productos");

for( let producto of productos ){ // con este ciclo recorremos el array

    // += es igual a que se vaya agregando uno tras otro
    cargaProductos.innerHTML += `<div class="tarjets">
                                 <img src="${producto.img}">
                                 <h4 class="title">${producto.nombre}</h4>
                                 <div class="txt">
                                 <p>${producto.precio}</p>
                                 <p class="ahorro">${producto.ahorro}</p>
                                 </div>
                                 <button id="agregarCarrito">Comprar</button>
                                 </div>`
} // los backticks los utilizamos para escribir dentro de html

// FIN DOM

/* function saludar () {
    alert("Sos parte de los primeros 3 clientes, felicidades: " + nombreRegistro + " " + apellidoRegistro + "te otorgamos este codigo de descuento: " + codigoDescuento);
}

alert("Por favor, complete los siguientes datos...");

for(let i = 0 ; i < 3 ; i++){

    nombreRegistro = prompt("Ingrese su nombre");
    apellidoRegistro = prompt("Ingrese su apellido");
    edadRegistro = parseInt(prompt("Ingrese su edad"));
    registro.push(nombreRegistro + " " + apellidoRegistro);

    if(nombreRegistro != "ESC"){
        saludar();
        ganadorDescuento++;
        console.log(ganadorDescuento);
    }else {
        alert("Usuario no registrado");
    }
}


console.log(registro);
alert("Puede probar el producto deseado");

class celular {
    constructor (nombre , rdp , rdc , ram , precio, stock) {

        this.nombre = nombre;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.precio = precio;
        this.stock = stock;
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

    controlStock() {
        this.stock = this.stock - 1;
    }

    getStock(){
        return this.stock;
    }

    mobileinfo(){
        return 
    }
}

celular1 = new celular ("Iphone X" , "HD" , "10px" , "4 GB" , 400, 6);
celular2 = new celular ("Iphone XS" , "Full HD" , "12px" , "8 GB" , 590, 7);
celular3 = new celular ("Iphone XS MAX" , "Full HD" , "14px" , "16 GB" , 720, 4);

celular1.presionarBotonEncendido();
celular1.reiniciar();

celular1.ivaAgregado();
console.log("El celular: " + celular1.nombre + " tiene un valor final de: " + celular1.ivaAgregado() + " USD");

celular2.ivaAgregado();
console.log("El celular: " + celular2.nombre + " tiene un valor final de: " + celular2.ivaAgregado() + " USD");

celular3.ivaAgregado();
console.log("El celular: " + celular3.nombre + " tiene un valor final de: " + celular3.ivaAgregado() + " USD");


//
//
//

function comprarDescuento () {

    let descuentoCupon;
    let precioFinal;
    cuponesDisponibles = 3;

    for(let ganadorDescuento = 0 ; ganadorDescuento <= cuponesDisponibles ; ) {

        if(ganadorDescuento == cuponesDisponibles){
            console.log("no debería haber más codigos de descuento porque llegamos a los " + ganadorDescuento + " usados");
            break;
        }
        else{

            let cupon = prompt("Ingrese el código de su cupón");

            if(cupon == codigoDescuento){
                alert("El cupón se aplicó con éxito");
                descuentoCupon = celular3.precio * 0.25;
                precioFinal = celular3.precio - descuentoCupon;
                console.log("El descuento es de: " + descuentoCupon);
                console.log("El precio final es: " + precioFinal);
                ganadorDescuento++;
            }
            else{
                alert("El código ingresado es incorrecto o caducó");
            }
            
        }
    }
}

comprarDescuento();

function comprar () {
    
}
 */


