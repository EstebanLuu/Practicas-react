const actions = require("./Actions");
const redux = require("redux")

const initialState = {
  count: 0,
  name: "",
};

// Toda a accion es un objeto
function reducerCount(state = initialState, action) {
  switch (action.type) {
    case "add":
      return { ...state, count: state.count + 1 };
    case "remove":
      return { ...state, count: state.count - 1 };
    case "add-n":
      return { ...state, count: state.count + action.payload };
    default:
      return state;
    case "add-S":
      return { ...state, name: action.payload };
  }
}
// el ...state se usa para siempre devolver el name sin modificar

//Segunda manera de encarar esto:

function reducerName(state = initialState.count, action) {
  switch (action.type) {
    case "add":
      return state + 1
    case "remove":
      return state - 1 ;
    case "add-n":
      return state + action.payload;
    default: 
      return state;
  }
}

function reducerName(state = initialState.name, action) {
  switch (action.type) {
    case "add-S":
      return  action.payload
    default:
      return state;
  }
}

module.exports = reducer;



//Segunda manera de encarar
//El combineReducers  

module.exports = redux.combineReducers({
    count: reducerCount,
    name: reducerName,
});
