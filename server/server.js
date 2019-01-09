const path = require('path');
const express = require('express');

const acceptLanguage = require('accept-language');
const cookieParser = require ('cookie-parser');

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, './public')));


module.exports = server
