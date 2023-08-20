const express = require("express");
const app = express();
require("dotenv").config();
const cors = require('cors');

const port = process.env.SERVER_PORT || 3200;

app.use(express.json());

app.use(cors()); // Enable CORS for all routes

app.use("/api", require("./api/user/router"));

app.use("/api", require("./api/category/router"));
app.use("/api", require("./api/products/router"));
// app.use("/api", UserRouter);
//  app.use("/api", CategoryRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
