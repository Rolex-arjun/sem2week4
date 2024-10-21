const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./models');

const app = express();
app.use(bodyParser.json());

// Basic CRUD operations here

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
