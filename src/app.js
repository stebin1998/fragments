const express = require('express');
const pinoHttp = require('pino-http');
const logger = require('./logger');

const app = express();

// Use Pino HTTP middleware for logging HTTP requests and responses
app.use(pinoHttp({ logger }));

// Example route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

module.exports = app;
