const Router = require("express").Router();
const {CreateTask, GetAllTasks, GetTaskById, UpdateTaskById, DeleteTaskById} = require("../Controllers/TaskControllers");

Router.route("/").post(CreateTask);
Router.route("/").get(GetAllTasks);
Router.route("/:id").get(GetTaskById);
Router.route("/:id").put(UpdateTaskById);
Router.route("/:id").delete(DeleteTaskById);

module.exports = Router;