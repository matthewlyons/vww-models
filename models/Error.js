const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Error Schema
const ErrorSchema = new Schema({
  service: {
    type: String,
    required: true
  },
  route: {
    type: String,
    required: true
  },
  data: {
    type: String
  },
  employee: {
    type: String,
    required: true
  },
  error: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Error = mongoose.model('error', ErrorSchema);
