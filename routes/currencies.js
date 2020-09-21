var express = require('express');
const Currency = require('../models/Currency');
var router = express.Router();

/**
 * Get currencies list
 */
router.get('/', async function (req, res) {
  try {
    const currencyList = await Currency.find();
    return res.json(currencyList);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: [{ msg: 'Failed to get currencies from database' }] });
  }
});

module.exports = router;
