const stoppable = require('stoppable');
const logger = require('./logger');
const app = require('./app'); // Import the Express app

const port = process.env.PORT || 8080;

// Start the server
const server = stoppable(
  app.listen(port, () => {
    logger.info(`Server is running on http://localhost:${port}`);
  })
);

module.exports = server;
