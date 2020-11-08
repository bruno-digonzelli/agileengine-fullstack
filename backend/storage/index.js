const Transactions = [];
let Balance = 0;

/**
 * Set balance
 * @param {number} amount
 * @param {'credit' | 'debit'} type
 * @param {number} balance
 * @returns {number}
 */
const setBalance = (amount, type) => {
    switch(type) {
        case 'credit':
            Balance -= amount;
            break;
        case 'debit':
            Balance += amount;
            break;
        default:
            break;
    }
};

module.exports = {
    transactionsStorage: Transactions,
    balanceStorage: Balance,
    setBalanceStorage: setBalance
}