const Router = require("express").Router();

Router.route("/").post();
Router.route("/").get();

module.exports = Router;