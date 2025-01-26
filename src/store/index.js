import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../features/counterSlice'
import shopReducer from '../features/shopSlice'
import cartReducer from '../features/cartSlice';
import userReducer from "../features/userSlice"
import { shopApi } from "../services/shop"
import { ordersApi } from "../services/orders"
import { authApi } from "../services/auth"
import { userApi } from "../services/user"
import { cartApi } from "../services/cart"
import { setupListeners } from "@reduxjs/toolkit/query"

export const store =  configureStore({
    reducer:{
        counter:counterReducer,
        shop:shopReducer,
        cart:cartReducer,
        user:userReducer,
        [shopApi.reducerPath]:shopApi.reducer,
        [ordersApi.reducerPath]:ordersApi.reducer,
        [authApi.reducerPath]:authApi.reducer,
        [userApi.reducerPath]:userApi.reducer,
        [cartApi.reducerPath]:cartApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware,ordersApi.middleware, authApi.middleware, userApi.middleware, cartApi.middleware),
})

setupListeners(store.dispatch)