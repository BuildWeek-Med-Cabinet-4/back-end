const { getAll } = require("../../db/models/global");
const Product = require("../../db/models/products");

const TABLE_NAME = "products";

const getProducts = async (req, res) => {
  try {
    const products = await getAll(TABLE_NAME);
    res.status(200).json(products);
  } catch ({ message }) {
    res.status(500).json({
      message: "The products list can't be retrieved at this moment",
      reason: message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { product, params } = req;
    const dispensary = await Product.getDispensary(product.dispensary_id);
    const reviews = await Product.getReviews(params.id);
    const flavors = await Product.getFlavors(params.id);
    const effects = await Product.getEffects(params.id);

    res.status(200).json({ ...product, dispensary, flavors, effects, reviews });
  } catch ([message]) {
    res.status(500).json({
      message: "The product details can't be retrieved at this moment",
      reason: message,
    });
  }
};

module.exports = { getProducts, getProductById };
