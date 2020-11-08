const transactionsRoute = require('./transactions');
const balanceRoute = require('./balance');
 
// Import routes
const routes = (app) => {
  app.use('/api/transactions', transactionsRoute);
  app.use('/api/balance', balanceRoute);
}

module.exports = routes;