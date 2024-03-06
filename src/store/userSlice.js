import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        age: 0,
        gender: ""
    },
    reducers: {
        // dispatch(changeName('Aaron'))
        changeName: null,
        // dispatch(changeAge(25))
        changeAge: null,
        // dispatch(changeGender('male'))
        changeGender: null,
        // dispatch(changeUser({name: 'Aaron', age: 25, gender: 'male'}))
        changeUser: null
    }
})