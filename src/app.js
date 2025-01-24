const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const passport = require('passport');
const authenticate = require('./auth');
const logger = require('./logger');

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(require('pino-http')({ logger }));

passport.use(authenticate.strategy());
app.use(passport.initialize());

app.use('/', require('./routes'));

module.exports = app;

