import express from "express";
import { getEquipments } from "../controllers/equipmentController";
import { createBooking } from "../controllers/bookingController";
import { protect, admin } from "../middleware/authMiddleware";
import {
  createEquipment,
  getEquipmentById,
} from "../controllers/equipmentController";
const router = express.Router();
router.route("/").get(getEquipments).post(protect, admin, createEquipment);
router.route("/:id").get(getEquipmentById);
