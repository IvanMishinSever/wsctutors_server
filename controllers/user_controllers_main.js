//const db = require('../db');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
<<<<<<< HEAD
    password: "Book2021",
=======
    password: "root1987",
>>>>>>> origin/newcomp_server
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

class User_controllers {

    async getUsers(req,res) {
        try{
<<<<<<< HEAD
        console.log('async getQ work');
=======
        console.log('async getQ users work');
>>>>>>> origin/newcomp_server
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

}





module.exports = new User_controllers();