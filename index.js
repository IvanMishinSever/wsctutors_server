
const express = require('express');
const app = express();
const config = require('config');


const PORT = config.get('serverPort');










app.listen(PORT, () => {
    console.log(`LAUNCH SERVER! on port ${PORT}`);
})
