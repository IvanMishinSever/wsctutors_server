//const Router = require('express');
//const router = new Router();
const express = require('express');

const categoryControllers = require('../controller/category_controller.js');

//router.get = ('/',quizControllers.getQuizes);
const categoryRouter = express.Router();

categoryRouter.get('/',categoryControllers.getCategory);

module.exports = categoryRouter;