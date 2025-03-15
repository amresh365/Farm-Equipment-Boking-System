import asyncHandler from "../middleware/asyncHandler.js";
import { equipmentList } from "../data/Equipments.js";
// import Product from "../modals/productModal.js";
//@desc Fetch All Product
//@ route GET/api/products
//@ access Public
const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@desc Fetch Product By Id
//@ route GET/api/products/:Id
//@ access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product NotFound" });
  }
});

// const createProduct = asyncHandler(async (req, res) => {
//   const product = new Product({
//     name: "Sample Name",
//     price: 0,
//     user: req.user._id,
//     image: "/images/sample.jpg",
//     brand: "Sample Brand",
//     category: "Sample Category",
//     countInStock: 0,
//     numReviews: 0,
//     description: "Sample Description",
//   });
//   const createProduct = await product.save();
//   res.status(201).json(createProduct);
// });

export { getProduct, getProductById };
