const app = document.getElementById('productos');

const r = React.createElement; // codigo creador de elementos 

const Avatar = () => {

const src = `https://randomuser.me/api/portrats/lego/5.jpg`;


    // creamos elemento <picture></picture>
    // en el segundo parametro se pasan atributos
    // en el tercer parametro, dentro de [] se pasan elementos hijos.

    return r('picture', {}, [r('img', {src, alt: 'lego'}), r('p')]);

}

// JSX

const AvatarJSX = () => {

    const src = `https://randomuser.me/api/portrats/lego/2.jpg`;

        return (
            <picture>
                <img src={src} alt='lego'/>
                <p>Lego 2</p>
            </picture>
        )
    
    }

// en el primer parametro seleccionamos lo que queremos renderizar y en el segundo donde
ReactDOM.render(r(Avatar), app);
ReactDOM.render(r(AvatarJSX), app);


// VIRTUAL DOM: Copia virtual que queda en la memoria de React.

// DIFFING: El DOM real lo trae como objeto y lo compara con el DOM VIRTUAL
// hace RECONCILIACION buscando cambios entre ambos, si hay cambios, los aplica sino no hace ningun acceso al DOM.