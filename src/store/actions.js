import types from "./types";
import { createAction } from 'redux-actions';

const initApp = createAction(types.INIT_APP);
const changeInit = createAction(types.CHANGE_INIT);
const toggleOverlay = createAction(types.TOGGLE_OVERLAY);
const toggleMenu = createAction(types.TOGGLE_MENU);

export default {
    initApp,
    changeInit,
    toggleOverlay,
    toggleMenu,
};