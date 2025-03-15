import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import { equipmentApiSlice } from "./slices/equipmentApiSlice"; // Add the equipmentApiSlice here
// import authSliceReducer from "./slices/authSlice"; // Uncomment if you are using authSlice

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [equipmentApiSlice.reducerPath]: equipmentApiSlice.reducer, // Add the equipmentApiSlice reducer here
    // auth: authSliceReducer, // Uncomment if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      equipmentApiSlice.middleware
    ), // Include the equipmentApiSlice middleware
  devTools: true,
});

export default store;
