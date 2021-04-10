
const express = require('express');
const app = express();
const quizRouter = require('./routes/quiz_routes');
const config = require('config');


const PORT = config.get('serverPort');

//app.use(express.static('./public'));
//SOLVE PROBLEM FETCH FAILED
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE" // what matters here is that OPTIONS is present
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });
//get all users

const usersRouter = require('./quires/users.js');
app.use('/api/users', usersRouter);

app.use(express.json());
app.use('/api/quizes',quizRouter);
//check server
/*
app.get('/',(req,res,next) => {
    res.send( 'server get work!');
});
*/
//START SERVER
const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`LAUNCH SERVER! on port ${PORT}`);
        })
    } catch(e) {

    }
}
start();







