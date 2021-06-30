
const express = require('express');
const app = express();
const quizRouter = require('./routes/quiz_routes');
const quizIdRouter = require('./routes/quiz_id_routes')

const usersRouter = require('./routes/users_routes');
const categoryRouter = require('./routes/category_routes');

const subcategoryRouter = require('./routes/subcategory_routes');
const subcategoryIdRouter = require('./routes/subcategory_id_routes');

const questionRouter = require('./routes/question_routes');
const answerRouter = require('./routes/answer_routes');

const answerIdRouter = require('./routes/answer_id_routes');
const answerIdForQuestionRouter = require('./routes/answerForQuestion_id_routes');
const questionIdRouter = require('./routes/question_id_routes');

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
/*
const usersRouter = require('./quires/users.js');
app.use('/api/users', usersRouter);
*/
//QUIZES
app.use(express.json());
app.use('/api/quizes',quizRouter);
app.use('/api/quizes/',quizIdRouter);

app.use('/api/category',categoryRouter);

app.use('/api/subcategory',subcategoryRouter);
app.use('/api/subcategory/',subcategoryIdRouter);

app.use('/api/question',questionRouter);
app.use('/api/answer',answerRouter);

app.use('/api/answer/',answerIdRouter);
app.use('/api/answerforquestion/',answerIdForQuestionRouter);
app.use('/api/question',questionIdRouter);

//USERS
app.use('/api/users',usersRouter);


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







