const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// Create server
const app = express();

// Add CORS
app.use(cors());

// Allow express.json
app.use(express.json({ extended: true }));

// Call routes
routes(app);

const port = process.env.PORT || 5000;

app.listen(port, '0.0.0.0', () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on port ${port}`);
})