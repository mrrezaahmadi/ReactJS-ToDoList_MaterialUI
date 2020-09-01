import types from './todos.types'

export const addItem = () => ({
    type: types.ADD_ITEM,
})

export const deleteItem = () => ({
    type: types.DELETE_ITEM,
})

export const editItem = () => ({
    type: types.EDIT_ITEM,
})

export const setTitle = (title) => ({
    type: types.SET_TITLE,
    payload: title
})

export const setError = (error) => ({
    type: types.SET_ERROR,
    payload: error
})

export const setItem = (item) => ({
    type: types.SET_ITEM,
    payload: item
})

export const setEdit = () => ({
    type: types.SET_EDIT
})

export const setStatus = () => ({
    type: types.SET_STATUS
})