//const Router = require('express');
//const router = new Router();
const express = require('express');

const usersControllers = require('../controller/users_controller.js');

//router.get = ('/',quizControllers.getQuizes);
const usersRouter = express.Router();

usersRouter.get('/',usersControllers.getUsers);

module.exports = usersRouter;