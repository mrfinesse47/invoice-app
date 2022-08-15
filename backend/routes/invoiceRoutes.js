const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

const { createInvoice } = require('../controllers/invoiceController');

router.post('/', protect, createInvoice);

module.exports = router;
