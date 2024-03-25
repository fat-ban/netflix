import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from "../../constants.ts";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_API_URL,
    credentials: 'include'
})

const apiSlice = createApi({
    reducerPath: 'quranReadersApi',
    baseQuery,
    endpoints: (builder) => ({})
})

export default apiSlice;