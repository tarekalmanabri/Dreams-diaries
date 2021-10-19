const { UserController } = require("../controllers/UserController");
const express = require("express");
const { AuthMiddleware } = require("../middleware/auth");

const getUsersRouter = () => {
  const usersRouter = express.Router();
  const userController = new UserController();
  usersRouter.use(AuthMiddleware);
  usersRouter.get("/", (req, res) => userController.getUser(req, res));

  return usersRouter;
};

module.exports = { getUsersRouter };
