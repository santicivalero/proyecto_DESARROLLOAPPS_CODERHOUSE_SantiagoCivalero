import { createSlice } from "@reduxjs/toolkit"
//import allProducts from '../data/products.json'
//import allCategories from '../data/categories.json'

export const shopSlice = createSlice({
    name:"shop",
    initialState:{
        categories:[],
        products:[],
        productsFilteredByCategory:[],
        productSelected:{}
    },
    reducers:{
        setProductsFilteredByCategory: (state, actions) => {
            state.productsFilteredByCategory = state.products.filter(product => product.category === actions.payload)
        }
        // setProducts: (state, action) => {
        //     state.products = action.payload; // Actualizamos los productos con datos de la API
        // },
        // setCategories: (state, action) => {
        //     state.categories = action.payload; // Actualizamos las categorías con datos de la API
        // },
    }
})

export const {setProductsFilteredByCategory, setProducts, setCategories} = shopSlice.actions

export default shopSlice.reducer