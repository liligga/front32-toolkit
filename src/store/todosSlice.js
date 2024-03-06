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
        deleteTodo: null
    }
})