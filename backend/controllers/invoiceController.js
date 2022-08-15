const asyncHandler = require('express-async-handler');
const Invoice = require('../model/invoiceModel');

const createInvoice = asyncHandler(async (req, res) => {
  const invoice = await Invoice.create({
    user: req.user.id,
    invoiceCreatedOn: '2022-08-05',
    paymentDue: '2022-08-06',
    description: 'test',
    paymentTerms: 1,
    senderAddress: {
      street: '4511 Johnstone drive',
      city: 'Somewhere',
      postCode: 'V6H 3E5',
      country: 'Canada',
    },
    items: [
      {
        name: 'New Logo',
        quantity: 1,
        price: 1532.33,
        total: 1532.33,
      },
      {
        name: 'Brand Guidelines',
        quantity: 1,
        price: 2500.0,
        total: 2500.0,
      },
    ],

    total: 4455,
  });
  res.send('create invoice');
});

module.exports = { createInvoice };
