import { 
    add_todo, 
    update_todo_status, 
    update_filter,
    clear_completed 
} from "./actions.js";
import { createSelector } from "reselect";

export const VisibilityFilters = {
    show_all: 'All',
    show_active: 'Active',
    show_completed: 'Completed'
};

const initial_state = {
    todos: [],
    filter: VisibilityFilters.show_all,
};

export const reducer = (state = initial_state, action) => {
    switch(action.type) {
        case add_todo:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            };
        case update_todo_status:
            return {
                ...state,
                todos: state.todos.map(todo => 
                    action.todo === todo ? { ...todo, complete : action.complete } : todo
                )
            };
        case update_filter:
            return {
                ...state,
                filter: action.filter,
            };
        case clear_completed :
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.complete)
            };
        default:
            return state;
    }
};

const getTodosSelector = state => state.todos;
const getFilterSelectore = state => state.filter;

export const getVisibleTodosSelector = createSelector(
    getTodosSelector,
    getFilterSelectore,
    (todos, filter) => {
        switch (filter) {
            case VisibilityFilters.show_active:
              return todos.filter(todo => !todo.complete);
            case VisibilityFilters.show_completed:
              return todos.filter(todo => todo.complete);
            default:
              return todos;
        }
    }
);

export const statsSelector = createSelector(getTodosSelector, (todos) => {
    const completed = todos.filter(todo => todo.complete).length;
    return {
        completed,
        active: todos.length - completed
    };
});