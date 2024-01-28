/* import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    products : [],
}

export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        addToCart : (state, action) => {
            const product = state.products.find(item => item.id === action.payload.id)
            ! product && state.products.push(action.payload)
        },
        removeFromCart : (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload.id) 
        },
        resetCart : (state) => {
            state.products = []
        }

    },
    
})
export const {addToCart, removeFromCart, resetCart} = cartSlice.actions
export default cartSlice.reducer */


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    quantities: {},
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, quantity } = action.payload;
            const productIndex = state.products.findIndex(item => item.id === id);
            
            if (productIndex !== -1) {
                // If the product is already in the cart, update its quantity
                state.quantities[id] += quantity;
            } else {
                // If the product is not in the cart, add it with the specified quantity
                state.products.push(action.payload);
                state.quantities[id] = quantity;
            }
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            state.products = state.products.filter(item => item.id !== id);
            delete state.quantities[id]; // Remove quantity entry for the removed product
        },
        resetCart: (state) => {
            state.products = [];
            state.quantities = {}; // Reset quantities as well
        }
    },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
