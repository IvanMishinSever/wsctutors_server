//const Router = require('express');
//const router = new Router();
const express = require('express');


const quizIdControllers = require('../controller/quizes_controllers_main.js');



const quizIdRouterCreate = express.Router();

quizIdRouterCreate.post('/',quizIdControllers.createQuizForQuiz);

module.exports = quizIdRouterCreate;
