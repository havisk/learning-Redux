let redux = require('redux');

console.log('starting redux example');


let stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};


let reducer = (state = stateDefault, action) => {
    // state = state || {name: 'Anonymous'};
    return state;
};

let store = redux.createStore(reducer);

let currentState = store.getState();
console.log('currentState', currentState);