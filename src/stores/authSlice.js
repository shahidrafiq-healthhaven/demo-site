import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // token : localStorage.getItem("token") ? localStorage.getItem("token") : null
    token : localStorage.getItem("token") || null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        saveToken: (state, action) => {
            const token = action.payload
            localStorage.setItem("token", token);
            state.token = token;
        },
        deleteToken : (state) => {
            localStorage.removeItem('token');
            state.token = null;
        }
    }
})

export const {saveToken, deleteToken } = authSlice.actions

export default authSlice.reducer;