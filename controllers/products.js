const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const products = Product.find({});
  res.status(200).json({ data: products });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: 'products testing route' });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
