//const Router = require('express');
//const router = new Router();
const express = require('express');


const subcategoryIdControllers = require('../controllers/quizes_controllers_main.js');



const subcategoryIdRouterDelete = express.Router();

subcategoryIdRouterDelete.delete('/:id',subcategoryIdControllers.deleteSubCategoryForQuiz);

module.exports = subcategoryIdRouterDelete;
