const router = require("express").Router();

const controller = require("../controllers/productsGet");
const { validateId } = require("../middlewares/global");

router.get("/", controller.getProducts);
router.get("/:id", validateId("products"), controller.getProductById);

module.exports = router;