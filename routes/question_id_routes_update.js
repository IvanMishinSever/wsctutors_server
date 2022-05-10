//const Router = require('express');
//const router = new Router();
const express = require('express');


const questionIdControllers = require('../controllers/quizes_controllers_main.js');



const questionIdRouterUpdate = express.Router();

questionIdRouterUpdate.put('/:id',questionIdControllers.updateQuestionForQuiz);

module.exports = questionIdRouterUpdate;
