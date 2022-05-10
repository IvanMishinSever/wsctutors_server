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


class Question_controllers {
   
    async getQuestion(req,res) {
        try{
        console.log('async getQ work');
        const question = await pool.query(`
        SELECT question_id AS id,
        question_content AS question_text,
        quiz_id 
        FROM question_item`);
        res.json(question.rows);
        } catch (e) {
            console.log(e, "ERROR--")
        }
    }

}

module.exports = new Question_controllers();
