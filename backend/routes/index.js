const transactionsRoute = require('./transactions');
 
// Import routes
const routes = (app) => {
  app.use('/api/transactions', transactionsRoute);
}

module.exports = routes;