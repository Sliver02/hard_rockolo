import { 

} from "./actions.js";
import { createSelector } from "reselect";

export const VisibilityFilters = {

};

const initial_state = {
    todos: [],
    filter: VisibilityFilters.show_all,
};

export const reducer = (state = initial_state, action) => {
    switch(action.type) {
        
        default:
            return state;
    }
};
