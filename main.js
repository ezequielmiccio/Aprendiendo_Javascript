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

const inputs = document.querySelectorAll('input.buttons');

inputs.forEach(input => input.addEventListener('change' , handleInput));

const form = document.querySelector('#formulario');
form.addEventListener('submit' , handleSubmit);

// FIN DOM

// STORAGE Y JSON

/* let productosJSON = JSON.stringify(productos);
localStorage.setItem("productosGuardados" , productosJSON);
let liberarJSON = localStorage.getItem("productosGuardados");
let resultadoProductos = JSON.parse(liberarJSON); */

// JQUERY: EVENTOS

$(".infoProduct").hide();
$(".vermenos").hide();

$(".addToInfo").on("click" , function(){
    $(".addToInfo").hide();
    $(".infoProduct").show(300);
    $(".vermenos").show();
});

$(".vermenos").click(function(){
    $(".vermenos").hide();
    $(".infoProduct").hide();
    $(".addToInfo").show();
});

// DOM: ENVIAR EMAIL POR REGISTRO OFERTAS

    $(".containerHide").hide();

    var goEmail = document.querySelector("#containerTxt");
    goEmail.addEventListener("submit" , function(){

        var email = document.querySelector("#goEmail").value;
        console.log(email)

        var parrafo = document.createElement("p");
        parrafo.innerHTML=`<p>Hemos enviado un email a <b>${email}</b>, por favor verifica los datos.</p>
                            
                            <h4>Equipo KongStore</h4>`;

        var mensaje = document.querySelector(".pEmail");
        mensaje.append(parrafo);

        $(".containerHide").show();

    });

// FIN DOM: ENVIAMOS EMAIL POR REGISTRO
