const express = require('express');
const routes = require('./routes');
const cors = require('cors');

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
    console.log(`Server is running on port ${port}`);
})