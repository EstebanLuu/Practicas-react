import React from "react";
import ReactDOM from "react-dom";
// import App from "./Clase3/App";
//import Titulo from "./Titulo";
// import ContadorClase from "./Clase2/ContadorClase";
// import ContadorFuncion from "./Clase2/ContadorFuncion";
// import App from "./Clase3/App";
// import { BrowserRouter } from "react-router-dom";
// import App from "./Clase4/App";
// import Boton from "./Boton";
import { Provider } from "react-redux";
import Store from "./Clase6";

// const Botoncito = (props) => {
//   <button
//     onClick={() => {
//       alert("Soy el botoncito");
//     }}
//   >
//     Botoncito
//   </button>;
// };

// const funcionalidad = () => {
//   alert("hola forro");
// };

// function Botonciño() {
//   return (
//     <div>
//       <button onClick={funcionalidad}>Apretame</button>
//     </div>
//   );
// }

// const Index = (props) => {
//   return (
//     <div>
//       <h1>{props.children}</h1>
//     </div>
//   );
// };

// class Div extends React.Component {
//   render() {
//     return <div className="Div">{this.props.children}</div>;
//   }
// }

// export default Titulo;

// let titulos = [
//   "hola soy un titulo",
//   "hola soy un titulo 2",
//   "titulo 3 en array",
// ];
// // este array se puede usar en el componente titulos de la siguiente manera
// //el foreach no devuelve nada, por eso se usa el map
// // IMPORTANTISIMO USAR KEY EN EL MAP

// ReactDOM.render(
//   <Div>
//     <Boton />
//     <Index>
//       <h1>hola mundo</h1>
//       <Botoncito />
//       <Botonciño />
//       {titulos.map((titulo) => (
//         <Titulo atributo={titulo} key={titulo} />
//       ))}
//     </Index>
//   </Div>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <Div>
//     <Boton />
//     <Index>
//       <h1>hola mundo</h1>
//       <Botoncito />
//       <Botonciño />
//       <Titulo titulo="hola soy un titulo" />
//       <Titulo titulo="hola soy un titulo 2" />
//     </Index>
//   </Div>,
//   document.getElementById("root")
// );

// Clase 1 de React
// Aqui lo que hacemos el una extructura basira de lo que son las funciones
// y las clases. Ademas aplicamos la logica de como cada uno de ellos pueden
// tener hijos en sus funciones

// Clase
// Funcionalidad de los componentes
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

//Formulario
//Clase para ver funcionalidad de un formulario
//
// ReactDOM.render(<App />, document.getElementById("root"));

//
//
//
///////////Clase 6////////////

/////// REACT THUNK IMPORTANTISIMO PARA PROYECTO INDIVIDUAL
////////instalacion en npm instal redux react-redux redux-thunk
//PALABRA DE CONNECT DE REACT REDUX (funcion) QUE SE LE PASA ALGO,
// ESTRUCTURA: connect()(LO QUE SE QUIERA PASARLE)

ReactDOM.render(
  <Provider store={Store}></Provider>,
  document.getElementById("root")
);
