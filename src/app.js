const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const logger = require('./logger'); // Ensure the logger is imported

const app = express(); // Create an Express app instance

// Use middleware for security, CORS, compression, and logging
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(require('pino-http')({ logger })); // Pino HTTP logging middleware

// Define a health check route
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Welcome to the Fragments API!',
  });
});

// Middleware for handling 404 errors
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Not Found',
  });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  logger.error(err); // Log the error
  res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

module.exports = app; // Export the app instance
