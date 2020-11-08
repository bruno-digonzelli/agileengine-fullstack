const express = require('express');
const balanceController = require('../controllers/balanceController');

const router = express.Router();

router.get('/',
    balanceController.getBalance
);

module.exports = router;