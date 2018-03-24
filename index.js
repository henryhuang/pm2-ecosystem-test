const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('It works! It\'s dev!');
});

app.listen(4000, () => {
    console.log('Listening 4000...');
});