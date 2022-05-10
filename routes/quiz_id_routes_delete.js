//const Router = require('express');
//const router = new Router();
const express = require('express');


const quizIdControllers = require('../controllers/quizes_controllers_main.js');



const quizIdRouterDelete = express.Router();

quizIdRouterDelete.delete('/:id',quizIdControllers.deleteQuizForQuiz);

module.exports = quizIdRouterDelete;
