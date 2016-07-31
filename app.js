var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var server = app.listen(8000, function(){
  console.log('Server listening on port ' + server.address().port);
});
