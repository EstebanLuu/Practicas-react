import React from "react";
import { Route } from "react-router-dom";
import PaginaA from "./Paginas/PaginaA";
import PaginaB from "./Paginas/PaginaB";
import PaginaMain from "./Paginas/PaginaMain";
// import { Link } from "react-router-dom";NavLink

// exact sirve para para  hacerle saber al buscador que lo queremos exactamente con algo
// Strict sirve para decirle estrictamente como lo queremos(es mas riguroso que el exact)
//sensitive sirve para que asea sensitivo a la mayuscula o miuscula

const App = () => {
  return (
    <div>
      <Route path="/" exact strict sensitive component={PaginaMain} />
      <Route path="/a" exact component={PaginaA} />
      <Route path="/b" exact component={PaginaB} />
    </div>
  );
};

//El link nos sirve para hacer un link con react

// const Linkesito = () => {
//   return (
//     <div>
//       <Link to="/" >Home</Link>
//       <Link to="/a">Dirigete a la zona /a</Link>
//       <Link to="/b">Dirigete a la zona /b</Link>
//     </div>
//   );
// };

// El NavLink es muy parecido al Link, investigar si se necesita
//Tiene una propiedad de active state si es que se solicita

// const NavLink = () => {
//   return (
//     <div>
//       <NavLink to="/" >Home</Link>
//       <NavLink to="/a">Dirigete a la zona /a</Link>
//       <NavLink to="/b">Dirigete a la zona /b</Link>
//     </div>
//   );
// };

// Hook que se llama useParams que viene de react-router-dom
// Hook que se llama useHistory que viene de react-router-dom
//METODOS RENDER (PUSH, GO BACK, GO FORWARD) 
//PROMPT QUE TE SIRVE POR SI SE QUIERE PONER UNA ADVERTENCIA ANTES DE HACER ALGO
//REDIRECT QUE REDIRECCIONA


// function App() {
//   return (
//     <div>
//       <Route path="/" exact strict>
//         <PaginaMain />
//       </Route>
//       <Route path="/" exact strict>
//         <PaginaA />
//       </Route>
//       <Route path="/" exact strict>
//         <PaginaB />
//       </Route>
//     </div>
//   );
// }
export default App;
