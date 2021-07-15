import { ADD_TODO, DELETE_TODO } from "./types";

export const addTodo = (message) => ({

    type : ADD_TODO,
    message,
    id: Math.random(),
});

export const deleteTodo = (id) => ({

    type : DELETE_TODO,
    id,
});