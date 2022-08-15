const mongoose = require('mongoose');

const addressScheema = mongoose.Schema(
  {
    street: { type: String, required: [true, 'pless enter a street'] },
    city: { type: String, required: [true, 'pless enter a city'] },
    postCode: {
      type: String,
      required: [true, 'please enter a postal/zip code'],
    },
    country: {
      type: String,
      required: [true, 'please enter a city'],
    },
  },
  { timestamps: false }
);

const itemsScheema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'please enter an item name'],
    },
    quantity: {
      type: Number,
      required: [true, 'please enter the quantity'],
    },
    price: {
      type: Number,
      required: [true, 'please enter the price'],
    },
    total: {
      type: Number,
      required: [true, 'please determine the total price'],
    },
  },
  { timestamps: false }
);

const invoiceScheema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    invoiceCreatedOn: {
      type: Date,
      required: [true, 'please add a invoice starting  date'],
    },
    paymentDue: {
      type: Date,
      required: [true, 'please add a payment due date'],
    },
    description: { type: String, required: [true, 'please add a description'] },
    paymentTerms: {
      type: Number,
      required: [true, 'please specify the payment terms'],
    },
    senderAddress: [{ type: addressScheema, required: true }],
    clientAddress: [{ type: addressScheema, required: true }],
    items: [itemsScheema],
    total: {
      type: Number,
      required: [true, 'please determine the grand total'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Invoice', invoiceScheema);
