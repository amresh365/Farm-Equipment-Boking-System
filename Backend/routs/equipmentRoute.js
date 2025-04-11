import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  createEquipment,
  getEquipmentById,
  getEquipments,
} from "../controllers/equipmentController.js";

const router = express.Router();
router.route("/").get(getEquipments).post(protect, admin, createEquipment);
router.route("/:id").get(getEquipmentById);

export default router;
