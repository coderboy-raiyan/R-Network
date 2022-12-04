const authRouter = require('express').Router();
const { register } = require('./auth.controller');

authRouter.post('/register', register);
// authRouter.post('/login');
// authRouter.post('/logout');
// authRouter.post('/refresh_token');

module.exports = authRouter;
