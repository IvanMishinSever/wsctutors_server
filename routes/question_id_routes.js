//const Router = require('express');
//const router = new Router();
const express = require('express');

const questionIdControllers = require('../controller/question_id_controller.js');

//router.get = ('/',quizControllers.getQuizes);

const questionIdRouter = express.Router();

questionIdRouter.get('/:id',questionIdControllers.getIdQuestion);

module.exports = questionIdRouter;
