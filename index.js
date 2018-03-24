const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('It works! It\'s master!');
});

app.listen(3000, () => {
    console.log('Listening 3000...');
});