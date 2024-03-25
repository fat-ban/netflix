import { Reader } from "../../Type";
import { READER_URL } from "../../constants";
import apiSlice from "./apiSlice";


export const readersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllReaders: builder.query<Reader[], void>({
            query: () => ({
                url: READER_URL,
            })
        })
    })
});

export const {useGetAllReadersQuery} = readersApiSlice