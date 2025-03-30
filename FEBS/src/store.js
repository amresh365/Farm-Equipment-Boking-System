import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import authSliceReducer from "./slices/authSlice";
import { equipmentApiSlice } from "./slices/equipmentApiSlice";
import orderSliceReducer from "./slices/orderItemSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    orderEquipment: orderSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      equipmentApiSlice.middleware
    ),
  devTools: true,
});

export default store;
