const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const middlewares = [
    morgan('dev'),
    express.json(),
    cors({ origin: ['http://localhost:5000'] }),
    cookieParser(),
];

module.exports = middlewares;
