const Customer = require('./models/Customer');
const Order = require('./models/Order');
const Error = require('./models/Error');
const LoginAttempt = require('./models/LoginAttempt');
const User = require('./models/User');
module.exports = {
  ...Customer,
  ...Order,
  ...Error,
  ...LoginAttempt,
  ...User
};
