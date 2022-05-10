//const Router = require('express');
//const router = new Router();
const express = require('express');


const answerIdControllers = require('../controllers/quizes_controllers_main.js');



const answerIdRouterDelete = express.Router();

answerIdRouterDelete.delete('/:id',answerIdControllers.deleteAnswerForQuiz);

module.exports = answerIdRouterDelete;
