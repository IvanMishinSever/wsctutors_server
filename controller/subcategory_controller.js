//const db = require('../db');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
<<<<<<< HEAD
    //password: "Book2021",
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


class SubCategory_controllers {
   
    async getSubCategory(req,res) {
        try{
        console.log('async getSubCategory work');
        const data = await pool.query(`
        SELECT sub_id AS id
        ,sub_name AS label,
        main_id AS id_category 
        FROM sub_categories;
        `);
        res.json(data.rows);
        } catch (e) {
            console.log(e, "ERROR--")
        }
    }
  }

module.exports = new SubCategory_controllers();
