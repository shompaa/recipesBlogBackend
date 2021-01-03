require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');

const app = express();
app.use(cors());
dbConnection();


app.listen(process.env.PORT, () => {
  console.log(`Servidor online en puerto ${process.env.PORT}`);
});