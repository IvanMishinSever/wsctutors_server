//const Router = require('express');
//const router = new Router();
const express = require('express');

const accountControllers = require('../controllers/account_controllers_main.js');

const accountIdRouterUpdate = express.Router();

accountIdRouterUpdate.put('/:id',accountControllers.updateAccount);

module.exports = accountIdRouterUpdate;
/*
const quizIdControllers = require('../controllers/quizes_controllers_main.js');



const quizIdRouterUpdate = express.Router();

quizIdRouterUpdate.put('/:id',quizIdControllers.updateAccount);

module.exports = quizIdRouterUpdate;*/