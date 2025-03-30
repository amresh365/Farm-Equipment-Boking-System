import { createSlice } from "@reduxjs/toolkit";

const initialState = (() => {
  try {
    const savedCart = localStorage.getItem("order");
    return savedCart
      ? JSON.parse(savedCart)
      : { id: "", bookingAddress: "", date: "", time: "" };
  } catch (error) {
    console.error("Failed to parse cart from localStorage:", error);
    return { id: "", bookingAddress: "", date: "", time: "" };
  }
})();

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    bookEquipment: (state, action) => {
      // Assuming action.payload contains the details needed to update the state
      const { id, bookingAddress, selectedDates, selectedTime } =
        action.payload;

      state.id = id || state.id; // Update id or retain existing
      state.bookingAddress = bookingAddress || state.bookingAddress; // Update shippingAddress
      state.date = selectedDates || state.date; // Update date
      state.time = selectedTime || state.time; // Update time

      // Optionally, you might want to save the updated state back to localStorage
      localStorage.setItem("order", JSON.stringify(state));
    },
  },
});

export const { bookEquipment } = orderSlice.actions;
export default orderSlice.reducer;
