let redux = require('redux');
let thunk = require('redux-thunk').default;
let { nameReducer, moviesReducer, mapReducer, hobbiesReducer} = require('./../reducers/index');



export let configure = () => {
    let reducer = redux.combineReducers({
        name: nameReducer,
        hobbies: hobbiesReducer,
        movies: moviesReducer,
        map: mapReducer
    });

    let store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
};