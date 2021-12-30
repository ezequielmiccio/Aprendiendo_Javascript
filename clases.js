let productos = [
    {id: 1, nombre: "Fifa 20" , precio: 4500 , img: "./assets/img/fifa20.jpg" , ahorro: "15%" , info: "Deportes"},
    {id: 2, nombre: "NBA 2k20", precio: 3750 , img: "./assets/img/pes2020.jpg" , ahorro: "25%" , info: "Deportes"},
    {id: 3, nombre: "PES 2020" , precio: 2600 , img: "./assets/img/nba2k20.jpg" , ahorro: "30%" , info: "Deportes"}
];

class Producto{
    constructor({id, nombre, img, ahorro, precio}) {
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
            <button class="addToInfo">Ver más</button>

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