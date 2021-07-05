//const Router = require('express');
//const router = new Router();
const express = require('express');


const answerIdControllers = require('../controller/quizes_controllers_main.js');



const answerIdRouterUpdate = express.Router();

answerIdRouterUpdate.put('/:id',answerIdControllers.updateAnswerForQuiz);

module.exports = answerIdRouterUpdate;
