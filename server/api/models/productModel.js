'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  "name": {
    type: String
  },
  "image": {
    type: String
  },
  "price": {
    type: Number
  },
  "category": {
    "id": {
      type: Number
    },
    "name": {
      type: String
    }
  },
  "brand": {
    type: String
  }
});

module.exports = mongoose.model('Products', ProductSchema);
