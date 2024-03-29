import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 10
    },
    reducers: {
        // Immer - позволяет модифицировать состояние(mutate - изменение)
        increaseCounter: (state) => {
            state.value += 1
            // return { ...state, value: state.value + 1 }
        },
        decreaseCounter: (state) => {
            state.value -= 1
        },
        // payload - данные, которые передаются в action
        // dispatch(increaseWithPayload(5))
        increaseWithPayload: (state, action) => {
            state.value += action.payload
        }
    }
})

export const counterReducer = counterSlice.reducer
export const { increaseCounter, decreaseCounter, increaseWithPayload } = counterSlice.actions
// export const counterAction = counterSlice.actions