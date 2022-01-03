// AJUSTAR:

// Estilos del carrito (imagen y precios desnivelados)
// Ver más - ver menos tiene que ejecutarse en el boton correspondiente
// Quitar boton ver más de la section carrito y agregar monto total y agregar cantidad - producto -precio - total arriba de todo


let productos = [
    {id: 1, nombre: "Fifa 20" , precio: 4500 , img: "./assets/img/fifa20.jpg" , ahorro: "15%" , info: "Deportes"},
    {id: 2, nombre: "NBA 2k20", precio: 3750 , img: "./assets/img/pes2020.jpg" , ahorro: "25%" , info: "Deportes"},
    {id: 3, nombre: "PES 2020" , precio: 2600 , img: "./assets/img/nba2k20.jpg" , ahorro: "30%" , info: "Deportes"},
    {id: 4, nombre: "GTA V" , precio: 3200 , img: "./assets/img/gtaV.jpg" , ahorro: "15%" , info: "GTA V esta diseñado para mayores de 16 años"},
    {id: 5, nombre: "Crash Team Racing" , precio: 5700 , img: "./assets/img/crashRacing.jpg" , ahorro: "10%" , info: "Aventura, Carrera"},
    {id: 6, nombre: "Mortal Kombat XL" , precio: 1900 , img: "./assets/img/mortalkombatXL.jpg" , ahorro: "50%" , info: "Sangriento, 1 vs 1, Multiplayer"},
    {id: 7, nombre: "Call Of Duty" , precio: 4600 , img: "./assets/img/callOfDuty.jpg" , ahorro: "20%" , info: "Asesinatos, Modern Warfare, Multiplayer"},
    {id: 8, nombre: "Need For Speed" , precio: 1200 , img: "./assets/img/nfsHeat.jpg" , ahorro: "65%" , info: "Carrera, Adrenalina, Multiplayer"}
];

class Producto{
    constructor({id, nombre, img, ahorro, precio, info}) {
        this.id = id;
        this.nombre = nombre;
        this.img = img;
        this.ahorro = ahorro;
        this.precio = precio;
        this.info = info;
    }

    card(){
        return `<div class="tarjets">
            <img class="tarjetImg" src="${this.img}">
            <h4 class="tarjetTitle">${this.nombre}</h4>

            <div class="tarjetTxt">
                <p class="tarjetPrecio">$${this.precio}</p>
                <p class="tarjetAhorro">Ahorrá ${this.ahorro}</p>
            </div>

            <button data-id=${this.id} class="addToCart">Comprar</button>
            
            <button data-id=${this.id} class="addToInfo">Ver más</button>
            <button class="vermenos">Ver menos</button>
            <p class="infoProduct">${this.info}</p>

        </div>`
    }

}

class Tienda {
    constructor(){
        this.stock = [];
        this.carrito = [];
    }

    configurarTiendaBotones(clases){
        document.querySelectorAll("." + clases).forEach(boton => {
            boton.addEventListener('click' , (e) => this.addToCart(e));
        });
    }

    addProducto(producto){
        this.stock.push(new Producto(producto))
    }

    addProductos(arrayDeProductos){
        arrayDeProductos.forEach(producto => this.addProducto(producto));
    }

    render(divDestino, listado=this.stock){        
        let divProductos = document.getElementById(divDestino);
        divProductos.innerHTML="";
        divProductos.innerHTML=listado.map(producto => producto.card()).join("");
    }

    addToCart(e){
        e.preventDefault();
        let id = e.target.dataset.id;
        let producto = this.stock.find(item => item.id == id);
        this.carrito.push(producto);
        this.render("carrito" , this.carrito);
        console.log(this.calcularTotal());
    }

    calcularTotal(){
        return this.carrito.reduce((acumulador, item) => acumulador + item.precio , 0)
    }
}

let kongStore = new Tienda();
kongStore.addProductos(productos);
kongStore.render("productos");
kongStore.configurarTiendaBotones("addToCart");