const getAllProductsStatic = async (req, res) => {
  throw new Error(' testing async package');
  res.status(200).json({ msg: 'static products testing route' });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: 'products testing route' });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
