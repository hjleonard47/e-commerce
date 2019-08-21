const Router = require('express').Router();
const { signin, signup, getUserById } = require('../controllers/user');

Router.post("/signup", signup);

Router.post("/signin", signin);

Router.get("/user/:id", getUserById);

module.exports.userRoutes = Router;