// import React from 'react';
// import {render} from 'react-dom';
import {createStore} from 'redux';

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
store.dispatch({type: 'ADD_TRACK', payload: 'добавили ещё один трек'});
store.dispatch({type: 'ADD_TRACK', payload: 'добавили ещё один трек'});
store.dispatch({type: 'ADD_TRACK', payload: 'добавили ещё один трек'});
store.dispatch({type: 'ADD_TRACK', payload: 'добавили ещё один трек'});
