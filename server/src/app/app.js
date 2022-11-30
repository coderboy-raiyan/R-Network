const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({ origin: ['http://localhost:5000'] }));
app.use(morgan('dev'));

module.exports = app;
