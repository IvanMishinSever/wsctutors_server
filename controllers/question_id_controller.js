//const db = require('../db');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "Book2021",
    host: "localhost",
    port: 5432,
    database: "quizStore"
}, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Success baby!');
    }
});


class QuestionIdControllers {
   
    async getIdQuestion(req,res) {
        try{
            let id = req.params.id;
            console.log(id);
        console.log('async getQ work');
        const question = await pool.query(`
        SELECT question_id AS id,
        question_content AS question_text,
        quiz_id 
        FROM question_item
        WHERE quiz_id =  $1
        `,[id]);
        res.json(question.rows);
        } catch (e) {
            console.log(e, "ERROR--")
        }
    }

}

module.exports = new QuestionIdControllers();
