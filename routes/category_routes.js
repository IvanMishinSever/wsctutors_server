//const Router = require('express');
//const router = new Router();
const express = require('express');

const categoryControllers = require('../controllers/quizes_controllers_main.js');

//router.get = ('/',quizControllers.getQuizes);
const categoryRouter = express.Router();

categoryRouter.get('/',categoryControllers.getCategory);

module.exports = categoryRouter;