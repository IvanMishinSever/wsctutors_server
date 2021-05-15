//const Router = require('express');
//const router = new Router();
const express = require('express');

const questionControllers = require('../controller/question_controller.js');

//router.get = ('/',quizControllers.getQuizes);

const questionRouter = express.Router();

questionRouter.get('/',questionControllers.getQuestion);

module.exports = questionRouter;
