const Product = require("../models/Products");

const createProduct = async (req, res) => {
  if (req.body) {
    const product = new Product(req.body);
    try {
      await product.save();
      res.status(200).json("product created successfully");
    } catch (error) {
      res.status(500).json("failed to create the product");
    }
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json("failed to get the products");
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json("failed to get the single product");
  }
};

const searchProduct = async (req, res) => {
    console.log(req.params.key)
  try {
   const result=await Product.aggregate(
    [
        {
          $search: {
            index: "ecommerce",
            text: {
              query: req.params.key,
              path: {
                wildcard: "*"
              }
            }
          }
        }
      ]
   )
   console.log(result)
   res.status(200).json(result)
  } catch (error) {
    res.status(500).json("failed to search and get the products");
  }
};

module.exports = {
  createProduct,
  getAllProduct,
  getProduct,
  searchProduct
};
