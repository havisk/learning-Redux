let redux = require('redux');



console.log('starting redux example');

//Name reducer and action generators
// ------------------------------
let nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
      case 'CHANGE_NAME':
          return action.name;
      default:
          return state;
    }
};

let changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    }
};

//Hobby reducer and action generators
// ------------------------------
let nextHobbyId = 1;
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

let addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    }
};

let removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    }
};


//Movie reducer and action generators
// ------------------------------
let nextMovieId = 1;
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

let addMovie = (title, genre) => {
    return {
        type: 'ADD_MOVIE',
        title,
        genre
    }
};

let removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
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

store.dispatch(changeName('Kool'));

store.dispatch(addHobby('making music'));

store.dispatch(addHobby('listening'));

store.dispatch(removeHobby(1));

store.dispatch(changeName('Namari'));

store.dispatch(addMovie('NWA', 'Biopic'));

store.dispatch(addMovie('Chips', 'Comedy'));

store.dispatch(addMovie('All Eyes On Me', 'Biopic'));

store.dispatch (removeMovie(1));


