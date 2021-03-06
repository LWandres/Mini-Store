
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/client")));
app.use(bodyParser.urlencoded({extended: true}));

//require DB and routing files
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function() {
  console.log('Mini-Store on Port 8000');
});
