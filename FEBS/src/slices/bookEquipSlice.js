import { createSlice } from "@reduxjs/toolkit";

const initialState = (() => {
  try {
    const savedCart = localStorage.getItem("selectedEquip");
    return savedCart
      ? JSON.parse(savedCart)
      : { id: "", bookingAddress: "", date: "", time: "" };
  } catch (error) {
    console.error("Failed to parse cart from localStorage:", error);
    return { id: "", bookingAddress: "", date: "", time: "" };
  }
})();

const bookEquipSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    myEquipment: (state, action) => {
      // Assuming action.payload contains the details needed to update the state
      const { id, bookingAddress, selectedDates, selectedTime } =
        action.payload;

      state.id = id || state.id; // Update id or retain existing
      state.bookingAddress = bookingAddress || state.bookingAddress; // Update bookingAddress
      state.date = selectedDates || state.date; // Update date
      state.time = selectedTime || state.time; // Update time

      // Optionally, you might want to save the updated state back to localStorage
      localStorage.setItem("selectedEquip", JSON.stringify(state));
    },
  },
});

export const { myEquipment } = bookEquipSlice.actions;
export default bookEquipSlice.reducer;
