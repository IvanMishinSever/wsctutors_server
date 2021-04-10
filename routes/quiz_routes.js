//const Router = require('express');
//const router = new Router();
const express = require('express');

const quizControllers = require('../controller/quiz_controller.js');

//router.get = ('/',quizControllers.getQuizes);
const usersRouter = express.Router();

usersRouter.get('/',quizControllers.getQuizes);

module.exports = usersRouter;