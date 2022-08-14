const mongoose = require('mongoose');
const invoiceScheema = mongoose.Schema(
  {
    createdAt: Date,
    paymentDue: Date,
    description: { type: String, required: [true, 'please add a description'] },
    paymentTerms: {
      type: Number,
      required: [true, 'please specify the payment terms'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Invoice', invoiceScheema);
