//Redux es una libreria de estado global

const redux = require("redux");
const reducer = require("./reducer");
const actions = require("./Actions");
const store = redux.createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(actions.add());
store.dispatch(actions.add());
store.dispatch(actions.add());
store.dispatch(actions.remove());
store.dispatch(actions.addN());


// metodos de la store de reduce
// store.getState() devuelve el estado
// store.dispatch ({type: "add"}) devuelve una accion
//store.suscribe que devuelve una funcion en donde por ejemplo puedo ver que esta pasando, 
//que cambios se estan realizando
