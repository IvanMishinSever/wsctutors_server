//const Router = require('express');
//const router = new Router();
const express = require('express');


const categoryIdControllers = require('../controllers/quizes_controllers_main.js');



const categoryIdRouterUpdate = express.Router();

categoryIdRouterUpdate.put('/:id',categoryIdControllers.updateCategoryForQuiz);

module.exports = categoryIdRouterUpdate;
