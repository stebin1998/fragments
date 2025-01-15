const stoppable = require('stoppable'); // For graceful shutdowns
const logger = require('./logger'); // Import the logger
const app = require('./app'); // Import the Express app

// Get the port from the environment, defaulting to 8080
const port = process.env.PORT || 8080;

// Start the server
const server = stoppable(
  app.listen(port, () => {
    // Log a message when the server starts
    logger.info(`Server started on port ${port}`);
  })
);

// Export the server for testing or other use
module.exports = server;
