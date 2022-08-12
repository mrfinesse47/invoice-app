const express = require('express');
const router = express.Router();
// const { protect } = require('../middleware/authMiddleware');
const {
  registerUser,
  loginUser,
  activateUser,
} = require('../controllers/userController');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/confirm/:emailConfirmationCode', activateUser);

module.exports = router;
