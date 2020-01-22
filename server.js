const express = require('express');
const db = require('./data/dbConfig.js');
const server = express();
const router = require('./router')

server.use(express.json());

server.use('/api', router)

module.exports = server;