const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
  'mongodb://ruan:rf123456@ds123465.mlab.com:23465/goweek-ruan',
  {
    useNewUrlParser: true
  }
);
app.use(cors());
app.use((req, res, next) => {
  req.io = io;

  return next();
})

app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
