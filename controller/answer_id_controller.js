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


class AnswerIdControllers {
   
    async getIdAnswer(req,res) {
        try{
            let id = req.params.id;
            console.log(id);
        console.log('async getQ work');
        
        const answer = await pool.query(`
        SELECT answer_id AS id,
        answer_content AS text,
        answer_feedback AS feedback,
        answer_value AS value,
        question_id
        FROM answers_item
        WHERE quiz_id =  $1
        `,[id]);
        
        //const answer = await pool.query('SELECT * FROM answers_item');

        res.json(answer.rows);
        } catch (e) {
            console.log(e, "ERROR--")
        }
    }

}

module.exports = new AnswerIdControllers();
