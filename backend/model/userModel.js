const mongoose = require('mongoose');
const userScheema = mongoose.Schema(
  {
    name: { type: String, required: [true, 'please add a name'] },
    email: {
      type: String,
      required: [true, 'please add a email'],
      unique: true,
    },
    password: { type: String, required: [true, 'please add a password'] },
    status: {
      type: String,
      enum: ['Pending', 'Active'],
      default: 'Pending',
    },
    confirmationCode: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userScheema);
