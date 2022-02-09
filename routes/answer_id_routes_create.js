//const Router = require('express');
//const router = new Router();
const express = require('express');


const answerIdControllers = require('../controller/quizes_controllers_main.js');



const answerIdRouterCreate = express.Router();

answerIdRouterCreate.post('/',answerIdControllers.createAnswerForQuiz);

module.exports = answerIdRouterCreate;
