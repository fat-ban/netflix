import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";


import apiSlice from "../slice/apiSlice.ts";
import authSlice from "../slice/authSlice.ts";


export const store = configureStore({
   reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      auth: authSlice.reducer
   },
   //CACHE?POLLING? 
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
   devTools: true
})


export type RootState = ReturnType<typeof store.getState>
export default store;
setupListeners(store.dispatch)