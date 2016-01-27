'user-strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 9000;

app.use(express.static(__dirname));

//parse body contents as a JSON objects
app.use(bodyParser.json());

app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

/*override with the X-HTTP-Method-Override
header in the request. simulate DELETE/PUT
*/
app.use(methodOverride('X-HTTP-Method-Override'));

app.get('*', function(req, res){
  res.sendFile(process.cwd() + '/index.html');
})

app.listen(port);

console.log('now listening on port: ' + port);

module.exports = app;