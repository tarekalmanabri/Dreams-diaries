const { AuthController } = require("./controllers/AuthController");
const { CompanyController } = require("./controllers/CompanyController");

const createRoutes = (app) => {
  app.get("/", (req, res) => {
    res.send({ status: true });
  });
  app.get("/companies", CompanyController.getCompanies);
  app.post("/login", AuthController.logIn);
  app.post("/register", AuthController.register);
};

module.exports = { createRoutes };
