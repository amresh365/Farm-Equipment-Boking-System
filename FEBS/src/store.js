import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import authSliceReducer from "./slices/authSlice";
import { equipmentApiSlice } from "./slices/equipmentApiSlice";
import bookEquipSliceReducer from "./slices/bookEquipSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    bookEquipment: bookEquipSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      equipmentApiSlice.middleware
    ),
  devTools: true,
});

export default store;
