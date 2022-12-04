const http = require('http');
require('dotenv').config();
const colors = require('colors');
const connectDb = require('./config/db');
const app = require('./app/app');

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

connectDb();
colors.enable();

server.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
