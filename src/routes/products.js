const express = require("express");
const ensuredAuthenticated = require("../middlewares/ensuredAuthenticated");
const {
  createProduct,
  getAllProducts,
  findByName,
} = require("../controllers/productsController");

const router = express.Router();

router.post("/", createProduct);

router.get("/", ensuredAuthenticated, getAllProducts);

router.get("/findByName", ensuredAuthenticated, findByName);

module.exports = router;
