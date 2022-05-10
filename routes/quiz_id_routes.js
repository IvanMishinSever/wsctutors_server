//const Router = require('express');
//const router = new Router();
const express = require('express');

const quizIdControllers = require('../controllers/quizes_controllers_main.js');

//router.get = ('/',quizControllers.getQuizes);

const quizIdRouter = express.Router();

quizIdRouter.get('/:id',quizIdControllers.getIdQuizes);

module.exports = quizIdRouter;
