import React from "react";

// AHORA EN FUNCIONESSS
//Y SE HACE CON HOOKS

function ContadorFuncion() {
  const [contador, setState] = React.useState(0);
  function handleAdd() {
    setState(contador + 1);
  }
  function handleRemove() {
    setState(contador - 1);
  }
  function handleRemovex2() {
    setState((state) => state - 1);
    setState((state) => state - 1);
  }
  function handleAddx2() {
    setState((state) => state + 1);
    setState((state) => state + 1);
  }

  return (
    <div>
      <button onClick={handleAddx2}>+2</button>
      <button style={{ margin: "1rem" }} onClick={handleAdd}>
        +1
      </button>
      <span style={{ margin: "2rem" }}>El contador funcion es: {contador}</span>
      <button onClick={handleRemove}>-1</button>
      <button style={{ margin: "1rem" }} onClick={handleRemovex2}>
        -2
      </button>
    </div>
  );
}
export default ContadorFuncion;
