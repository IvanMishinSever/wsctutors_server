//const Router = require('express');
//const router = new Router();
const express = require('express');

const quizControllers = require('../controllers/quizes_controllers_main.js');

//router.get = ('/',quizControllers.getQuizes);

const quizRouter = express.Router();

quizRouter.get('/',quizControllers.getQuizes);

module.exports = quizRouter;
