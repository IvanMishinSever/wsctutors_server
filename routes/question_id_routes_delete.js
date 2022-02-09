//const Router = require('express');
//const router = new Router();
const express = require('express');


const questionIdControllers = require('../controller/quizes_controllers_main.js');



const questionIdRouterDelete = express.Router();

questionIdRouterDelete.delete('/:id',questionIdControllers.deleteQuestionForQuiz);

module.exports = questionIdRouterDelete;
