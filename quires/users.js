const express = require('express');
const usersRouter = express.Router();
const usersRouterId = express.Router();


const fs = require('fs');
const jsonParser = express.json();
//const getIndexById = require('./utils.js');


//get all users

usersRouter.get('/', (req, res, next) => {
    console.log('ок');
  
    let content = fs.readFileSync("./users_data.json", "utf8");
   if (content) {
       
       let monsters = JSON.parse(content);
       res.send(monsters);
     } else {
       res.status(404).send('Monster not found');
   }
});



//module.exports = usersRouter;
//module.exports = usersRouterId;