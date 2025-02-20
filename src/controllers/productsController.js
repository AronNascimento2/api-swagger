const { v4: uuidv4 } = require("uuid");

let products = [];

// Criar um produto
const createProduct = (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !description || price == null) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  const newProduct = { id: uuidv4(), name, description, price };
  products.push(newProduct);

  return res.status(201).json(newProduct);
};

const getAllProducts = (req, res) => {
  return res.json(products);
};

const findByName = (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.json(products);
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    return res.status(404).json({ message: "Nenhum produto encontrado" });
  }

  return res.json(filteredProducts);
};

module.exports = {
  createProduct,
  getAllProducts,
  findByName,
};
