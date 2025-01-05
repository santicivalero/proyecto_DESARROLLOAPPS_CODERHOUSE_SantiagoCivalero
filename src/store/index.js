import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../features/counterSlice'
import shopReducer from '../features/shopSlice'
import cartReducer from '../features/cartSlice';
import { shopApi } from "../services/shop"
import { ordersApi } from "../services/orders"
import { setupListeners } from "@reduxjs/toolkit/query"

export const store =  configureStore({
    reducer:{
        counter:counterReducer,
        shop:shopReducer,
        cart:cartReducer,
        [shopApi.reducerPath]:shopApi.reducer,
        [ordersApi.reducerPath]:ordersApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware,ordersApi.middleware),
})

setupListeners(store.dispatch)