import mongoos from "mongoose";
import Equipment from "../modals/equipmentModal.js";
import { equipmentList } from "../data/Equipments.js";
const connectDB = async () => {
  try {
    const conn = await mongoos.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    // await Equipment.insertMany(equipmentList);
    // console.log("Data Imported Successfully");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
