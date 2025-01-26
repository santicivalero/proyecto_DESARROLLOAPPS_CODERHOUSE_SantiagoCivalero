import { createSlice } from "@reduxjs/toolkit"

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
    }
})

export const {setProductsFilteredByCategory, setProducts, setCategories} = shopSlice.actions

export default shopSlice.reducer