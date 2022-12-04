const express = require('express');
const routes = require('./routes');
const middlewares = require('./middleware');
const errorHandlers = require('./error');

const app = express();

// Middlewares
app.use(middlewares);

// Routers
app.use(routes);

// Error Handler
app.use(errorHandlers);

module.exports = app;
