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


class Quiz_controllers {
   
    async getQuizes(req,res) {
        try{
        console.log('async getQ work');
        const quizes = await pool.query(`
        SELECT quiz_id AS id,
        quiz_name AS label,
        sub_id AS id_category
        FROM quizes`);
        res.json(quizes.rows);
        } catch (e) {
            console.log(e, "ERROR--")
        }
    }
    /*
     getQuizes(req,res) {
        console.log(pool);
        console.log(' getQ work');
        const quizes =  pool.query('SELECT * FROM quizes',(error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json(results)
          });
        res.json(quizes);
        
    }
*/


}

module.exports = new Quiz_controllers();
/*
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  */