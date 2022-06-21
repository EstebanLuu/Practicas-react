import React from "react";

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.handleAdd = this.handleAdd.bind(this);
  }
  //El el handleAdd se utiliza una funcion normal y se tiene que bindear el this
  //ya que hace referencia de donde esta siendo ejecutada

  handleAdd() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  // En el handleRemove se usa una arrow function y se ejecuta donde esta escrita
  //y no necesita bindear el this
  handleRemove = () => {
    this.setState((state) => ({ contador: this.state.contador - 1 }));
  };
  //hacemos un sumar 2 con arrow function ya que nos permite tener el estado actual
  handleAddx2 = () => {
    this.setState((state) => ({ contador: state.contador + 1 }));
    this.setState((state) => ({ contador: state.contador + 1 }));
  };

  //hacemos un restar 2 con arrow function ya que nos permite tener el estado actual
  handleRemovex2 = () => {
    this.setState((state) => ({ contador: state.contador - 1 }));
    this.setState((state) => ({ contador: state.contador - 1 }));
  };

  componentDidMount() {
    console.log("se monto algo");
  }

  componentDidUpdate() {
    console.log("El nuevo numero del contador es:", this.state);
  }

  componentWillUnmount() {
    console.log("Se desmonto algo");
  }
  // ESTOS 3 METODOS SIRVEN EN LAS CLASES PARA SABER LOS 3 CICLOS DE VIDA: MONTAJE; ACTUALIZACION Y DESMONTAJE
  //componentDidMount
  //componentDidUpdate
  //componentWillUnmount
  render() {
    return (
      <div>
        <button onClick={this.handleAddx2}>+2</button>
        <button style={{ margin: "1rem" }} onClick={this.handleAdd}>
          +1
        </button>
        <span style={{ margin: "2rem" }}>
          El contador clase es: {this.state.contador}
        </span>
        <button onClick={this.handleRemove}>-1</button>
        <button style={{ margin: "1rem" }} onClick={this.handleRemovex2}>
          -2
        </button>
      </div>
    );
  }
}

export default Contador;
