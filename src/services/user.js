import { base_url } from "../database"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath:"userApi",
    tagTypes:["updateImageProfile","updateLocatation"],
    baseQuery:fetchBaseQuery({baseUrl:base_url}),
    endpoints:(builder)=> ({
       patchImageProfile:builder.mutation({
        query:({localId,image})=> ({
            url:`users/${localId}.json`,
            method:"PATCH",
            body:{image}
        }),
        invalidatesTags:["updateImageProfile"]
       }),
       patchLocation:builder.mutation({
        query:({localId,address,location})=> ({
            url:`users/${localId}.json`,
            method:"PATCH",
            body:{address,location}
        }),
        invalidatesTags:["updateLocatation"]
       }),
       getUser:builder.query({
            query: ({localId}) => `users/${localId}.json`,
            providesTags:["updateImageProfile","updateLocatation"]
       }),
    
    })
})

export const { usePatchImageProfileMutation, useGetUserQuery,usePatchLocationMutation } = userApi