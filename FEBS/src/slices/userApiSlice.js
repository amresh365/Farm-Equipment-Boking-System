import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constant.js";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
      keepUnusedDataFor: 5,
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    // profile: builder.mutation({
    //   query: (data) => ({
    //     url: `${USERS_URL}/profile`,
    //     method: "PUT",
    //     body: data,
    //   }),
    // }),
    // users: builder.query({
    //   query: () => `${USERS_URL}`,
    // }),
    // getUserById: builder.query({
    //   query: (userId) => `${USERS_URL}/${userId}`,
    // }),
    // updateUser: builder.mutation({
    //   query: (data) => ({
    //     url: `${USERS_URL}/${data._id}`,
    //     method: "PUT",
    //     body: data,
    //   }),
    // }),
    // deleteUser: builder.mutation({
    //   query: (id) => ({
    //     url: `${USERS_URL}/${id}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});
export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  // useProfileMutation,
  // useUsersQuery,
  // useGetUserByIdQuery,
  // useUpdateUserMutation,
  // useDeleteUserMutation,
} = usersApiSlice;
