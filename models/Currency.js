const mongoose = require('mongoose');

const currencySchema = mongoose.Schema({
  acronym: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
});

module.exports = Currency = mongoose.model('currency', currencySchema);
