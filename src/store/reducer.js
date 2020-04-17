import types from "./types";
import editions from "./editions";
import news from "./news";
import sponsor from "./sponsor";

const INITIAL_STATE = {
    init: {
        initApp: false,
        overlay: false,
        currentArticleID: 3,
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
                    initApp: action.payload
                }
            };
        }
        case types.CHANGE_OVERLAY: {
            return {
                ...state,
                init: {
                    ...state.init,
                    overlay: !state.init.overlay,
                }
            };
        }
        case types.SWITCH_ARTICLE: {
            return {
                ...state,
                init: {
                    ...state.init,
                    currentArticleID: action.payload,
                }
            };
        }
        default:
            return state;
    }
};