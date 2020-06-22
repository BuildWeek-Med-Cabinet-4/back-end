const db = require("../dbConfig");

const getFlavors = product_id => {
  return db("products_flavors as p_f")
    .join("products as p", "p_f.product_id", "p.id")
    .join("flavors as f", "p_f.flavor_id", "f.id")
    .select("f.*")
    .where({ product_id });
};

const getEffects = product_id => {
  return db("products_flavors as p_f")
    .join("products as p", "p_f.product_id", "p.id")
    .join("effects as e", "p_f.flavor_id", "e.id")
    .select("e.*")
    .where({ product_id });
};

const getDispensary = dispensary_id => {
  return db("products as p")
    .join("dispensaries as d", "p.dispensary_id", "d.id")
    .select("d.*")
    .where({ dispensary_id });
};

const getReviews = product_id => {
  return db("ratings as r")
    .select("r.rate", "r.description", "r.created_at", "updated_at")
    .where({ product_id });
};

module.exports = { getDispensary, getFlavors, getEffects, getReviews };
