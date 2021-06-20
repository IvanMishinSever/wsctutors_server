//const Router = require('express');
//const router = new Router();
const express = require('express');
/*
const subcategoryControllers = require('../controller/subcategory_controller.js');

//router.get = ('/',quizControllers.getQuizes);
const subcategoryRouter = express.Router();

subcategoryRouter.get('/',subcategoryControllers.getSubCategory);

module.exports = subcategoryRouter;
*/


const subcategoryControllers = require('../controller/quizes_controllers_main.js');

//router.get = ('/',quizControllers.getQuizes);
const subcategoryRouter = express.Router();

subcategoryRouter.get('/',subcategoryControllers.getSubCategory);

module.exports = subcategoryRouter;