import types from './todos.types'

import { addNewItemToList, editItemOfList, deleteItemOfList, changeStatusOfItemOfList, copyListAndManipulate } from "./todos.utils";

const INITIAL_STATE = {
    todosList: [],
    // title and item are the title of item before initialize(add) inside the todos list
    title: "",
    item: "",
    error: "",
    edit: false,
}
const todosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_ITEM:
            return {
                ...state,
                todosList: addNewItemToList(state.todosList, state.title),
                title: "",
                error: ""
            }

        case types.EDIT_ITEM:
            return {
                ...state,
                todosList: copyListAndManipulate(editItemOfList, state.todosList, state.item, state.title),
                title: "",
                error: "",
                edit: false,
            }

        case types.DELETE_ITEM:
            return {
                ...state,
                todosList: copyListAndManipulate(deleteItemOfList, state.todosList, state.item)
            }
        case types.SET_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case types.SET_ITEM:
            return {
                ...state,
                item: action.payload,
                error: ""
            }
        case types.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case types.SET_EDIT:
            return {
                ...state,
                edit: !state.edit,
                error: ""
            }
        case types.SET_STATUS:
            return {
                ...state,
                todosList: copyListAndManipulate(changeStatusOfItemOfList, state.todosList, state.item),
            }
        default:
            return state;
    }
}

export default todosReducer;