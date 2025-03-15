import { EQUIPMENT_URL } from "../constant";
import { apiSlice } from "./apiSlice";

export const equipmentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEquipment: builder.query({
      query: () => ({
        url: EQUIPMENT_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getEquipmentDetails: builder.query({
      query: (equipmentId) => ({
        url: `${EQUIPMENT_URL}/${equipmentId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetEquipmentQuery, useGetEquipmentDetailsQuery } =
  equipmentApiSlice;
