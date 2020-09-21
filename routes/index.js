var express = require('express');
var router = express.Router();

/**
 * Get info about API
 */
router.get('/', function (req, res) {
  res.json({
    name: process.env.npm_package_name,
    version: process.env.npm_package_version,
    description:
      'API for a simple app to display exchange rates for different currencies.',
  });
});

module.exports = router;
