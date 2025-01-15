const stoppable = require('stoppable'); // For graceful shutdowns
const logger = require('./logger'); // Import the logger
const app = require('./app'); // Import the Express app

// Use port from environment variables or default to 8080
const port = process.env.PORT || 8080;

// Start the server
const server = stoppable(
  app.listen(port, () => {
    logger.info(`Server is running on http://localhost:${port}`);
  })
);

// Handle SIGINT and SIGTERM for graceful shutdown
process.on('SIGINT', () => {
  logger.info('SIGINT received. Shutting down gracefully.');
  server.stop(() => {
    logger.info('Server has shut down.');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  logger.info('SIGTERM received. Shutting down gracefully.');
  server.stop(() => {
    logger.info('Server has shut down.');
    process.exit(0);
  });
});

module.exports = server; // Export the server for testing or further use
