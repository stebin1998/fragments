const express = require('express');
const { version, author } = require('../../package.json');

const router = express.Router();

router.get('/', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache');
  res.status(200).json({
    status: 'ok',
    author,
    version,
  });
});

router.use('/v1', require('./api'));

module.exports = router;


