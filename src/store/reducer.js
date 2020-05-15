import types from "./types";
import editions from "./editions";
import merchandise from "./merchandise";
import news from "./news";
import sponsor from "./sponsor";

const INITIAL_STATE = {
    init: {
        initApp: false,
        currentArticleID: 3,
        showOverlay: false,
        showMenu: false,
    },
    editions,
    merchandise,
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
        
        case types.SWITCH_ARTICLE: {
            return {
                ...state,
                init: {
                    ...state.init,
                    currentArticleID: action.payload,
                }
            };
        }

        case types.TOGGLE_OVERLAY: {
            return {
                ...state,
                init: {
                    ...state.init,
                    showOverlay: !state.init.showOverlay,
                }
            };
        }

        case types.TOGGLE_MENU: {
            return {
                ...state,
                init: {
                    ...state.init,
                    showMenu: !state.init.showMenu,
                }
            };
        }
        default:
            return state;
    }
};