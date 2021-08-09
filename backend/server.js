const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../", ".env") });

const express = require("express");
const app = express();
const cors = require("cors");
const { createRoutes } = require("./routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

createRoutes(app);

const port = 3080;

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
