let redux = require('redux');
let axios = require('axios');



console.log('starting redux example');

let actions = require('./actions/index');
let store = require('./store/configureStore').configure();


//subscribe to changes
let unsubscribe = store.subscribe(() => {
    let state = store.getState();

    console.log('new state', store.getState());

    if(state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...';
    } else if (state.map.url) {
        document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your Location</a>'
    }
});
//unsubscribe();

let currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());


store.dispatch(actions.changeName('Kool'));

store.dispatch(actions.addHobby('making music'));

store.dispatch(actions.addHobby('listening'));

store.dispatch(actions.removeHobby(1));

store.dispatch(actions.changeName('Namari'));

store.dispatch(actions.addMovie('NWA', 'Biopic'));

store.dispatch(actions.addMovie('Chips', 'Comedy'));

store.dispatch(actions.addMovie('All Eyes On Me', 'Biopic'));

store.dispatch (actions.removeMovie(1));


