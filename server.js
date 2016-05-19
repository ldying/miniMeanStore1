// Pretty standard server.js file
var express = require('express');
var path = require('path');
var moment = require('moment');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());

require('./server/config/db.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
  console.log('Mini MEAN STORE on: 8000');
});