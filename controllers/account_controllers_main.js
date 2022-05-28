//const db = require('../db');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",

    password: "root1987",

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

class Account_controllers {

    async updateAccount(req, res) {
        const {id, username, id_occupation, usercountry} = req.body;
        console.log("startACCOUNT");
        try{
            console.log(req.body);
            console.log('async PUT_Account work');
            
            const account = await pool.query (`
            UPDATE users
            SET  username=$1,  id_occupation=$2,  usercountry=$3
            WHERE id = $4  RETURNING username, usercountry, id_occupation               
            `, [username, id_occupation, usercountry, id ]);
            res.json(account.rows);
           // res.json("update good");
        } catch(e) {console.log(e, "ERROR--")}
    }

}





module.exports = new Account_controllers();
