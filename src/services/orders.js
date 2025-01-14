import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry"
import { base_url } from "../database"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const ordersApi = createApi({
    reducerPath:"ordersApi",
    baseQuery:fetchBaseQuery({baseUrl:base_url}),
    endpoints:(builder)=> ({
        postOrders:builder.mutation({
            query:({...newOrder}) => ({
                url:"orders.json",
                method:"POST",
                body:newOrder
            }),
        }),
        getOrders:builder.query({
            query:() => "orders.json"
        })
       
    })
})

export const {usePostOrdersMutation, useGetOrdersQuery } = ordersApi