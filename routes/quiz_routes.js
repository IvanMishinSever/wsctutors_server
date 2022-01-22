//const Router = require('express');
//const router = new Router();
const express = require('express');

const quizControllers = require('../controller/quiz_controller.js');

//router.get = ('/',quizControllers.getQuizes);

const quizRouter = express.Router();

quizRouter.get('/',quizControllers.getQuizes);

module.exports = quizRouter;
