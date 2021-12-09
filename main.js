let registro = [];
let apellidoRegistro;
let edadRegistro;
let ganadorDescuento;
let codigoDescuento = 1212;

// CREAR OBJETO PARA USUARIOS REGISTRADOS Y DARLES UN CODIGO DE DESCUENTO.
// HACER FUNCIONAR EL FORM Y CREAR UN LOGIN
// CREAR SECCION CARRITO DEBAJO DE PRODUCTOS





// EVENTOS

window.addEventListener('load' , function() {

    function intervalo(){

        var tiempo = setInterval(function(){
            console.log("internal ejecutado");

            var encabezado = document.querySelector("#encabezad0");

            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "25px";
            }else{
                encabezado.style.fontSize = "50px";
            }
        } , 1000);

        return tiempo; // que nos retorne el valor de la funcion INTERVALO entera
    }

    var tiempo = intervalo();

    var stop = document.querySelector("#stop");

    stop.addEventListener('click' , function(){
        alert("has pausado el intervalo(tiempo)");
        clearInterval(tiempo); // para pausar la funcion
    });

    

    var start = document.querySelector("#start");

    start.addEventListener('click' , function(){
        alert("has vuelto a iniciar el intervalo(tiempo)");
        intervalo(); // para iniciar la funcion
    });


});








// FIN EVENTOS




// DOM TARJETS DINAMICAS

let productos = [
    {nombre: "Fifa 20" , precio: "4500" , img: "./assets/img/fifa20.jpg" , ahorro: "Ahorrá 15%"}, // direccion de una imagen cualquiera
    {nombre: "NBA 2k20", precio: "3750" , img: "./assets/img/pes2020.jpg" , ahorro: "Ahorrá 25%"},
    {nombre: "PES 2020" , precio: "2600" , img: "./assets/img/nba2k20.jpg" , ahorro: "Ahorrá 30%"}
]

class stockJuegos {

    controlStock() {
        this.stock = this.stock - 1;
    }

    getStock(){
        return this.stock;
    }
}

// STORAGE Y JSON

let productosJSON = JSON.stringify(productos);

localStorage.setItem("productosGuardados" , productosJSON);

let liberarJSON = localStorage.getItem("productosGuardados");
let resultadoProductos = JSON.parse(liberarJSON);

// FIN STORAGE Y JSON

console.log(productos);

let cargaProductos = document.getElementById("productos");

for( let producto of productos ){ // con este ciclo recorremos el array

    // += es igual a que se vaya agregando uno tras otro
    cargaProductos.innerHTML += `<div class="tarjets">
                                 <img class="tarjetImg" src="${producto.img}">
                                 <h4 class="tarjetTitle">${producto.nombre}</h4>
                                 <div class="tarjetTxt">
                                 <p class="tarjetPrecio">$${producto.precio}</p>
                                 <p class="tarjetAhorro">${producto.ahorro}</p>
                                 </div>
                                 <button id="addToCart">Comprar</button>
                                 </div>`
} // los backticks los utilizamos para escribir dentro de html


const carrito = document.querySelectorAll("#addToCart");
console.log(carrito);

carrito.forEach(productosSeleccionados => {
    productosSeleccionados.addEventListener('click' , addClicked);
});

const addTarjetsRowContainer = document.querySelector('.tarjets');

function addClicked(event) {
    const button = event.target;
    console.log('addClicked => button' , button);

   const tarjets = button.closest('.tarjets');
    console.log('addClicked -> tarjets' , tarjets);

    const tarjetTitle = tarjets.querySelector('.tarjetTitle').textContent;

    const tarjetPrice = tarjets.querySelector('.tarjetPrecio').textContent;

    const tarjetImagen = tarjets.querySelector('.tarjetImg').src;

    addTarjets(tarjetTitle , tarjetPrice , tarjetImagen);
}

function addTarjets(tarjetTitle , tarjetPrice , tarjetImagen) {
    const addTarjetsRow = document.createElement('div');
    const addTarjetsContent = `<div class="carritoCompras">
    <img class="tarjetImg" src=${tarjetImagen} >
    <h4 class="tarjetTitle">${tarjetTitle}</h4>
    <div class="tarjetTxt">
    <p class="tarjetPrecio">${tarjetPrice}</p>
    </div>
    <button id="lowProduct">Eliminar</button>
    </div>`;
    
    addTarjetsRow.innerHTML = addTarjetsContent;
    addTarjetsRowContainer.append(addTarjetsRow);

    compraJuegosTotal();
}


function compraJuegosTotal() {

    let total = 0;

    const compraTotal = document.querySelector('.compraTotal');

    const compraTotalItems = document.querySelectorAll('.compraTotalItem');

    compraTotalItems.forEach(compraTotalItem =>{
        compraTotalItem.querySelector('.compraTotalItemPrice');
        
        const compraTotalItemPrice = Number(compraTotalItemPriceElement.textContent.replace('$' , '')
        );
        
        const compraTotalItemQuantityElement = compraTotalItem.querySelector('.compraTotalItemQuantity');
        
        const compraTotalItemQuantity = Number(compraTotalItemQuantityElement.value);
        
        total = total + compraTotalItemPrice * compraTotalItemQuantity;
    });

    compraTotal.innerHTML = `$${total.toFixed(2)}`;

}
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


