import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import authReducer from './authSlice';
import apiReducer from './apiSlice';

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        auth: authReducer,
        api: apiReducer
    }
});
