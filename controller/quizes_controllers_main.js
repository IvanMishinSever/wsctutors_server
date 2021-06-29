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
    //quizSlice
    async getAnswer(req,res) {
        try{
        console.log('async getQ work');
        const answer = await pool.query(`
        SELECT answer_id AS id,
        answer_content AS text,
        answer_feedback AS feedback,
        answer_value AS value,
        question_id
        FROM answers_item`);
        res.json(answer.rows);
        } catch (e) {
            console.log(e, "ERROR--")
        }
    }
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
    // adminSlice
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
    //menuSideSlice
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
    //adminSlice
    async getIdSubCategory(req,res) {
        try{
            let id = req.params.id;
            console.log(id);
        console.log('async getQ work');
        
        const answer = await pool.query(`
        SELECT sub_id AS id,
        sub_name AS text
        FROM sub_categories
        WHERE main_id =  $1
        `,[id]);
        
      
        res.json(answer.rows);

        } catch (e) {
            console.log(e, "ERROR--")
        }
    }
    //adminSlice
    async getIdQuizes(req,res) {
        try{
            let id = req.params.id;
            console.log(id);
        console.log('async getQ work');
        
        const answer = await pool.query(`
        SELECT quiz_id AS id,
        quiz_name AS text
        FROM quizes
        WHERE sub_id =  $1
        `,[id]);
        
      
        res.json(answer.rows);

        } catch (e) {
            console.log(e, "ERROR--")
        }
    }
    //menuSideSlice
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
    //quizSlice   adminSlice
    async getIdQuestion(req,res) {
        try{
            let id = req.params.id;
            console.log(id);
        console.log('async getQ work');
        const question = await pool.query(`
        SELECT question_id AS id,
        question_content AS text,
        quiz_id 
        FROM question_item
        WHERE quiz_id =  $1
        `,[id]);
        res.json(question.rows);
        } catch (e) {
            console.log(e, "ERROR--")
        }
    }
    //menuSideSlice  adminSlice
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





module.exports = new Quiz_controllers();
