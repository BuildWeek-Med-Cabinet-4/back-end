module.exports = () => {
  let pairs = [];

  for (let i = 0, j = i + 1; i < 2351; i++, j++) {
    pairs.push({ product_id: j, flavor_id: j });
  }

  return pairs;
};
