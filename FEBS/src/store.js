import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./slices/cartSlice.js";
// import userSlice from "./slices/userSlice.js";
// import logInSlice from "./slices/loginSlice.js";
const store = configureStore({
  reducer: {
    // cart: cartSlice,
    // user: userSlice,
    // login: logInSlice,
  },
});

export default store;
