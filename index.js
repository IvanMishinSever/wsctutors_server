
const express = require('express');
const app = express();
const config = require('config');


const PORT = config.get('serverPort');

app.use(express.static('./public'));

//START SERVER
const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`LAUNCH SERVER! on port ${PORT}`);
        })
    } catch(e) {

    }
}
start();







