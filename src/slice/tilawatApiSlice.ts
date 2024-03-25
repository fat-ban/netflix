import { TilawaType, commentType } from "../../Type";
import { TILAWAT_URL } from "../../constants";
import apiSlice from "./apiSlice";

export const tilawatApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getAllTilawats :builder.query ({
          query: () => ({
            url : "/tilawats"
         })
      }),
      getTilawa: builder.query<TilawaType, string | undefined>({
         query: (id) => ({
            url: `${TILAWAT_URL}/${id}`,
         })
      }),
      getAllComments:builder.query<commentType , string | undefined>({
         query: (id) => ({
            url: `${TILAWAT_URL}/${id}/comments`,
         })
      }), 
      addComment: builder.mutation({
         query: ({id, data}) => ({
            url:`${TILAWAT_URL}/${id}/comments`,
            method: "POST",
            body: data,
         })
        
   }),
   addReview: builder.mutation({
      query: ({id,data}) => ({
         url:`${TILAWAT_URL}/${id}/reviews`,
         method: 'POST',
         body: data
   })   
   }) 
})
})

export const {useGetTilawaQuery,
   useGetAllTilawatsQuery,
   useGetAllCommentsQuery,
   useAddCommentMutation,
   useAddReviewMutation
} = tilawatApiSlice