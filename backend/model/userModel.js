const mongoose = require('mongoose');
const userScheema = mongoose.Schema(
  {
    name: { type: String, required: [true, 'please add a name'] },
    email: {
      type: String,
      required: [true, 'please add a email'],
    },
    password: { type: String, required: [true, 'please add a password'] },
    status: {
      type: String,
      enum: ['Pending', 'Active'],
      default: 'Pending',
    },
    emailConfirmationCode: {
      type: String,
      unique: true,
      required: [true, 'please add a email confirmation code'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userScheema);
