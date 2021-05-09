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


class Users_controllers {
   
    async getUsers(req,res) {
        try{
        console.log('async getQ work');
        const users = await pool.query(`
        SELECT users.id, users.nickname, users.mail, users.password, users.city, occupation.occupation_kind, subscription.subscription_kind
        FROM users
        JOIN occupation
        ON users.id_occupation = occupation.id
        JOIN subscription
        ON users.id_subscription = subscription.id`);
        res.json(users.rows);
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

module.exports = new Users_controllers();
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