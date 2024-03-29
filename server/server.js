let express    = require('express'),
    cors       = require('cors'),
    app        = express(),
    port       = process.env.PORT || 3000,
    mongoose   = require('mongoose'),
    Product    = require('./api/models/productModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/products', { useNewUrlParser: true });

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/productRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);


console.log('products API server started on: ' + port);