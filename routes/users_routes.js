//const Router = require('express');
//const router = new Router();
const express = require('express');

const usersControllers = require('../controller/user_controllers_main.js');

//router.get = ('/',quizControllers.getQuizes);
const usersRouter = express.Router();

usersRouter.get('/',usersControllers.getUsers);

module.exports = usersRouter;