import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'localhost:4000/api/traderequests/'}),
    endpoints: (builder) => ({
        getDevices: builder.query({
            query: () => '/load'
        })
    })
})

export const {useGetDevicesQuery} = apiSlice;