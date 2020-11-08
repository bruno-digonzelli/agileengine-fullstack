const storage = {
    transactions: [],
    balance: 0
};

/**
 * Set balance
 * @param {number} amount
 * @param {'credit' | 'debit'} type
 * @param {number} balance
 * @returns {number}
 */
const setBalance = (amount, type, balance) => {
    let newBalance;

    switch(type) {
        case 'credit':
            newBalance = balance - amount;
            return newBalance;
        case 'debit':
            newBalance = balance + amount;
            return newBalance;
        default:
            return balance;
    }
};

module.exports = {
    transactionsStorage: storage.transactions,
    storage,
    setBalanceStorage: setBalance
}