// src/app.js

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const passport = require('passport');
const { authenticate, strategy } = require('./auth');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(compression());
passport.use(strategy());
app.use(passport.initialize());

// Routes
app.use('/', require('./routes'));

module.exports = app;
