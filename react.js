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




CLASE 3: ******************************************

Existen COMPONENTES CONTENEDORES: Aquellos que contienen otros componentes (lógica)

COMPONENTES DE VISUALIZACION: Solamente harán un retorno de lo visual.

WEBPACK: Nos permitía unir varios componentes individuales en uno. Se puede
configurar de distintas maneras. Recopila todos los archivos del proyecto y 
hace uno solo (transpila y traduce las extensiones de lenguaje (js, sass, html, etc)).
Mientras nosotros lo estemos desarrollando, envía la info al navegador.

npm build: Si debemos subir una versión a produccion, todo lo que veniamos haciendo
mientras desarrollabamos, lo hace una vez y lo deja en una carpeta 'build' (pesa mucho menos)

Componentes de funcion (funcionales), Componentes de clase. A su vez, existen los Componentes
de visualizacion (retornan lo visual del codigo). Componentes contenedores.

En las funcionales se envian por parametros y luego se llama con parametros.elemento
En las de clase mediante this.state.element por ejemplo.

Los COMPONENTES tienen un ciclo de vida, van a ir ocurriendo eventos, quizás cambien
las props, etc. Hasta que el componente desaparezca. Muere para que nazca otro.

-------------------------------------------------------------------------------

PROPS: pueden ser string, numeros, otra funcion, otro objeto, valores de librerias externas,
pueden ser otros componentes hijos. Un componente de react no es más que una funcion 
y una funcion es un objeto (esto se puede pasar en cualquier funcion de js).

React detecta cuales son las etiqueta hijo y nos permite enviarlos como objetos
"children" mediante PROPS. Lo insertamos con {children}.
Si tiene más de una etiqueta hijo, lo que vamos a enviar es un ARRAY. Esto hay
que tenerlo en cuenta ya que si solo pasamos 1 no vamos a tener disponibles Los
metodos/funciones de arrays.

-------------------------------------------------------------------------------

ESTADOS: Los necesitamos para almacenar estados de componentes ya que no podemos
hacerlo a través de variables ya que mueren. 

En componentes basados en clases, debíamos extender la clase component (import {Component} from 'react')
Esto tiene implementadas las funciones setState, this.state.

En componentes basados en funciones se hace a través de HOOKS, debemos importarlo
al documento (import {useState} from 'react')
nos permiten almacenar estados. Hay un hook que se encarga de los estados 
(useState).

useState: es una funcion que retorna un array de dos posiciones. Vamos a poder 
utilizarlo en los componentes basados en funciones como el Components en Clases.

---------------------------------------------------------------------------

Este array de dos posiciones lo puedo desestructurar para que sea más comodo de 
leer:

const FunctionCounter = (props) => {
    
    const myState = useState(); // esto me retorna un array lenght: 2
    
}

return(
    
    <p>{myState[0, 1]}</p>
    
    )
    
 ----------------------------------------------------------------------

Este codigo lo desestructuramos para no tener que llamarlo: {myState[0, 1]} y que
sea más facil de leer: Primer posicion con el valor almacenado (como una variable)
La segunda posicion la funcion que me va a permitir cambiar el valor, se inicia
la funcion con "set" y consiguiente el nombre del valor.


const FunctionCounter = (props) => {
    
    const [count, setCount] = useState(); // esto me retorna un array lenght: 2
    
}

<p>{count}</p>

En este caso se llamaria con {count}

-------------------------------------------------------------------------

Entonces para poder cambiar de estado en un componente de funcion vamos a precisar
de useState para crear un estado y luego lo podemos modificar de la siguiente manera:

const FunctionCounter = (props) => {
    
    const [count, setCount] = useState(props.initial); // props.initial para inicializar
    // de esta forma se puede reutilizar codigo de la siguiente manera:
    const [title, setTitle] = useState('Creando titulo');

const increment = () => {
    
    setCount(count++); // seteamos con valor++
    
}

const decrement = () => {
    
    setCount(count--); // seteamos con valor++
    
}

return(
    
    <div>
        <button onClick = {decrement}> - </button>
        // de esta forma le pasamos la funcion ejecutando la MOD al hacer click
        <button onClick = {() => setTitle('Cambie el titulo')};>Cambiar Titulo</button>
        <h1>{title}</h1>

         si en {} no pongo el valor del estado, react va a reconciliar (mostrar el cambio visual)

        <p>{count}</p> // valor de la desestructuracion del array que nos retorna el useState
        <button onClick = {increment}> + </button>
    </div>
    
    )

}

-------------------------------------------------------------------------

 La llamada al HOOK:

const [count, setCount] = useState(props.initial);

NUNCA debe ir dentro de un IF, se declara como constante dentro de la function.

React va a saber cuándo hay un EVENTO ya que le definimos un ESTADO. Cada vez que cambie, React lo va a identificar.

ESTADO DE CICLO DE VIDA: momento por el cuál esta pasando el componente.

----------------------------------------------------------

CICLO DE VIDA DE COMPONENTES: Serie de estados por el cuál pasan nuestros componentes.

Estos ESTADOS tienen como correspondencia ciertos metodos y funciones que utilizamos para realizar distintas cosas.

React va a conocer el ESTADO de nuestro componente a medida que vaya evolucionando en el tiempo.

Cuándo el componente se defina por primera vez, tendrá un estado. Una vez que se ejecute el código y el return por primera vez, el ESTADO es modificado y pasa a ser un "estado de montado". Luego, tendremos el pasado de montaje a ya montado. Lo mismo pasa cuándo se desmonta, cuándo lo sacamos, React sabe que eso va a desaparecer. 

El componente siempre debe RENDERIZAR algo. Siempre hay que dejar que React renderice por primera vez algo.

LLAMADA ASÍNCRONA: Se denominan así porque llevan un tiempo, puede ser tanto de 5 segundos como de 2 horas. 
Es código que no es instantanea la ejecución de ese código.

---------------------------------------------------------

Para decirle a React que hacer en cada ESTADO vamos a tener otro HOOK.

Esta siguiente funcion nos la da React para indicarle que hacer en cada ESTADO DE SU CICLO DE VIDA.

-------------------------------------------------------------

USEEFFECT: para crear funciones asíncronas vamos a tener que utilizar useEffect.
Esta función me permite manejar los estados del ciclo de vida del componente.
En el primer parámetro se pasa la funcion a ejecutar.
En el segundo parámetro un [] (array).
En caso de que este segundo parámetro sea un array vacio, el código se va a ejecutar la función que le derivemos únicamente luego del primer montaje (renderizado).
En caso de que le pasemos un valor dentro del [] estará pendiente de cuándo se modifique el estado de ese valor para ejecutarse.
Esta funcion useEffect puede utilizarse cuántas veces querramos.
El punto fuerte es ejecutarlo para tomar datos de una API.

-------------------------------------------------------------
Ejemplo: PARA MONTAR UN COMPONENTE

Dentro de la carpeta FunctionCounter (contadores):

import {useState, useEffect} from 'react';

const FunctionCounter = (props) => {

    console.log("1: Empieza la ejecucion del componente");
    const [count, setCount] = useState(props.initial); //initial en App "<FunctionCounter initial={0}"
    const [title, setTitle] = useState("Titulo inicial");

    useEffect(() => {

        setTimeout(() => {
            console.log("código asíncronico ya que no se ejecuta de forma instantanea");
        }, 500) // asíncronico

    }, []);

    useEffect(() => {
        console.log("3: Solo se ejecuta luego del primer renderizado"); // síncronico

    }, []); // con array vacio solamente se ejecuta al primer renderizado.

    useEffect(() => {
        console.log("4: Solo se ejecuta si hay    un cambio de estado en COUNT o TITLE");

    }, [count, title]);


    const decrement = () => {

        setCount(count--);

    };

    const increment = () => {

        sestCount(count++);

    };

    console.log("2: Esto se ejecuta antes del useEffect")
    return(
        <div>
            <h1>{title}</h1>
            <button onClick = {() => setTitle("Cambie el titulo")}>Cambiar titulo</button>
            <button onClick = {decrement}>Restar</button>
            <p>{count}</p>
            <button onClick = {increment}>Sumar</button>
        
        
        </div>
    )

}

--------------------------------------------------------------

PARA DESMONTAR UN COMPONENTE: React sabe que lo que este dentro del return es proceso de desmontamiento.

En FunctionCounter:

useEffect(() => {
    console.log("Acá puedo tener código");

    return(() => {
        console.log("Lo que este dentro del return es para desmotar")
    })

}, []);



En App:

import {useState} from 'react';

function App() {

    const [show, setShow] = useState(true); // inicializamos en true de ejemplo

    return(
        <div className = "App">
            <button onClick = {() => setShow(!show)}> {show ? 'no mostrar' : 'mostrar'}</button>
            {show ? <FunctionCounter initial = {1}/> : null}
        </div>
    );
}

La LÓGICA de la siguiente linea es igual a IF:

{show ? <FunctionCounter initial = {1}/> : null} = a condicional IF

if(show == true){
    <FunctionCounter initial = {1}/>
}else{
    null
}


--------------------------------------------------------------

PROMESAS: Las promesas tienen un estado pendiente. Puede ejecutarse o no. El resto de las funciones siguen pendientes de si se ejecuta promise o no.

RESOLVE: RESOLVER
REJECT: 

const recibirComida = () => {

    return new Promise((resolve, reject) => {
        / funcion asíncronica
        setTimeout(() => {
            / resolve para resolver (en este caso un string)
            resolve('recibi la comida');
        }, 5000);
    })
}

/ aca voy a tener una promesa, esta es la forma de llamarla

recibirComida().then(response => {
    console.log(response);
    console.log(comer); // despues de recibir la comida
});

METODO .THEN: la funcion que le pasemos la va a ejecutar únicamente cuándo la funcion dentro del return Promise este resuelto.
Ejecutando .then se va a guardar un espacio en memoria con la funcion que se va a ejecutar cuando la promesa se resuelva.

-------------------------------------------------------------

código más limpio: En este siguiente caso 'si hay comida' el codigo sigue fluyendo, 'si no hay comida' se detiene al menos que utilicemos distintos metodos como el .catch.
Es decir que, 'si hay comida' se ejecuta el RESOLVE, si 'no hay comida' se ejecuta el REJECT, que para poder seguir fluyendo el codigo vamos a utilizar distintos metodos.

El IF en esta funcion es para reemplazar el funcionamiento de FIREBASE ya que todavía no lo vimos.
El setTimeout lo utilizamos para simular una tardanza (codigo asíncronico)

const recibirComida = () => {

    return new Promise((resolve, reject) => {
        const hayComida = true;

        setTimeout(() => {
            if(hayComida){
                resolve('recibi la comida');
            }else{
                reject('no hay comida');
            }
        }, 5000);

    })
}

/ aca voy a tener una promesa, esta es la forma de llamarla

recibirComida().then(response => {
    console.log(response);
    console.log(comer); // despues de recibir la comida
});

REJECT: podemos utilizar:

.then: se utiliza para ver lo que nos responde la promisa, por si o por no

.catch: Se aplica en el segundo parametro del THEN.
Con esta funcion se sigue ejecutando otra parte del código que querramos en caso de que no se cumpla la promesa.
En caso de que el primer parametro del then tenga un error, se ejecuta el código del .catch

recibirComida().then(response => {
    throw new Error('la comida esta fria');

    console.log(Si hay error (la comida esta fria) este codigo no se ejecuta, se ejecuta el catch)

}).catch(error => { 
    console.log(si hay error se ejecuta este codigo sino el que esta en el primer parametro del then);
})

La promesa me va a devolver una respuesta para poder seguir con lo que pidamos o que nos devuelva un error si no se devuelve lo pedido. 

ESTO SE UTILIZA PARA EJECUTAR UNA API.

FINALLY = .finally(): Este metodo se ejecuta al final de la promesa pase lo que pase.

recibirComida(). then(responde => {

}).catch(error => {

    console.log(Se ejecuta si no se ejecuta o se frena el then)

}). finally(() => {

    console.log(Se ejectura pase lo que pase);

})

--------------------------------------------------------------

En un carrete, la comida serían los PRODUCTOS.
El mozo sería una función que nos devuelva la comida (PRODUCTO)
La comunicación con el mozo sería la PROMESA. (si puede o no)

Nuestro CATÁLOGO va a ser el archivo itemListContainer, quien alista todos los items (podría ser en cualquier otro pero es por tema de lejilibidad)

archivo listItemContainer:

/ se importa con {} ya que exportamos directamente la funcion y no de forma default.
import { getProducts } from "../../asyncmock";
import { useState, useEffect } from 'react';

const ItemListContainer = ({ greeting }) => {

    / le generamos un estado a los productos para poder llevarlos al return y que React este atento de cada MOD

    const [products, setProducts] = useState([]); // aqui se agrega array vacio dentro del useState para inicializar y poder utilizar el map en el return, sino apareceria que no esta definida la funcion.

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response); // para guardar la respuesta en el Estado del componente. Este estado es el que se va a mostrar en el return.
        });
    }, [])

    return(
        <h1>{greeting}</h1>
        <ul>
            / llaves ya que es el tercer paremetro que crea el elemento padre sin jsx
        
            {products.map(product => <li key={product.id}>{product.name}</li>)} // en nuestro proyecto debemos agregr la cart entera
        
        </ul>

        sin js la linea anterior seria:
        {product.map(product => React.createElement('li', {}, product.name))}
    );

}

export default ItemListContainer;


MAP = .map() : se utiliza para ir cargando producto por producto.

--------------------------------------------------------------

Dentro de asyncmock:

const products = [
    id:1, name: "mortal-kombat", price: 1200, category: "fight", etc.
]

/ exportamos directamente y no por default (la dif es que se llama con {getProducts})

export const getProducts = () => {

    return new Promise(resolve, reject) => {
        setTimeout(() => {
            resolve(products); // si se resuelve me entrega los prodcutos
        }, 2000); a los dos segundos

    }
}

----------------------------------------------------------------------------------------------------------------

CLASE 4:

Una vez que clonamos un proyecto, debemos entrar al proyecto donde se encuentra el package y realizar el npm install

API = Aplication Programming Interface: Interfaces entre sistemas, maneras de comunicarlos. 
Interfaz que los sistemas nos brindan para ingresar a su sistema.

La mayoría de sistemas suelen mejorar la experiencia de usuarios a través de datos.

La forma más común de recibir datos es a través de JSON.
Los datos se almacenan en un servidor, este servidor debe tener un acuerdo entre proveedor y consumidor (seguridad, identificaciones, lenguajes, etc).

Tenemos que saber quien inicia la operacion y como se sincronizan.

-----------------------------------------------------------

CONEXIÓN POOL: El cliente solicita info y trae

El cliente solicita la info, el servidor le envia la respuesta. Fin de la comunicación.

-----------------------------------------------------------

CONEXION PUSH: El servidor es quién inicia la comunicación.
(push notification). Rapi, pedidosya, etc.
Push nace para poder generar engagement y lograr que los usuarios recuerden nuestra app, ofreciendo un beneficio/interés en el momento en el que el servidor lo considere oportuno

El cliente se suscribe a un servicio de la aplicación y quedamos registrados.
Cuándo al servidor se le ocurra, inicia la comunicación a través de un mensaje (puede ser un anuncio, publicidad, etc) y la envía a un servicio (el que maneja las push notification).

---------------------------------------------------------

FIREBASE: Firebase ya tiene su servicio de push notification.
Es un back end como servicio, nos lo va a proveer Google (su creador). Lo utilizamos como propio pero sin escribir una línea de código.
Vamos a poder consumirlos, actualizarlos, etc.

-----------------------------------------------------------

POLLING: De no utilizar PUSH y que sea el cliente quien solicita los datos, lo que se hace es configurar a los clientes para que constantemente pregunten si hay algún cambio (algo nuevo).

------------------------------------------------------------

REQUESTS VIA HTTP/S: Nos permiten establecer un protocolo de transferencia definido por una dirección/URL, verbo (GET, POST, PUT, DELETE +), parámetros (vía query o URL), contenido de un post, configuraciones extras en los headers. La utilizamos para realizar una solicitud a un servidor.

1) Para solicitar info utilizamos el verbo GET.
2) Dependiendo de para que lo llamemos vamos a utilizar tal o tal parámetro.
3) Una vez que recibamos, vamos a tener que dar algo utilizando el verbo POST y en el BODY debemos indicar que le vamos a dar (JSON).

GET = OBTENER
POST = CREAR
PUT = CREAR / ACTUALIZAR
PATCH = ALTERACIONES
DELETE = ELIMINAR

PUT = El put busca si existe un dato, si existe lo actualiza y si no existe lo crea.

PATCH = Altera parcialmente algún dato de ese recurso indicado.

DELETE = Para eliminar, esto no elimina de la base de datos el recurso, queda guardado pero con un cambio de estado.

El servidor comprende que es un POST y no debería ser cacheado, si hacemos un GET y fuera cacheable, el navegador podrá cachearlo pero nunca lo hará con un recurso verbo POST.

--------------------------------------------------------------

QUERY PARAMS = PARÁMETROS: Para buscar recursos que no estamos seguros si existen o no.
Nos permiten incluir en la direccion, información que se usa para utilizar los recursos en el servidor.
Si los query params no encuentran algo, en vez de retornar un error, directamente no retorna nada.


Como se utilizan?

Buscamos en google utilizando https con el recurso SEARCH y la letra q (q = query). 

Ej: www.google.com.ar/search?q=coderhouse

Se separa con ? la URL de los PARAMS. Si tengo que seguir agregando params los voy a separar por &.

http://url.com/find?type=order&id=1234

--------------------------------------------------------------

URL PARAMS / SEGMENT: Se utilizan cuándo ya conocemos el recurso específico que se buscará.
Se utilizan para incluir el identificador del recurso dentro de la misma URL.

Una vez que entramos a la información del recurso que busque, puedo traerlos a través de los URL PARAMS.

https://myapp.coder/student/1234

Buscamos el estudiante con id 1234, esa información si sabemos que existe, podemos colocarla directamente.

También podemos buscar recursos que pertenecen a otro recurso, por ejemplo: los cursos que realizo otro estudiante.

https://myapp.coder/student/1234/courses

-------------------------------------------------------------

BODY: Se utiliza para transferir piezas de información entre el cliente y el servidor.

POST URL/url param HTTP/1.1

HEADER:

Host: 
Connection:
Content-type: application/json

BODY:

{"name": "John", "age: 45"}

--------------------------------------------------------------

IMPORTANTE:

Trabajamos el JSON en nuestra aplicación como objeto de JS pero no podemos enviarlo así a la red. Debemos convertirlo a string (cadena de caracteres), lo vamos a agregar al body y lo envíamos. Quien reciba esta request va a agarrar el body, parsearlo a JSON y en el código lo va a poder trabajar como un objeto en JS.

--------------------------------------------------------------

COMO CREAMOS REQUEST EN EL NAVEGADOR?

API FETCH = Fetch API: Método que tiene el navegador incluido para que podamos hacer request. 
Esta función nos retorna una PROMISE que se resuelve al terminar de hacer la REQUEST al back end al que nos querramos conectar. 
Esta PROMISE en un principio va a estar PENDIENTE y una vez que el server nos envía una respuesta, en ese momento se va a resolver (como bien o como mal). 
Por eso, debemos trabajar de manera asíncrona ya que no sabemos cuánto puede tardar todo este proceso.

--------------------------------------------------------------

QUERY PARAMS: ?

Copiamos la URL hasta SEARCH.

API MELI: api.mercadolibre.com/sites/MLA/search

y luego añadimos depende lo que querramos crear en la documentacion de la api lo que sigue con ?

https://api.mercadolibre.com/sites/MLA/search?q=

Luego del igual lo que querramos buscar

https://api.mercadolibre.com/sites/MLA/search?q=notebook

Esta API va a venir en forma de promesa por lo que la utilizamos a través del método .then.

A través del metodo JSON que tienen las response acceder a la informacion que estoy esperando. (responde.json)
Esto nos va a traer otro json con la informacion y la utilizamos con otro .then

-------------------------------------------------------------

PASADO A LIMPIO: UTILIZAR API MELI

Dentro del ItemListContainer:

import {useState, useEffect} from 'react';

const ItelListContainer = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState(""); /ya que utilizamos strings

    const fetchProducts = () => {

        /backtips para agregar ${search}

        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
        .then(response => {
            return response.json()
        }).then(res => {
            console.log(res.results);
            setProducts(res.results);
        })

    }

    return(
        <div className="productos">

            <input type="text" onChange={(e) => setSearch(e.target.value)}/>
            <button onClick = {fetchProducts}>Buscar</button>

            <ul>
                {products.map(product => <img key={product.id} src={product.thumbnail} alt="img")}/>}

                {products.map(product => <li key={product.id}>{product.nombre}</li>)}
            </ul>

        
        </div>
    )

}

------------------------------------------------------------

CORS: 

Al realizar un request nos podemos encontrar un error de seguridad que se produce cuándo un back end no esta configurado para aceptar peticiones de otra URL.

Antes de enviar el request entre dominios, el navegador envia una request options denominada PRE-FLIGHT. 

Esto quiere decir que solicita enviar la request y el back responde por si o por no, en caso de ser por no, aparece el CORS en consola.
















*/