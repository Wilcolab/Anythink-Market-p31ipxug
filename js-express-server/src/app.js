const express = require('express');
const app = express();
const port = 8001;

// Middleware can be added here

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});