//const Router = require('express');
//const router = new Router();
const express = require('express');


const quizIdControllers = require('../controllers/quizes_controllers_main.js');



const quizIdRouterUpdate = express.Router();

quizIdRouterUpdate.put('/:id',quizIdControllers.updateQuizForQuiz);

module.exports = quizIdRouterUpdate;
