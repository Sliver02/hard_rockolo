import types from "./types";
import { createAction } from 'redux-actions';

const initApp = createAction(types.INIT_APP);
const changeInit = createAction(types.CHANGE_INIT);
const changeOverlay = createAction(types.CHANGE_OVERLAY);
const switchArticle = createAction(types.SWITCH_ARTICLE);

export default {
    initApp,
    changeInit,
    changeOverlay,
    switchArticle,
};