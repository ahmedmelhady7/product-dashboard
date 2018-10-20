build_query = function(req) {
  let query = {};
  if(req.query.search) {
    const regex = new RegExp([req.query.search].join(""), "i");
    query = {
      ...query,
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
    }
  }
  if(req.query.price) {
    let price = {};
    if(req.query.price.min) {
      price = {
        $gte: parseInt(req.query.price.min)
      }
    }
    if(req.query.price.max) {
      price = {
        ...price,
        $lte: parseInt(req.query.price.max)
      }
    }
    query = {
      ...query,
      price
    }
  }
  if(req.query.category) {
    query = {
      ...query,
      'category.id': req.query.category
    }
  }
  if(req.query.brand) {
    const regex = new RegExp([req.query.brand].join(""), "i");
    query = {
      ...query,
      brand: regex
    }
  }
  return query;
}

module.exports = build_query;