//const Router = require('express');
//const router = new Router();
const express = require('express');

const subcategoryIdControllers = require('../controllers/quizes_controllers_main.js');

//router.get = ('/',quizControllers.getQuizes);

const subcategoryIdRouter = express.Router();

subcategoryIdRouter.get('/:id',subcategoryIdControllers.getIdSubCategory);

module.exports = subcategoryIdRouter;
