const { UsersController } = require("./controllers/UsersController");

const createRoutes = (app) => {
  app.get("/", (req, res) => {
    res.send({ status: true });
  });
  app.get("/companies", UsersController.getCompany);
  app.get("/login", UsersController.getUsers);
  app.post("/signup", UsersController.postUsers);
};

module.exports = { createRoutes };
