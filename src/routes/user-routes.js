const Router = require("express").Router;
const UserController = require("../controllers/user-controller");

const UserRouter = Router();

UserRouter.get("/", UserController.getAllUsers);

UserRouter.get("/:userId", UserController.getSingleUser);

UserRouter.post("/", UserController.createUser);

UserRouter.patch("/:userId", UserController.updateUser);

UserRouter.delete("/:userId", UserController.deleteUser);

module.exports = UserRouter;
