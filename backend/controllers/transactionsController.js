/* eslint-disable no-console */
const { validationResult } = require("express-validator");
const { v4: uuidv4 } = require('uuid');
const { transactionsStorage, balanceStorage, setBalanceStorage } = require('../storage');

/**
 * Fetch transaction history
 */
exports.getTransactions = async(req, res) => {
    try {
        return res.json(transactionsStorage);
    } catch (error) {
        console.error(error);

        return res.status(500).send('There was an error on server.');
    }
}

/**
 * Commit new transaction to the account
 * @param {{body: {amount: number, type: 'credit' | 'debit'}}} req
 */
exports.postTransaction = async(req, res) => {
    const errors = validationResult(req);
    const {type, amount} = req.body;

    if(!errors.isEmpty()) {
        return res.status(400).send({errors: errors.array()});
    }

    console.log({balanceStorage, amount})

    if(type === 'credit') {
        if((balanceStorage - amount) < 0) {
            return res.status(400).send('Balance is negative.')
        }
    }

    try {
        const transaction = {
            id: uuidv4(),
            effectiveDate: new Date().toISOString(),
            ...req.body,
        }

        transactionsStorage.push(transaction);

        setBalanceStorage(amount, type, balanceStorage);

        return res.send(transaction);

    } catch (error) {
        console.error(error);

        return res.status(500).send('There was an error on server.');
    }
}

/**
 * Find transaction by ID
 * @param {{params: {id: string}, body: { transactionId: string}}} req
 */
exports.getTransaction = async(req, res) => {
    try {
        const {id} = req.params;
        let matchTransaction;

        // Using for loop due to performance reasons (faster than array methods)
        // eslint-disable-next-line no-plusplus
        for(let i = 0; i < transactionsStorage.length; i++) {
            if(transactionsStorage[i].id === id) {
                matchTransaction = transactionsStorage[i];
                break;
            }
        }

        if(!matchTransaction) {
            return res.status(404).send('Transaction not found.');
        }
 
        return res.json(matchTransaction);
    } catch (error) {
        console.error(error);

        return res.status(500).send('There was an error on server.');
    }
}