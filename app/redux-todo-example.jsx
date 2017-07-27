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

let store = redux.createStore(reducer);

let currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_TEXT',
    searchText: 'run away'
});

console.log('searchText should be run away', store.getState());