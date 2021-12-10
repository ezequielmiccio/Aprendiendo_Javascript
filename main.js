// CREAR OBJETO PARA USUARIOS REGISTRADOS Y DARLES UN CODIGO DE DESCUENTO.
// HACER FUNCIONAR EL FORM Y CREAR UN LOGIN
// CREAR SECCION CARRITO DEBAJO DE PRODUCTOS

let database = [];
let ganadorDescuento;
let codigoDescuento = 1212;

let addInput = {
    name:'',
    lastname:'',
    dni:'',
    email:''
};


// EVENTOS

window.addEventListener('load' , function() {

    function intervalo(){

        var tiempo = setInterval(function(){

            var luces = document.querySelectorAll(".tarjets");


            if(luces.style.boxShadow == "0px 0px 8px rgba(71, 71, 71, 0.911)"){
                luces.style.boxShadow = "1px 1px 25px white";
            }else{
                luces.style.boxShadow = "0px 0px 8px rgba(71, 71, 71, 0.911)";
            }
        } , 1000);

        return tiempo; // que nos retorne el valor de la funcion INTERVALO entera
    }

    // tiempo = intervalo();
});




/* var stop = document.querySelector("#stop");

stop.addEventListener('click' , function(){
    alert("has pausado el intervalo(tiempo)");
    clearInterval(tiempo); // para pausar la funcion
});



var start = document.querySelector("#start");

start.addEventListener('click' , function(){
    alert("has vuelto a iniciar el intervalo(tiempo)");
    intervalo(); // para iniciar la funcion
});
 */


// FIN EVENTOS

// ARRAY DE TARJETS DINAMICAS

let productos = [
    {nombre: "Fifa 20" , precio: "4500" , img: "./assets/img/fifa20.jpg" , ahorro: "15%"},
    {nombre: "NBA 2k20", precio: "3750" , img: "./assets/img/pes2020.jpg" , ahorro: "25%"},
    {nombre: "PES 2020" , precio: "2600" , img: "./assets/img/nba2k20.jpg" , ahorro: "30%"}
];

// FIN ARRAY DE VIDEOJUEGOS



// FUNCION STOCK

function stockJuegos() {

    this.stock = this.stock - 1;
    return this.stock;

}

// FIN FUNCION STOCK

console.log(productos);

let cargaProductos = document.getElementById("productos");

for( let producto of productos ){ // con este ciclo recorremos el array

    // += es igual a que se vaya agregando uno tras otro
    cargaProductos.innerHTML += `<div class="tarjets">
                                 <img class="tarjetImg" src="${producto.img}">
                                 <h4 class="tarjetTitle">${producto.nombre}</h4>
                                 <div class="tarjetTxt">
                                 <p class="tarjetPrecio">$${producto.precio}</p>
                                 <p class="tarjetAhorro">Ahorrá ${producto.ahorro}</p>
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

function addClicked(e) {
    const button = e.target;
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


// STORAGE Y JSON
/* 
let productosJSON = JSON.stringify(productos);

localStorage.setItem("productosGuardados" , productosJSON);

let liberarJSON = localStorage.getItem("productosGuardados");
let resultadoProductos = JSON.parse(liberarJSON); */

// FIN STORAGE Y JSON





/* function saludar () {
    alert("Sos parte de los primeros 3 clientes, felicidades: " + nombreRegistro + " " + apellidoRegistro + "te otorgamos este codigo de descuento: " + codigoDescuento);
}

alert("Por favor, complete los siguientes datos...");

for(let i = 0 ; i < 3 ; i++){

    if(nombreRegistro != "ESC"){
        saludar();
        ganadorDescuento++;
        console.log(ganadorDescuento);
    }else {
        alert("Usuario no registrado");
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


