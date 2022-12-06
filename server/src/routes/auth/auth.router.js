const authRouter = require('express').Router();
const { register, login, logout, refresh } = require('./auth.controller');

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/refresh_token', refresh);

module.exports = authRouter;
