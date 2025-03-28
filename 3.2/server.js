const express = require('express');
const path = require('path');
const app = express();
const PORT = 1000;

// Serve static files from the 'Public' folder
app.use(express.static(path.join(__dirname, '../3.2/Public')));

// Default route: send index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../3.2/Public/index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});



