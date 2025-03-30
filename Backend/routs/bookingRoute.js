import {
  createBooking,
  getBookings,
  getBookingById,
} from "../controllers/bookingController";
import express from "express";
const router = express.Router();
router.route("/").post(createBooking);
router.route("/").get(getBookings);
router.route("/:id").get(getBookingById);

export default router;
