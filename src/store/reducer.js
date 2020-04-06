import types from "./types";
import edition from "./edition";
import news from "./news";
import sponsor from "./sponsor";

const INITIAL_STATE = {
    init: {
        appInit: false
    },
    edition,
    news,
    sponsor,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CHANGE_INIT: {
            return{
                ...state,
                init: {
                    ...state.init,
                    appInit: action.payload
                }
            };
        }
        default:
            return state;
    }
};