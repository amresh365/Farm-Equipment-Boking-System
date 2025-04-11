import Booking from "../modals/bookingModal.js";
import asyncHandler from "../middleware/asyncHandler.js";
//@desc Create Booking
//@route POST/api/bookings
//@access Private
const createBooking = asyncHandler(async (req, res) => {
  const { user, equipment, bookingDate } = req.body;
  const booking = new Booking({
    user,
    equipment,
    bookingDate,
    bookingAddress: req.body.bookingAddress,
    bookingTime: req.body.bookingTime,
  });
  const createdBooking = await booking.save();
  res.status(201).json(createdBooking);
});

//@desc Get all bookings
//@route GET/api/bookings
//@access Private/Admin
const getBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({});
  res.json(bookings);
});
//@desc Get booking by ID's
//@route GET/api/bookings/:id
//@access Private/Admin
const getBookingById = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (booking) {
    res.json(booking);
  } else {
    res.status(404);
    throw new Error("Booking not found");
  }
});

export { createBooking, getBookings, getBookingById };
