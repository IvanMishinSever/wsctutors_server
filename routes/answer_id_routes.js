//const Router = require('express');
//const router = new Router();
const express = require('express');
/*
const answerIdControllers = require('../controller/answer_id_controller.js');

//router.get = ('/',quizControllers.getQuizes);

const answerIdRouter = express.Router();

answerIdRouter.get('/:id',answerIdControllers.getIdAnswer);

module.exports = answerIdRouter;
*/


const answerIdControllers = require('../controllers/quizes_controllers_main.js');

//router.get = ('/',quizControllers.getQuizes);

const answerIdRouter = express.Router();

answerIdRouter.get('/:id',answerIdControllers.getIdAnswerForQuiz);

module.exports = answerIdRouter;
