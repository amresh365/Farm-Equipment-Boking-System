import { apiSlice } from "./apiSlice";
import { BOOKING_URL } from "../constant";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (booking) => ({
        url: BOOKING_URL,
        method: "POST",
        body: { ...booking },
      }),
    }),
    getBookingDetails: builder.query({
      query: (orderId) => ({
        url: `${BOOKING_URL}/${orderId}`,
      }),
      keepUnusedDataFor: 5,
    }),

    getMyBookings: builder.query({
      query: () => ({
        url: `${BOOKING_URL}/mine`,
      }),
      keepUnusedDataFor: 5,
    }),
    getAllBookings: builder.query({
      query: () => ({
        url: `${BOOKING_URL}/all`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetBookingDetailsQuery,
  useGetMyBookingsQuery,
  useGetAllBookingsQuery,
} = orderApiSlice;
