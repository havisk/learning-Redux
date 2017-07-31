let redux = require('redux');



console.log('starting redux example');

let stateDefault ={
    name: 'Anonymous',
    hobbies: [],
    movies: []
};
let nextHobbyId = 1;
let nextMovieId = 1;


//individual reducers

let nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
      case 'CHANGE_NAME':
          return action.name;
      default:
          return state;
    }
};

let hobbiesReducer = (state =[], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ];
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => hobby.id !== action.id);
        default:
            return state;
    }
};

let moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    id: nextMovieId++,
                    movie: action.title,
                    genre: action.genre
                }
            ];
        case 'REMOVE_MOVIE':
            return state.filter((movie) => movie.id !== action.id);
        default:
            return state;
    }
};

let reducer = redux.combineReducers({
   name: nameReducer,
   hobbies: hobbiesReducer,
   movies: moviesReducer
});

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


