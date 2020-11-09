/* eslint-disable no-console */
const { validationResult } = require("express-validator");
const { v4: uuidv4 } = require('uuid');
const { storage, setBalanceStorage } = require('../storage');

/**
 * Fetch transaction history
 */
exports.getTransactions = async(req, res) => {
    try {
        const { transactions } = storage;

        return res.json(transactions);
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
    const { transactions } = storage;

    if(!errors.isEmpty()) {
        return res.status(400).send({errors: errors.array()});
    }

    if(type === 'credit') {
        if((storage.balance - amount) < 0) {
            return res.status(400).send('Balance is negative.')
        }
    }

    try {
        const transaction = {
            id: uuidv4(),
            effectiveDate: new Date().toISOString(),
            ...req.body,
        }

        // Push transaction to storage
        transactions.push(transaction);

        // Set balance
        storage.balance = setBalanceStorage(amount, type, storage.balance);

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
        const { transactions } = storage;
        let matchTransaction;

        // Using for loop due to performance reasons (faster than array methods)
        // eslint-disable-next-line no-plusplus
        for(let i = 0; i < transactions.length; i++) {
            if(transactions[i].id === id) {
                matchTransaction = transactions[i];
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