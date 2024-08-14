import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Features/cart/CartSlice"
export const store = configureStore({
    reducer: {
        cart: CartReducer,
    }
})

export default store