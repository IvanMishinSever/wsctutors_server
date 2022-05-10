//const Router = require('express');
//const router = new Router();
const express = require('express');


const categoryIdControllers = require('../controllers/quizes_controllers_main.js');



const categoryIdRouterDelete = express.Router();

categoryIdRouterDelete.delete('/:id',categoryIdControllers.deleteCategoryForQuiz);

module.exports = categoryIdRouterDelete;
