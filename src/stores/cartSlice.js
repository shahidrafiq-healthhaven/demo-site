import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const cart_item =  action.payload;
            const {product_id, name, form, selected_strengths, quantity, strengths} =  action.payload;
            const indexProductId = (state.items).findIndex(item => 
                item.product_id === product_id && item.selected_strengths === selected_strengths
            );
            // console.log("state.items :",state.items);
            // console.log("action.payload :",action.payload);
            // console.log("indexProductId :",indexProductId);
            if(indexProductId >= 0){
                console.log("product exits");
                state.items[indexProductId].quantity += quantity;
            }else{
                console.log("product not exits");
                state.items.push(cart_item);
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
            
        },
        changeQuantity :(state, action)=>{
            const {product_id, quantity} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.product_id === product_id);
            if(quantity > 0){
                state.items[indexProductId].quantity = quantity;
            }else{
                state.items = (state.items).filter(item => item.product_id !== product_id);
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        changeStrength :(state, action)=>{
            const {product_id, strength} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.product_id === product_id);
            if (indexProductId !== -1) {
                state.items[indexProductId].selected_strengths = strength;
                localStorage.setItem("carts", JSON.stringify(state.items));
            }
            
        },
        removeCartItem: (state, action) => {
            const {product_id, selected_strengths} = action.payload;
            console.log("action.payload :", action.payload);
            state.items =( state.items).filter(item => item.product_id !== product_id)
            // state.items =( state.items).filter(item => item.product_id !== product_id && item.selected_strengths !== selected_strengths  )
            console.log("state.items :", state.items);
            
            localStorage.setItem('carts', JSON.stringify(state.items));
        },
        emptyCart: (state) => {
            console.log("state.items",state.items);
            state.items = [];
            localStorage.setItem('carts', JSON.stringify(state.items));
        },
        // saveToken: (state, action) => {
        //     const token = action.payload
        //     // console.log("action.payload :",action.payload);
        //     // localStorage.setItem("token", JSON.stringify(token));
        //     localStorage.setItem("token", token);
        // },
        // deleteToken : (state) => {
        //     localStorage.removeItem('token');
        // },
    }
})

export const {addToCart, changeQuantity,changeStrength, removeCartItem, emptyCart } = cartSlice.actions

export default cartSlice.reducer
