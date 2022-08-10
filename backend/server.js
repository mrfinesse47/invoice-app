const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5001;

const { errorHandler } = require('./middleware/errorMiddleware');

const connectDB = require('./config/db');

//connect to db -- not connecting?? check IP on mongodb atlas or user credentials
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //to decode body - x-www-form-urlencoded
// able to recieve req.body.

app.get('/', (req, res) => {
  res.json({ message: 'hello world' });
});

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server Started on port:${port}`);
});
