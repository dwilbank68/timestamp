var express = require('express');

var app = express();
app.set('view engine', 'ejs');

var routes = require('./routes/routes.js')(app);

var server = app.listen(3000, function(){
    console.log('Server at localhost:3000');
});

