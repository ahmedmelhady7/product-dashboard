'use strict';

let mongoose = require('mongoose'),
    Product  = mongoose.model('Products'),
    build_query = require('../utils/buildQuery');

exports.list_all_products = function(req, res) {
  const query = build_query(req);
  console.log('query: ', query);
  Product.find(query, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.create_a_product = function(req, res) {
  let new_product = new Product(req.body);
  new_product.save(function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.read_a_product = function(req, res) {
  Product.findById(req.params.productId, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.update_a_product = function(req, res) {
  Product.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.delete_a_product = function(req, res) {
  Product.remove({
    _id: req.params.productId
  }, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product successfully deleted' });
  });
};

exports.get_product_by_category = function(req, res) {
  Product.find({
    'category.id': req.params.categoryId
  }, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
}

exports.get_product_by_brand = function(req, res) {
  const regex = new RegExp(["^", req.params.brandName, "$"].join(""), "i");
  Product.find({
    'brand': regex
  }, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
}

exports.get_product_by_query = function(req, res) {
  const regex = new RegExp([req.query.q].join(""), "i");
  Product.find({
    $or: [
      {
        'brand': regex,
      },
      {
        'name': regex,
      },
      {
        'category.name': regex
      },
    ]
  }, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
}

