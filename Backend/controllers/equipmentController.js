import asyncHandler from "../middleware/asyncHandler.js";
import Equipment from "../modals/equipmentModal.js";

// import Product from "../modals/productModal.js";
//@desc Fetch All Product
//@ route GET/api/products
//@ access Public
const getEquipments = asyncHandler(async (req, res) => {
  const equipments = await Equipment.find({});
  res.json(equipments);
});

//@desc Fetch Product By Id
//@ route GET/api/products/:Id
//@ access Public
const getEquipmentById = asyncHandler(async (req, res) => {
  const equipment = await Equipment.findById(req.params.id);
  if (equipment) {
    res.json(equipment);
  } else {
    res.status(404).json({ message: "Product NotFound" });
  }
});

const createEquipment = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample Name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample Brand",
    category: "Sample Category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample Description",
  });
  const createProduct = await product.save();
  res.status(201).json(createProduct);
});

export { getEquipments, getEquipmentById, createEquipment };
