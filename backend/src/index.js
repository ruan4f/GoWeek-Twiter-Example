const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb://ruan:rf123456@ds123465.mlab.com:23465/goweek-ruan',
  {
    useNewUrlParser: true
  }
);

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
