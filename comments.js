// Create web server
// CODE STARTS HERE
// Load modules
const express = require('express');

// Create router
const app = express();

// Hello world
app.get('/', (req, res) => {
    res.send('Hello world');
});

// Listen on port 3000
app.listen(3000, () => {
    console.log('Server started on port 3000');
});