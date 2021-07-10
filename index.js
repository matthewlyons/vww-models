const Customer = require('./models/Customer');
const Order = require('./models/Order');
module.exports = {
  ...Customer,
  ...Order
};
