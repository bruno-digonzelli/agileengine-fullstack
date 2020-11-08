const express = require('express');
const { check, checkSchema } = require('express-validator');
const transactionController = require('../controllers/transactionsController');
const TransactionSchema = require('../schemas/Transactions');

const router = express.Router();

router.get('/',
    transactionController.getTransactions
)

router.post('/',
    [
        check('amount', 'Amount should be min 1').isInt({ min: 1 }),
        checkSchema(TransactionSchema)
    ],
    transactionController.postTransaction
) 

router.get('/:id',
    [
        check('transactionId', 'Transaction ID is required.').not().isEmpty()
    ],
    transactionController.getTransaction
)

module.exports = router;