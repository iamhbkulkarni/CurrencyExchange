var express = require('express');
const Currency = require('../models/Currency');
var router = express.Router();

/* GET currencies. */
router.get('/', async function (req, res) {
  const currencyList = await Currency.find();
  return res.json(currencyList);
});

module.exports = router;
