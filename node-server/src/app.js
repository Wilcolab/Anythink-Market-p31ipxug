const express = require('express');
const logger = require('./middleware/logger');
const routes = require('./routes/index');

const app = express();
const PORT = 8001;

// Middleware
app.use(logger);
app.use(express.json());
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});