const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const middlewares = [morgan('dev'), express.json(), cors({ origin: ['http://localhost:5000'] })];

module.exports = middlewares;
