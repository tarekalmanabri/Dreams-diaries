const { AuthController } = require("./controllers/AuthController");
const express = require("express");
const { DreamsController } = require("./controllers/DreamsController");
const { AuthMiddleware } = require("./middleware/auth");

const createRoutes = (app) => {
  app.get("/", (req, res) => {
    res.send({ status: true });
  });

  app.post("/signin", AuthController.logIn);
  app.post("/register", AuthController.register);

  const dreamsRouter = express.Router();
  const dreamController = new DreamsController();
  dreamsRouter.use(AuthMiddleware);
  dreamsRouter.get("/", (req, res) => dreamController.getDreams(req, res));
  dreamsRouter.post("/", (req, res) => dreamController.createDream(req, res));

  app.use("/dreams", dreamsRouter);
};

module.exports = { createRoutes };
