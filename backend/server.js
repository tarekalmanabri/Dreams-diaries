const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config({ path: path.resolve(__dirname, "../", ".env") });
const password = process.env.MONGO_DB;

const express = require("express");
const app = express();

mongoose.connect(
  `mongodb+srv://users:${password}@users.dauks.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

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
