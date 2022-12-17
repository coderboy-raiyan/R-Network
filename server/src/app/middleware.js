const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const middlewares = [
    cors({ origin: ['http://localhost:3000'], credentials: true }),
    morgan('dev'),
    express.json(),
    cookieParser(),
];

module.exports = middlewares;
