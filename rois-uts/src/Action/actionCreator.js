import {ADD_TODO, REMOVE_TODO} from './actionsTypes'

let TodoId = 2

export const addTodo = text =>({
    type: ADD_TODO,
    id: TodoId++,
    text
})

export const deleteTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
})