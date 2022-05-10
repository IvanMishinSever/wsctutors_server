//const Router = require('express');
//const router = new Router();
const express = require('express');


const categoryIdControllers = require('../controllers/quizes_controllers_main.js');



const categoryIdRouterCreate = express.Router();

categoryIdRouterCreate.post('/',categoryIdControllers.createCategoryForQuiz);

module.exports = categoryIdRouterCreate;
