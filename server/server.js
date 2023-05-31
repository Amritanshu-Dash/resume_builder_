// server.js
const express = require('express');
const app = express();
const port = 5000;

// Serve static files from the build folder
app.use(express.static('build'));

// Define your API routes here, if needed
// Example:
// app.get('/api/data', (req, res) => {
//   // handle the request and send a response
// });

// Handle all remaining requests by serving the index.html
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
