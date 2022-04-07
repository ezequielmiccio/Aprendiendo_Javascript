const products = [
    {   id: 1, 
        nombre: "Fifa 20" , 
        precio: 4500 , 
        img: "./assets/img/fifa20.jpg" , 
        ahorro: "15%" , 
        info: "Deportes",
        stock: 20
    },

    {   id: 2, 
        nombre: "NBA 2k20", 
        precio: 3750 , 
        img: "./assets/img/pes2020.jpg" , 
        ahorro: "25%" , 
        info: "Deportes",
        stock: 20
    },

    {   id: 3, 
        nombre: "PES 2020" , 
        precio: 2600 , 
        img: "./assets/img/nba2k20.jpg" , 
        ahorro: "30%" , 
        info: "Deportes",
        stock: 20
    },

    {   id: 4, 
        nombre: "GTA V" , 
        precio: 3200 , 
        img: "./assets/img/gtaV.jpg" , 
        ahorro: "15%" , 
        info: "GTA V esta diseñado para mayores de 16 años",
        stock: 20
    },

    {   id: 5, 
        nombre: "Crash Team Racing" , 
        precio: 5700 , 
        img: "./assets/img/crashRacing.jpg" , 
        ahorro: "10%" , 
        info: "Aventura, Carrera",
        stock: 20
    },

    {   id: 6, 
        nombre: "Mortal Kombat XL" , 
        precio: 1900 , 
        img: "./assets/img/mortalkombatXL.jpg" , 
        ahorro: "50%", 
        info: "Sangriento, 1 vs 1, Multiplayer",
        stock: 20
    },

    {   id: 7, 
        nombre: "Call Of Duty" , 
        precio: 4600 , 
        img: "./assets/img/callOfDuty.jpg" , 
        ahorro: "20%" , 
        info: "Asesinatos, Modern Warfare, Multiplayer",
        stock: 20
    },
    
    {   id: 8, 
        nombre: "Need For Speed" , 
        precio: 1200 , 
        img: "./assets/img/nfsHeat.jpg" , 
        ahorro: "65%" , 
        info: "Carrera, Adrenalina, Multiplayer",
        stock: 20
    }
];

export const getProducts = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    })

}