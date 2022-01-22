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


class Category_controllers {
   
    async getCategory(req,res) {
        try{
        console.log('async getCategory work');
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
