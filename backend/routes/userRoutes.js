const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  registerUser,
  loginUser,
  getMe,
  activateUser,
} = require('../controllers/userController');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/confirm/:emailConfirmationCode', activateUser);
router.get('/me', protect, getMe);

module.exports = router;
