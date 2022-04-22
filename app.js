const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const productRoute = require('./routes/product');
const vendorRoute = require('./routes/vendor');
const saleRoute = require('./routes/sale');
const purchaseRoute = require('./routes/purchase');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));

app.use('/', productRoute);
app.use('/', vendorRoute);
app.use('/', saleRoute);
app.use('/', purchaseRoute);

app.listen(8081);
