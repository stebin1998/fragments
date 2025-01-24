require('dotenv').config();
const logger = require('./logger');

process.on('uncaughtException', (err) => {
  logger.fatal(err, 'Uncaught exception');
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  logger.fatal(reason, 'Unhandled rejection');
  process.exit(1);
});

const app = require('./app');
const port = parseInt(process.env.PORT || 8080, 10);

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});


