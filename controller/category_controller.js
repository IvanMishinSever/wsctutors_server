//const db = require('../db');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
<<<<<<< HEAD
   // password: "Book2021",
   password: "root1987",
    host: "localhost",
    port: 5432,
    database: "wscad"
=======
    password: "Book2021",
    host: "localhost",
    port: 5432,
    database: "quizStore"
>>>>>>> origin/newcomp_server
}, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Success baby!');
    }
});


class Category_controllers {
   
    async getCategory(req,res) {
        try{
<<<<<<< HEAD
        console.log('async getCategory works');
=======
        console.log('async getCategory work');
>>>>>>> origin/newcomp_server
        const users = await pool.query(`
        SELECT main_id AS id
        ,main_name AS label 
        FROM main_categories;
        `);
        res.json(users.rows);
        } catch (e) {
            console.log(e, "ERROR--")
        }
    }
  }

module.exports = new Category_controllers();
