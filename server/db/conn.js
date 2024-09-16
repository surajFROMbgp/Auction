const mongoose = require('mongoose');
require('dotenv').config();

const DB = process.env.DATABASE;

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connection successful`);
  })
  .catch((err) => {
    console.error(`Error connecting to database: ${err.message}`);
  });

const PORT = process.env.PORT || 5000;
