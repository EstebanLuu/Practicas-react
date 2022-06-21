import React from "react";
import { useState } from "react";

// function Formulario() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(document.getElementById("name").value);
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input placeholder="nombre" id="name"></input>
//       </form>
//     </div>
//   );
// }

// Prevent default se usa para tomar el control de lo predeterminado

function Formulario() {
  const [massage, setMasagge] = useState("  ");
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={massage}
          onChange={(e) => {
            if (e.target.value.length <= 25) setMasagge(e.target.value);
          }}
          placeholder="mensaje"
        />
        <span> {massage.length} de 25 caracteres</span>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Formulario;
