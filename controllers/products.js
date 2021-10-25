const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ featured: true });
  res.status(200).json({ data: products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: 'products testing route' });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
