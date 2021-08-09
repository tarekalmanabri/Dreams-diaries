const { UsersController } = require("./controllers/UsersController");

const createRoutes = (app) => {
  app.get("/", (req, res) => {
    res.send({ status: true });
  });
  app.get("/companies", UsersController.getCompany);

  app.get("/users", UsersController.getUsers);
  app.post("/users", UsersController.postUsers);
};

module.exports = { createRoutes };
