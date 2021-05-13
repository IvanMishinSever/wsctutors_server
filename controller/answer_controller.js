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


class Answer_controllers {
   
    async getAnswer(req,res) {
        try{
        console.log('async getQ work');
        const answer = await pool.query(`
        SELECT answer_id AS id,
        answer_content AS text,
        answer_feedback AS feedback,
        answer_value AS value
        FROM answers_item`);
        res.json(answer.rows);
        } catch (e) {
            console.log(e, "ERROR--")
        }
    }

}

module.exports = new Answer_controllers();
