const express = require("express");
const swagger = require("swagger-ui-express");
const swaggerDocs = require("../swagger.json");

const app = express();
const productRoutes = require("./routes/products");

app.use(express.json());
app.use("/api-docs", swagger.serve, swagger.setup(swaggerDocs));

app.get("/terms", (req, res) => {
  return res.json({ message: "terms" });
});

app.use("/products", productRoutes);

app.listen(3000, () =>
  console.log(
    "Server is running on port 3000 , acesse a documentação em http://localhost:3000/api-docs/"
  )
);
