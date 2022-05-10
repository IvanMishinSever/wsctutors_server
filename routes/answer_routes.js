//const Router = require('express');
//const router = new Router();
const express = require('express');

const answerControllers = require('../controllers/answer_controller.js');

//router.get = ('/',quizControllers.getQuizes);

const answerRouter = express.Router();

answerRouter.get('/',answerControllers.getAnswer);

module.exports = answerRouter;
