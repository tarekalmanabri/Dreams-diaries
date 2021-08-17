const path = require("path");
require("./config/database").connect();
const express = require("express");
const app = express();

const cors = require("cors");
const { createRoutes } = require("./routes");

app.use(express.json());

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
