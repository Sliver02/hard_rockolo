
import {createStore} from 'redux';
import {reducer} from './reducer.js';

/**
 * we want to take the state and persist it to local storage
 * when we but up we check if there is a local storage
 * and we relace the empty one with the stored
 */
const STORAGE_KEY = '__hard_rockolo__';
const saveState = state => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const loadState = () => {
    const json = localStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : undefined;
};

export const store = createStore(
    reducer,
    loadState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    saveState(store.getState());
});