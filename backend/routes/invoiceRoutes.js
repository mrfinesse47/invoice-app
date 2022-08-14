const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const Invoice = require('../model/invoiceModel');

router.post(
  '/',
  asyncHandler(async (req, res) => {
    let yourDate = new Date();
    yourDate.toISOString().split('T')[0];

    const invoice = await Invoice.create({
      createdAt: yourDate,
      paymentDue: yourDate,
      description: 'test',
      paymentTerms: 1,
    });
    console.log(invoice);
    res.send('create invoice');
  })
);

module.exports = router;
