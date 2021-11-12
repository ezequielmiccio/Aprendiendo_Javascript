let usuario = prompt("Ingrese su nombre");
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
