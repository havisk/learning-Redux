let redux = require('redux');



console.log('starting redux example');

let stateDefault ={
    name: 'Anonymous',
    hobbies: [],
    movies: []
};
let nextHobbyId = 1;
let nextMovieId = 1;

let reducer = (state = stateDefault, action) => {
    // state = state || {name: 'Anonymous'};

    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'ADD_HOBBY':
             return {
                 ...state,
                 hobbies: [
                     ...state.hobbies,
                     {
                         id: nextHobbyId++,
                         hobby: action.hobby
                     }
                 ]
             };
        case "REMOVE_HOBBY":
            return {
                ...state,
                hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
            };
        case 'ADD_MOVIE':
            return{
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        movie: action.title,
                        genre: action.genre
                    }
                ]
            };
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.id)
            };
        default:
            return state;
    }
};

let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes
let unsubscribe = store.subscribe(() => {
    let state = store.getState();

    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name

    console.log('new state', store.getState());
});
//unsubscribe();

let currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(
    {
        type: 'CHANGE_NAME',
        name: 'Kool'
    });

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'making music'
});
store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'listening'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 1
});


store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Namari'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'NWA',
    genre: 'Biopic'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Chips',
    genre: 'Comedy'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'All Eyes on ME',
    genre: 'Biopic'
});

store.dispatch ({
    type: 'REMOVE_MOVIE',
    id: 1
});


