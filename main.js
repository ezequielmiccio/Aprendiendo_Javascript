// CREAR OBJETO PARA USUARIOS REGISTRADOS Y DARLES UN CODIGO DE DESCUENTO.
// HACER FUNCIONAR EL FORM Y CREAR UN LOGIN
// CREAR SECCION CARRITO DEBAJO DE PRODUCTOS
// BUTTON DE BOTON PARA PPONER CAMBIAR DE   BACKDROUND BLACK A BACKGROUND WHITE


let ganadorDescuento;
let codigoDescuento = 1212;

let shoppingCart = [];
let database = [];

// OBJETO

let inputValues = Object.freeze({
    name:"",
    lastname:"",
    dni:"",
    email:""
})

// FIN OBJETO

// FUNCIONES

// FUNCION 1: con handleInput vamos a capturar los datos del formulario.

const handleInput = (e) => { 

    inputValues = {
        ...inputValues,
        [e.target.name]:e.target.value
    }

}

// FUN FUNCION 1: hundleInput

// FUNCION 2: handleSubmit

const handleSubmit = e => {
    e.preventDefault();
    database.push(inputValues);
    form.reset();
}

// FIN FUNCION 2: handleSubmit


// DOM

// capturamos todas las clases '.buttons' en "botones"
// forEach para poder agregar ya el addEventListener ya que no puede ir enganchado de un array directo. Y así recorremos todos los '.buttons'
// para capturar el formulario (el querySelector solo trae la primer clase)

const inputs = document.querySelectorAll('input.buttons');

inputs.forEach(input => input.addEventListener('change' , handleInput));

const form = document.querySelector('#formulario');
form.addEventListener('submit' , handleSubmit);

// FIN DOM

// ARRAY DE TARJETS DINAMICAS

let productos = [
    {id: 1, nombre: "Fifa 20" , precio: "4500" , img: "./assets/img/fifa20.jpg" , ahorro: "15%" , info: "Deportes"},
    {id: 2, nombre: "NBA 2k20", precio: "3750" , img: "./assets/img/pes2020.jpg" , ahorro: "25%" , info: "Deportes"},
    {id: 3, nombre: "PES 2020" , precio: "2600" , img: "./assets/img/nba2k20.jpg" , ahorro: "30%" , info: "Deportes"}
];

// FIN ARRAY DE VIDEOJUEGOS

// AGREGAR TARJETS AL INDEX

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
                                 <button data-id=${producto.id} class="addToCart">Comprar</button>
                                 <button class="addToInfo">Ver más</button>
                                 <p class="infoProduct">${producto.info}</p>
                                 <button class="vermenos">Ver menos</button>
                                 </div>`
}

const carrito = document.querySelectorAll(".addToCart");
console.log(carrito);

/* carrito.forEach(productosSeleccionados => {
    productosSeleccionados.addEventListener('click' , addClicked);
}); */

// FIN DOM


// STORAGE Y JSON
/* 
let productosJSON = JSON.stringify(productos);
localStorage.setItem("productosGuardados" , productosJSON);
let liberarJSON = localStorage.getItem("productosGuardados");
let resultadoProductos = JSON.parse(liberarJSON); */

// FIN STORAGE Y JSON

// JQUERY: EVENTOS

$(".infoProduct").hide();
$(".vermenos").hide();

$(".addToInfo").on("click" , function(){
    $(".addToInfo").hide();
    $(".infoProduct").slideDown(300);
    $(".vermenos").show();
});

/* $(".tarjets").on("mouseleave" , function(){
    $(".addToInfo").show();
    $(".infoProduct").hide();
    $(".vermenos").hide();
});
 */
$(".vermenos").click(function(){
    $(".vermenos").hide();
    $(".infoProduct").hide();
    $(".addToInfo").show();
})
