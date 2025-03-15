import express from "express";
const router = express.Router();
router.route("/").get(getProduct).post(protect, admin, createProduct);
router.route("/:id").get(getProductById);
