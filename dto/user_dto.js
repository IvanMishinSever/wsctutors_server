const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "root1987",
    host: "localhost",
    port: 5432,
    database: "jwtproject"
}, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Success baby!');
    }
});


module.exports = class UserDto {
    useremail;
    id;
    isActivated;
    username;
    occupation;
    subscription;
    constructor(model) {
        this.useremail =model.useremail;
        this.id = model.id;  // must be change(like mongo db)
        this.isActivated =model.is_activated;
        this.username = model.username;
        this.occupation = model.id_occupation;
        this. subscription = model.id_subscription;
    }
}