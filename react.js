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

/* 
UNIDIRECCIONALIDAD: 

(Arbol de fibras), cuándo ejecutemos un evento se realizo un cambio 
en la IU (interfaz de usuario). React procesa el resultado de cada nodo en una memoria. Para esto 
el flujo de datos debe ser UNIDIRECCIONAL, los datos nunca pueden ir a una etiqueta padre, siempre deben
darse hacía abajo. Los eventos si suben, si aprieto un button dentro de un nav, se puede modificar
la UI entera si quisieramos. Lo que se hace es crear una function en NAV (o cualquier etiqueta abuelo) 
y pasar como parametro a los componentes hijos, es decir que cuando haga click en el button, 
voy a ejecutar en referenciaa la function que tengo en NAV (por eso se dice que los eventos suben).


VIRTUAL DOM: Proceso "Diffing".

Copia virtual de la UI que se mantiene en la memoria y en sincronía. El virtual DOM y el DOM real 
terminan siendo iguales. React tiene esta copia en memoria (DOM virtual), hace comparaciones y si encuentra
algun cambio los ejecuta todos al mismo tiempo.

Primer paso, ejecuta el algoritmo de "diffing" (el DOM real lo trae como objeto y lo compara con el Virtual DOM que tiene
en memoria, comparar = "diffing").
Segundo paso, hacer la "reconciliacion", si hay cambios los actualiza, sino no.
(todo este procedimiento es automático por React).


NODE JS: NPM

Entorno de ejecución de JS, permite leer los archivos de JS y ejecutarlo. En JAVA se conoce como JVM.

NPM (en pi eim): Herramienta utilizada para Node (Node Package Manager). Funciona de dos formas:
* Como repositorio de codigo abierto.
* Como Herramienta de línea de comandos (CLI), se utiliza para instalar y desinstalar paquetes, versiones 
necesarias para ejecutar un programa.

INSTALACION NODE JS:

https://nodejs.org/en/ 
"node -v" en la terminal. (Ctrl + Ñ)
"npm -v" en la terminal.


INSTALACION REACT:
npx create-react-app app-nombre12 (solo utilizar minusculas, numeros y guiones para separar)
"happy hacking", luego:

cd coder-app  (nombre del proyecto que hayamos puesto)
ls (para ver que este el package.json, luego siguiente paso)
npm start (para correr el programa, asegurarse que ya este "package.json" para que se reconozca
este comando, este comando se ejecuta dentro del "package.json".

Una vez que este servidor este funcionando, no precisamos más del live server para correr el server.
npm "eject" jamás se ejecuta.



GIT:

git branch -b nueva rama (para crear rama)
git checkout nueva rama (para cambiar de rama)
Crear nueva rama para el proyecto de React.

*/

// CLASE 2

/* 

Javascript: lenguaje basado en prototipos

Sugar-Syntax: se creó para mejorar la legibilidad y pragmatismo del código.

Operador ternario: 

const condition = true;
let result = null;
if(condition){
    result = 'correct';
}else{
    result = 'incorrect';
}
console.log(`This is ${result}`); (This is correct)

Ternary operator:

const condition = true;
console.log(`This is ${condition ? 'correct' : 'incorrect'}`);
This is correct

let result = true ? 'correct' : 'incorrect'; (correct)
let result1 = false ) 'correct' : 'incorrect'; (incorrect) 

--------------------------------------------------------------

const numbers = [1, 2, 3, 4];

const newNumbers = numbers.push(5);
const newNumbers = numbers.concat(5);

concat: no va a mutar el array original, sino que nos retorna un nuevo array que podemos guardar en una nueva variable.

push: muta el array real, crea un nuevo elemento sobre él.

Aca llega el SPREAD OPERATOR:

const newNumbers = [...numbers, 5]; // esto sirve para los objetos.

---------------------------

SPREAD OPERATOR: Para modificar un objeto, sin eliminar el viejo objeto, creamos la modificacion que querramos.

const vehiculo = {
    tipo: 'auto',
    marca: 'bmw',
    modelo: '325i',
    anio: 2010
}

const newVehiculo = {
    ...vehiculo,
    anio: 2011,
    anio: 2012 (se podriá pisar)
    modelo: '318d'
}

const newVehiculo = [
    {
        ...vehiculo,
        anio: 2012
    }, {
        ...vehiculo,
        anio: 2013
    }, {
        ...vehiculo,
        anio: 2014
    }
]

Asi se van a crear 3 objetos nuevos iguales con años distintos.


-----------------------------------------------

DESESTRUCTURACIÓN: reemplaza por orden de índice lo asignado

let a, b;
[a, b] = [10, 20];
console.log(a); // será 10

------------------------------------------------

developer.mozilla.org // para ver ejemplos de los spread operator.

POLYFILLS: sirven para hacer compatible nuestra aplicación con navegadores antiguos.
Es un bloque de código que le agrega una funcionalidad a un navegador.

Hay librerias con código implementado que me permiten hacer cosas que el navegador no conoce. Por ej: core-js.

zloirock/core-js: Standard Library.

Dentro de la carpeta "node_modules" se encuentran la mayoría de librerías.


-------------------------------------------------------

Si queremos crear un nuevo array de numbers pero que sean numeros multiplicados *2, con el metodo map creamos uno nuevo asignando la funcion de callback.

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map(n => n * 2);
console.log(2, 4, 6, 8, 10);


La forma más básica de hacerlo de otra forma es apartir del FOR.

let newArray;

for(var 1 = 0; numbers.length, i++){
    newArray.push(numbers[i] * 2);
}

Pusheamos numbers en la posición i * 2, multiplicariamos todos los elementos.

--------------------------------------------------------

La manera que tengo para solucionar esto en todos los casos es agregar el polify (bloque de código).

const newNumbers2 = numbers.customMap(n => n * 2); 
const newNumbers3 = numbers.customMap(n => n * 5);

customMap para los array no existe. Hay que agregarlo de la siguiente manera.

Inicio Polify. Lo primero que hacemos es crear el metodo .customMap y lo agrego al prototype de array para tenerlo disponible en todos los tipos de datos que son ARRAY (unicamente, no va a estar disponible para numeros o string pq solo le definimos Array). Le pasamos una funcion como parametro (callback), vamos a tener que recorrer el Array mediante el For, estos elementos vamos a tener que guardarlos, para ello creamos un array vacio antes de crear el for(arrayTransformado). Realizamos el for inicializando el index en 0, el cual siempre va a tener que ser menor a la longitud del array desde el cual estoy llamando el metodo (por eso utilizo this, en este caso ese this va a ser "numbers", array que declaramos arriba). 
Como inicializamos index en 0 al poner this[index] en la var elemento, lo que hacemos es tomar el primer elemento del array asignado (en este caso numbers).
En el segundo paso, a la funcion que estoy recibiendo como parametro (en este caso n => n * 2) estamos diciento que elemento => elemento * 2 (por eso como parametro tenemos elemento).
Llegamos al push, le pusheamos el primer elemento multiplicado por 2, y en la segunda vuelta comienza a hacer lo mismo con el segundo elemento ya que index es 1.
Una vez que tengamos todas las vueltas y finalice el for, por fuera, al final vamos a tener un return del arrayTransformado declarado al comienzo (pre bucle).

Array.prototype.custoMap = function (callback) {
    let arrayTransformado = [];

    for(index = 0; index < this.lenght; index++) {
        const elemento = this[index];
        const elementoTransformado = callback(elemento);
        arrayTransformado.push(elementoTransformado);
    }

    return arrayTransformado;

} // fin polify

const newNumbers2 = numbers.customMap(n => n * 2); // n es elemento en la funcion de arriba, y la funcion de callback esta puesta.

Lo que nos permite el polify es que en caso de querer modificar la funcion que enviamos por parametro modificamos la funcion, cambiando la logica sin modificar codigo.


Polify que solucione problemas para tal tipo de datos: Lo piden en entrevistas. (Polify que invierta los caracteres de un string)

-------------------------------------------------

BUNDLING: WEB PACK: Web pack es un empaquetador de modulos (module blunder) (empaqueta archivos que creamos, funciones).
Se utiliza para que el navegador entienda lo que queremos lograr y unifica todos los modulos creados. Esto termina generando 1 archivo html, 1 archivo css y 1 archivo js.

Como funciona? Agarra todos los modulos y los transforma en archivos dependiendo la configuracion que tenga. Se puede configurar que unir con que y en que transformarlos.
Viene con una configuracion predeterminada por el equipo de React.

Cada vez que hacemos un cambio, webpack hace un bundling y se lo envia al servidor.

EN CONSOLA:

npm build
npm run-script build // para crear una optimizacion (webpack transforma todos los archivos generando una nueva carpeta con archivos optimizados para subir a un server, el resto queda en el server local)

-----------------------------------------------------

JSX: Extension de la sintaxis JS (no de React) que me permite llamar funciones como si fuesen elementos html.

Al utilizar las funciones como JSX lo que hace WEBPACK es transpilar ese codigo JSX a JS para que el navegador entienda, por atrás, creando una carpeta static con el contenido original.

con el atributo style dentro de la etiqueta que querramos aplicar se puede dar estilos inline. Ejemeplo:

<header className="app" style={{color: true ? "blue" : "red"}}

La primera llave es para avisar que se agrega un objeto en js. 
La segunda para empezar a darle style al objeto en sí.

-----------------------------------------------------

REGLAS GENERALES DE JSX: 

Por cada apertura de etiquetas debe haber un cierre: 

<img src=""></img>

Si el elemento no tiene hijos debe ser autocerrado

<img src="" /> 

Class es palabra reservada, la reemplazamos por className.

Tanto los estilos como los eventos de DOM, se escriben con camelCase
onclick = onClick, onchange = onChange, onKeyDown, marginTop, paddingBottom.

------------------------------------------------------------------------------------------

A partir de acá vamos a ver React de lleno.

DISEÑO MODULAR:

React se basa en componentes (porción de código que se representa visualmente solucionando
un problema que tengamos).
Estos componentes van a cumplir una función específica individual. Por esto es que se dice
que React construye de manera modular, es un conjunto de componentes individuales que se
agrupan para formar una aplicación. (Fácil mantenimiento).

En resúmen, los componentes permiten separar la interfaz de usuario en piezas independien
tes. La aplicación será un conjunto de componentes que trabajan entre sí. (Escalable).

Los componentes por un lado tendran estados y por el otro parte visual, ejemplo:

import Avatar from './components/Avatar/Avatar';

function App() {
    
    // Estados y lógica por fuera del return
    
    const condition = true;
    
    // Dentro del return va a ir la parte visual de la web
    
    return (
        <div className="App">
          <header className="App-header">
            Titulo
          </header>
          <Avatar />
        </div>
        );
        
}

Este código mediante JSX va a reemplazar el:
// React.createElement('header', {className: 'App-header'}, 'Esto es el header');

export default App;

// La buena práctica sería guardar un archivo de cada componente dentro de una carpeta
// components (js, css, html);

------------------------------------------------------------------------------------------

El proyecto empieza haciendo la conexión con el DOM en el index.js mediante el código:

ReactDOM.render(
    <React.StricMode>
      <App />
    </React.StricMode>,
    document.getElementById('root');
);

En el index.js también se van a hacer las importaciones:

import App from '.App'; // etc

------------------------------------------------------------------------------------------

TIPOS DE COMPONENTES Y PATRONES: 

React no tiene estructura establecida como Angular (framework) ya que es una librería.
En React existen dos maneras de entender los componentes: tipos de componentes, patrones.

COMPONENTES BASADOS EN CLASES: (Vieja práctica)

class App extends Component {
    render() {
        return (
            <p>
              Class based
            </p>
        );
    }
}

render(<App />, document.getElementById('root'));

---------------------------------------------------------------------

COMPONENTES BASADOS EN FUNCIONES: (Método moderno)

const App = () => {
    return (
        <p>
          Function based
        </p>
    );
}

render(<App />, document.getElementById('root'));

---------------------------------------------------------------------

reactDOM.render(<App />, documentElementById('root'));


WEBPAD: empaquetador de archivos, tiene una configuracion para seleccionar todos los archivos
JS y los va a convertis en 1 solo. A traves del babel hace la traduccion del JSX

---------------------------------------------------------------------

En una ARROW FUNCTION no tengo disponible el objeto THIS. Es una funcion anonima guardada 
en una variable. Es más optima que la funcion anonima en memoria. Da cierta seguridad
a la hora de escribir codigo con respecto a la funcionalidad.
Si defino una Arrow () => {} en una constante primero tengo que definir la funcion y luego
llamarla.A diferencia de una funcion anonima, se puede llamar antes de definirla.


function App {
    
}

---------------------------------------------------------------------

const App = () => {
    
}

---------------------------------------------------------------------

React.Fragment: Si queremos agregar el contenido dentro de la function sin la etiqueta
padre (en este caso un div). Podemos utilizar el React.Fragment para cargar el contenido
que lleva dentro sin modificarlo.

function App() {
    
    return (
        <div className="App">
          <header className="App-header">
            Titulo
          </header>
          <Avatar />
        </div>
        );
        
}

---------------------------------------------------------------------

function App() {
    
    return (
        <React.Fragment> // reemplazamos div
          <header className="App-header">
            Titulo
          </header>
          <Avatar />
        </React.Fragment> // reemplazamos cierre div
        );
        
}

haciendo esto no es necesario importar React:
import React from 'react'; deja de ser necesario con el React.Fragment

---------------------------------------------------------------------------------------

Ambos componentes (basados en funciones y basados en clases) pueden recibir propiedades (parámetros) y tienen capacidad de hacer render de un único elemento. Aunque el elemento sea uno, puede contener varios elementos dentro.

BASADOS EN FUNCIONES: (mejor práctica)

import './Avatar.css';
import Button from '.../Button/Button';

function App(){
    return (
        <div className="App">
            <header className = "App-header">
                Titulo
            </header>
            aqui estamos enviando parametros a Avatar
            <Avatar name="Ezequiel" age="23"/>
            <Avatar name="Renzo" age="25"/>
        </div>
    );
}

function Avatar(props){
    return(
        <picture className = "Avatar">
            <img src = ""/>
            <p>Nombre: {props.name}</p>
            <p>Nombre: {props.age}</p>
            <Button/>
        </picture>
    )
}

Si en avatar desestructuramos las propiedades podemos utilizar solamente el name o age. Ejemplo:

Si hay propiedades que no esten declaradas entran en ...REST

function Avatar({name, age, ...rest}){
    return(
        <picture>
            <img/>
            <p>Nombre: {name}</p>
            <p>Edad: {age}</p>
        </picture>
    )
}



BASADOS EN CLASES (menos recomendado).
Por clases podemos recibir propiedades a través de this
Tambien se renderiza a través del render(){}

import {Component} from 'react';
import 

class Avatar extends Component {
    render() {
        return (
            <picture className="Avatar">
                <img/>
                <p>Nombre:{this.props.name} </p>
                <p>Edad:{this.props.age} </p>
            </picture>
        )
    }
}


------------------------------------------------------

Si alguna prop es una funcion, el chil component puede llamarla para provocar efectos secundarios en el parent.
Es decir, enviar una function por propiedades a una etiqueta hijo para que genera efectos en los padres

const Avatar({name, age, ...rest}) {

    const logger = () => {
        console.log("Esta funcion la creo desde Avatar y la envio a Button para que se active al hacer click en el boton");
    }

    const otherLogger = () => {
        console.log("Otra funcion ejecutada en Avatar creando un nuevo button a traves de label")
    }

    return (
        <picture className = "Avatar">
            <img src = "sarads.com"/>

            <p>Nombre:{name}</p>
            <p>Edad:{age}</p>

            <Button func={logger} label="logger" color='red'/>
            <Button func={logger} label="otherLogger"/>

        </picture>
    )

}

Y lo enviamos a Button por props. Esta funcion enviada a Button, se va a ejecutar al hacer click en el botton pero no deja de ejecutarse en la etiqueta padre ya que el espacio en memoria se guardo desde allí. 
Style va con doble llave ya que una es del valor y otra del código (props)

const Button = {(func, label, color)} => {
    
    return <button onClick={func} style={{color}}>{label}</button>;

}

export default Button;


Los datos que se envian a través de props (datos, funciones, arrays, string, etc) se reciben por PROPS y se aplican en el objeto. 

------------------------------------------------------------

COMPONENTES DE PRESENTACION: En este caso seria el Button ya que solamente esta orientado al aspecto visual, reciben callbacks por medio de props, normalmente no tienen estados.
Si se quiere modificar un estilo se puede hacer sin modificar la funcion ya que dicha funcion es derivada de otro componente (en este caso desde Avatar).

------------------------------------------------------------

EJEMPLO AISLADO PARA CREAR UNA IMG DE CARRITO CON NUMERO DE COMPRA:

Creamos nueva carpeta dentro de componentes > Ej: cartWidge.

const cardWidge = ({quantity}) {

    return (
        <picture>
            <img src="carrito.png"/>
            {quantity}
        </picture
    );
}



-----------------------------------------------------------

ESTADOS: Los estados nos va a ser muy util a la hora de guardar informacion en variables, en las funciones unicamente van a estar funcionando cuando se ejecute la funcion, luego dejan de existir. En un contador que se necesita modificar constantemente una variable no sirve, se soluciona con estados (HOOKS)

Ejemplo METODO DE CLASES: A través de Components proporcionado por React.

import {Component} from 'react';

class ClassCount extends Component {

    / tomamos el estado de Components
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    / funcion para decrementar
    / es necerario el metodo setState para modificar un estado

    decrement = () => {
        this.setState({
            count: this.state.count--;
        });
    }

    increment = () => {
        this.setState({
            count: this.state.count++
        });
    }

    render(){
        return (
            <div>
                <button onClick={this.decrement}>Restar</button>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>Sumar</button>
            
            </div>
        )
    }
}

export default ClassCount

-------------------------------------------------------------







*/