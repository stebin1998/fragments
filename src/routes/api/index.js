const express = require('express');
const { authenticate } = require('../../auth');
const getFragments = require('./get');

const router = express.Router();

// Protect the /v1/fragments route with authentication middleware
router.get('/fragments', authenticate(), getFragments);

module.exports = router;
