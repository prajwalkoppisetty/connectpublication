const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files from the current directory
app.use(express.static(__dirname));

// Serve the index.html file from the same directory as the script
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
