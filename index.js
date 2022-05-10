
const express = require('express');
const app = express();
//auth
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middlewares/error_middleware');
const authMiddleware = require('./middlewares/auth_middleware');

const registerRouter = require('./routes/register_router');

const loginRouter = require('./routes/login_router');
const logoutRouter = require('./routes/logout_router');
const activateRouter = require('./routes/activate_router');
const refreshRouter = require('./routes/refresh_router');
//const usersRouter = require('./routes/users_router');

//..
const quizRouter = require('./routes/quiz_routes');
const quizIdRouter = require('./routes/quiz_id_routes');
const quizIdRouterUpdate = require('./routes/quiz_id_routes_update');
const quizIdRouterCreate = require('./routes/quiz_id_routes_create')
const quizIdRouterDelete = require('./routes/quiz_id_routes_delete')

const usersRouter = require('./routes/users_routes');
const categoryRouter = require('./routes/category_routes');
const categoryIdRouterUpdate = require('./routes/category_id_routes_update');
const categoryIdRouterCreate = require('./routes/category_id_routes_create');
const categoryIdRouterDelete = require('./routes/category_id_routes_delete');

const subcategoryRouter = require('./routes/subcategory_routes');
const subcategoryIdRouter = require('./routes/subcategory_id_routes');
const subcategoryIdRouterUpdate = require('./routes/subcategory_id_routes_update');
const subcategoryIdRouterCreate = require('./routes/subcategory_id_routes_create');
const subcategoryIdRouterDelete = require('./routes/subcategory_id_routes_delete');

const questionRouter = require('./routes/question_routes');
const questionIdRouterUpdate = require('./routes/question_id_routes_update');
const questionIdRouterCreate = require('./routes/question_id_routes_create');
const questionIdRouterDelete = require('./routes/question_id_routes_delete');

const answerRouter = require('./routes/answer_routes');

const answerIdRouter = require('./routes/answer_id_routes');
const answerIdRouterUpdate = require('./routes/answer_id_routes_update');
const answerIdRouterCreate = require('./routes/answer_id_routes_create');
const answerIdRouterDelete = require('./routes/answer_id_routes_delete');



const answerIdForQuestionRouter = require('./routes/answerForQuestion_id_routes');
const questionIdRouter = require('./routes/question_id_routes');
/*
const answerIdControllers = require('./controller/quizes_controllers_main');
const answerIdRouterUpdate = express.Router();
answerIdRouterUpdate.put('/api/answerupdate/',answerIdControllers.updateAnswerForQuiz);
*/
const config = require('config');


const PORT = config.get('serverPort');

//auth
app.use(express.json());
app.use(cookieParser());
// FOR SAVING COOKIES!!!!!
const host = config.get('client-url')
const hostserver = config.get('api-url')

//..

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

//auth
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
  }));


//..



//QUIZES
app.use(express.json());
app.use('/api/quizes',quizRouter);
app.use('/api/quizes/',quizIdRouter);
app.use('/api/quizupdate/',quizIdRouterUpdate);
app.use('/api/quizes/',quizIdRouterCreate);
app.use('/api/quizes/',quizIdRouterDelete);

app.use('/api/category',categoryRouter);
app.use('/api/categoryupdate/',categoryIdRouterUpdate);
app.use('/api/category/',categoryIdRouterCreate);
app.use('/api/category/',categoryIdRouterDelete);

app.use('/api/subcategory',subcategoryRouter);
app.use('/api/subcategory/',subcategoryIdRouter);
app.use('/api/subcategoryupdate/',subcategoryIdRouterUpdate);
app.use('/api/subcategory/',subcategoryIdRouterCreate);
app.use('/api/subcategory/',subcategoryIdRouterDelete);

app.use('/api/question',questionRouter);
app.use('/api/answer',answerRouter);

app.use('/api/answerupdate/',answerIdRouterUpdate);
app.use('/api/answer/',answerIdRouterCreate);
app.use('/api/answer/',answerIdRouterDelete);


app.use('/api/answer/',answerIdRouter);
app.use('/api/answerforquestion/',answerIdForQuestionRouter);

app.use('/api/question',questionIdRouter);
app.use('/api/questionupdate',questionIdRouterUpdate);
app.use('/api/question',questionIdRouterCreate);
app.use('/api/question',questionIdRouterDelete);
//USERS
app.use('/api/users',usersRouter);


//check servernpm
/*
app.get('/',(req,res,next) => {
    res.send( 'server get work!');
});
*/

//auth
app.use("/api/auth", registerRouter);

app.use("/api/auth", loginRouter);
app.use("/api/auth", logoutRouter);
app.use("/api/auth", activateRouter);
app.use("/api/auth", refreshRouter);
app.use("/api/users",authMiddleware, usersRouter);

app.get('/set-cookie', (req, res) => {
  res.cookie('token', '12345ABCDE')
  res.send('Set Cookie')
})

app.get('/get-cookie', (req, res) => {
  console.log('Cookie: ', req.cookies)
  res.send('Get Cookie')
})
// middleware in the END!!!!!!

app.use(errorMiddleware);

//..




//START SERVER
const start = async() => {
    try {
        app.listen(PORT, () => {
            console.log(`LAUNCH SERVER! on port ${PORT}`);
        })
    } catch(e) {
        console.log(e);
    }
}
start();







