var mongoose = require('mongoose');
var productSchema = require('../schema/product.schema');
var mongoosePaginate = require('mongoose-paginate');
productSchema.plugin(mongoosePaginate);
var productModel = mongoose.model('products', productSchema);
module.exports = productModel;
