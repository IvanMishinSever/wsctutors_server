//const Router = require('express');
//const router = new Router();
const express = require('express');


const questionIdControllers = require('../controller/quizes_controllers_main.js');



const questionIdRouterCreate = express.Router();

questionIdRouterCreate.post('/',questionIdControllers.createQuestionForQuiz);

module.exports = questionIdRouterCreate;
