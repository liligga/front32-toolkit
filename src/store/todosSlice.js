import { createSlice } from "@reduxjs/toolkit";


const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: []
    },
    reducers: {
        // dispatch(addTodo('выучить реакт'))
        addTodo: (state, action) => {
            state.items.push(action.payload)
        },
        // [
        //     'прочитать книгу',
        //     'выучить реакт',
        //     'выучить редукс',
        // ]
        //dispatch(deleteTodo("Выучить реакт"))
        deleteTodo: (state, action) => {
            const ind = state.items.findIndex(item => item === action.payload)
            if (ind !== -1) {
                state.items.splice(ind, 1)
            }
            // codewars
            // hakerank
        }

    }
})

export const { addTodo, deleteTodo } = todosSlice.actions
export const todosReducer = todosSlice.reducer