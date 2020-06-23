const Users = require("../../db/models/users");

// GET all details about a user
const getUserById = async ({ user }, res, next) => {
  try {
    const products = await Users.getProducts(user.id);
    const reviews = await Users.getReviews(user.id);
    const { id, firstName, lastName, email, created_at } = user;

    res
      .status(200)
      .json({ id, firstName, lastName, email, created_at, products, reviews });
  } catch (next) {
    next(error);
  }
};

module.exports = { getUserById };
