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
    //quizSlice NEVER USE NOW
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
    //quizSlice
    async getIdAnswerForQuiz(req,res) {
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
    //adminSlice
    async updateAnswerForQuiz(req, res) {
        const {answer_id, answer_content, answer_value, answer_feedback} = req.body;
        
        try{
            console.log(req.body);
            console.log('async PUTQ work');
            
            const answer = await pool.query (`
            UPDATE answers_item
            SET  answer_content = $1,
            answer_value = $2, answer_feedback = $3
            WHERE answer_id = $4  RETURNING *                 
            `, [answer_content, answer_value, answer_feedback, answer_id]);
            res.json(answer.rows);
        } catch(e) {console.log(e, "ERROR--")}
    }
    //adminSlice
    async updateQuestionForQuiz(req, res) {
        const {question_id, question_content} = req.body;
        
        try{
            console.log(req.body);
            console.log('async PUTQuestion work');
            
            const question = await pool.query (`
            UPDATE question_item
            SET  question_content = $1
            WHERE question_id = $2  RETURNING *                 
            `, [question_content, question_id]);
            res.json(question.rows);
        } catch(e) {console.log(e, "ERROR--")}
    }
        //adminSlice
        async updateQuizForQuiz(req, res) {
            const {quiz_id, quiz_name, quiz_description} = req.body;
            
            try{
                console.log(req.body);
                console.log('async PUTQuiz work');
                
                const quiz = await pool.query (`
                UPDATE quizes
                SET  quiz_name = $1,
                quiz_description = $2
                WHERE quiz_id = $3  RETURNING *                 
                `, [quiz_name, quiz_description, quiz_id]);
                res.json(quiz.rows);
            } catch(e) {console.log(e, "ERROR--")}
        }
    //
    //adminSlice
    async updateSubCategoryForQuiz(req, res) {
        const {sub_id, sub_name} = req.body;
        
        try{
            console.log(req.body);
            console.log('async PUTSUB work');
            
            const subCategory = await pool.query (`
            UPDATE sub_categories
            SET  sub_name = $1
            WHERE sub_id = $2  RETURNING *                 
            `, [sub_name, sub_id]);
            res.json(subCategory.rows);
        } catch(e) {console.log(e, "ERROR--")}
    }
        //adminSlice
        async updateCategoryForQuiz(req, res) {
            const {main_id, main_name} = req.body;
            
            try{
                console.log(req.body);
                console.log('async PUTCAT work');
                
                const category = await pool.query (`
                UPDATE main_categories
                SET  main_name = $1
                WHERE main_id = $2  RETURNING *                 
                `, [main_name, main_id]);
                res.json(category.rows);
            } catch(e) {console.log(e, "ERROR--")}
        }
//
    async deleteAnswerForQuiz(req, res) {
        
    }
        //adminSlice
    async getIdAnswerForQuestion(req,res) {
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
            WHERE question_id =  $1
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
