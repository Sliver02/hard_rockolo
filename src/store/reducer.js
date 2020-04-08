import types from "./types";
import editions from "./editions";
import news from "./news";
import sponsor from "./sponsor";

const INITIAL_STATE = {
    init: {
        overlay: false
    },
    editions,
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
                    overlay: action.payload
                }
            };
        }
        default:
            return state;
    }
};