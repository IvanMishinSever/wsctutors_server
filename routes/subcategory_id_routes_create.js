//const Router = require('express');
//const router = new Router();
const express = require('express');


const subcategoryIdControllers = require('../controller/quizes_controllers_main.js');



const subcategoryIdRouterCreate = express.Router();

subcategoryIdRouterCreate.post('/',subcategoryIdControllers.createSubCategoryForQuiz);

module.exports = subcategoryIdRouterCreate;
