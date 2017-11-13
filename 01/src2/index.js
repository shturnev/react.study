import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';

//--

function playlistReducer(state = [], action) {
    if(action.type === 'ADD_TRACK'){
        return [
            ...state,
            action.payload
        ];
    }

    return state;
}

const store = createStore(playlistReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;


render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);



/*
function playlistReducer(state = [], action) {
    if(action.type === 'ADD_TRACK'){
        return [
            ...state,
            action.payload
        ];
    }
}

const store = createStore(playlistReducer, 0);
window.store = store;

//--
const addTrackBtn = document.querySelector('.addTrack');
const trackInput  = document.querySelector('.trackInput');

addTrackBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const trackName = trackInput.value;
    store.dispatch({type: 'ADD_TRACK', payload: trackName});

});

store.subscribe(()=>{

    const list = document.querySelector('.list');
    list.innerHTML = '';
    trackInput.value = '';

    store.getState().map((item) => {
       const li = document.createElement('li');
       li.innerText = item;
       list.appendChild(li);
    });

});*/
