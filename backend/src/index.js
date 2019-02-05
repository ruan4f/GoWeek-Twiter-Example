const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://ruan:rf123456@ds123465.mlab.com:23465/goweek-ruan');

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
