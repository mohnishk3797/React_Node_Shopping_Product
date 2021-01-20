var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Product Name Is Required.'] },
  price: { type: Number, required: [true, 'Price Is Required.'] },
  media: { type: String, required: [true, 'Product Image Is Required.'] },
});

module.exports = productSchema;
