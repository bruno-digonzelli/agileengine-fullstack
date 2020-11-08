const {storage} = require("../storage");

/**
 * Fetch actual balance
 */
exports.getBalance = async(req, res) => {
    const { balance } = storage;
    try {
        return res.json(balance);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);

        return res.status(500).send('There was an error on server.');
    }
}