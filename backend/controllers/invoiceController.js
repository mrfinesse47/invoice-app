const asyncHandler = require('express-async-handler');
const Invoice = require('../model/invoiceModel');

const createInvoice = asyncHandler(async (req, res) => {
  console.log(req.user);
  let yourDate = new Date();
  yourDate.toISOString().split('T')[0];

  const invoice = await Invoice.create({
    user: req.user.id,
    createdAt: yourDate,
    paymentDue: yourDate,
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
  //   console.log(invoice);
  res.send('create invoice');
});

module.exports = { createInvoice };
