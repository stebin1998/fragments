// src/logger.js

// Set the default log level to 'info', but allow overriding via the LOG_LEVEL environment variable
const options = { level: process.env.LOG_LEVEL || 'info' };

// If we're logging at the 'debug' level, make the logs easier to read
if (options.level === 'debug') {
  // Use pino-pretty for development-friendly log formatting
  options.transport = {
    target: 'pino-pretty',
    options: {
      colorize: true, // Adds color to the logs
    },
  };
}

// Create and export a Pino logger instance
module.exports = require('pino')(options);
