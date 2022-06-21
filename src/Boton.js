import React from "react";
import { DECREMENT, INCREMENT } from "./Contador/InyDe";

function Boton() {
  return (
    <div>
      <button
        id="aumentar"
        onClick={() => {
          props.INCREMENT;
        }}
      >
        +
      </button>
      <button
        id="disminuir"
        onClick={() => {
          props.DECREMENT;
        }}
      >
        -
      </button>
    </div>
  );
}

export default Boton;
