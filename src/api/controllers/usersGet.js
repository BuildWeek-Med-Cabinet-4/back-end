const User = require("../../db/models/users");

const TABLE_NAME = "users";

const getUsers = async (req, res) => {
  try {
    const users = await User.get(TABLE_NAME);
    res.status(200).json(users);
  } catch ({ message }) {
    res.status(500).json({
      message: "The users list can't be retrieved at this moment",
      reason: message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { user, params } = req;
    const products = await User.getProducts(params.id);
    const written_reviews = await User.getReviews(params.id);

    res.status(200).json({ ...user, products, written_reviews });
  } catch ({ message }) {
    res.status(500).json({
      message: "The user details can't be retrieved at this moment.",
      reason: message,
    });
  }
};

module.exports = { getUsers, getUserById };
