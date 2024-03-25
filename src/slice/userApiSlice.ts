import { USERS_URL } from "../../constants.ts";
import apiSlice from './apiSlice';


export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registeration: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/signup`,
                method: 'POST',
                body: data,
            }),
        }),
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
            })
        })
    })
})

export const {
    useRegisterationMutation,
     useLoginMutation, 
     useLogoutMutation 
   } = usersApiSlice;