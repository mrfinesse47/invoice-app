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
  res.json({ message: 'root of server reached' });
});

app.use('/api/users', require('../backend/routes/userRoutes'));
app.use('/api/invoices', require('../backend/routes/invoiceRoutes'));

app.use(errorHandler); //must come after all of your routes, users etc.

//tests for invoice model

// const testInvoiceDb = async () => {
//   let yourDate = new Date();
//   yourDate.toISOString().split('T')[0];

//   const invoice = await Invoice.create({
//     createdAt: yourDate,
//     paymentDue: yourDate,
//     description: 'test',
//     paymentTerms: 1,
//   });
//   console.log(invoice);
//   return invoice;
// };

// const invoice = testInvoiceDb;

app.listen(port, () => {
  console.log(`Server Started on port:${port}`);
});
