let redux = require('redux');

console.log('starting redux example');


let stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};


let reducer = (state = stateDefault, action) => {
    // state = state || {name: 'Anonymous'};
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state;
    }
};

let store = redux.createStore(reducer, redux.compose (
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.subscribe(() => {
   let state = store.getState();

   document.getElementById('app').innerHTML = state.searchText;
});

let currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_TEXT',
    searchText: 'run away'
});

store.dispatch({
    type: 'CHANGE_TEXT',
    searchText: "Im the King"
});