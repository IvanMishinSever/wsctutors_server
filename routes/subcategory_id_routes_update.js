//const Router = require('express');
//const router = new Router();
const express = require('express');


const subcategoryIdControllers = require('../controller/quizes_controllers_main.js');



const subcategoryIdRouterUpdate = express.Router();

subcategoryIdRouterUpdate.put('/:id',subcategoryIdControllers.updateSubCategoryForQuiz);

module.exports = subcategoryIdRouterUpdate;
