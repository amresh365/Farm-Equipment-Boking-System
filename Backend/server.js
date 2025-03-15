import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import { equipmentList } from "./data/Equipments.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie parser middleware
app.use(cookieParser());

app.use(cors());

app.get("/api/equipments", (req, res) => {
  res.json(equipmentList);
});

app.get("/api/equipments/:id", (req, res) => {
  const equip = equipmentList.find(
    (element) => element.id.toString() === req.params.id
  );

  if (equip) {
    res.json(equip); // Re spond with the product if found
  } else {
    res.status(404).json({ message: "Product not found" }); // Handle case where product is not found
  }
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
