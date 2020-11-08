const TransactionSchema = {
    "type": {
        in: 'body',
        matches: {
        options: [/\b(?:credit|debit)\b/],
        errorMessage: "Invalid type. Use credit or debit."
        }
    }
}

module.exports = TransactionSchema;