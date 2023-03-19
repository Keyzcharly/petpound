import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const petApi = createApi({
  reducerPath: 'petApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api' }),
  tagTypes: ['Pet'],
  endpoints: (builder) => ({
    getPets: builder.query({
      query: () => '/pets',
      providesTags: ['Pet'],
    }),
    addNewPet: builder.mutation({
      query: (payload) => ({
        url: '/pets',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Pet'],
    }),
    updatePet: builder.mutation({
      query: (petId, payload) => ({
        url: `/pets/${petId}`,
        method: 'PUT',
        body: payload,
      }),
      invalidatesTags: ['Pet'],
    }),
    deletePet: builder.mutation({
      query: (id) => ({
        url: `/pets/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Pet'],
    }),
  })
})

export const {
    useGetPetsQuery,
    useAddNewPetMutation,
    useUpdatePetMutation,
    useDeletePetMutation,
  } = petApi;