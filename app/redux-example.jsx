let redux = require('redux');

console.log('starting redux example');

let reducer = (state = {name: 'Anonymous'}, action) => {
    // state = state || {name: 'Anonymous'};

    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }
};

let store = redux.createStore(reducer);

let currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(
    {
        type: 'CHANGE_NAME',
        name: 'Kool'
    }
);

console.log('Name should be kool', store.getState());