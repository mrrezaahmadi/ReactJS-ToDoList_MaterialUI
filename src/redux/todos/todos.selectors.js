import { createSelector } from "reselect";

const selectTodos = state => state.todos

export const selectTodosTitle = createSelector(
    [selectTodos],
    todos => todos.title
)

export const selectTodosEdit = createSelector(
    [selectTodos],
    todos => todos.edit
)

export const selectTodosError = createSelector(
    [selectTodos],
    todos => todos.error
)

export const selectTodosList = createSelector(
    [selectTodos],
    todos => todos.todosList
)