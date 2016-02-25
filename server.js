var port = process.env.PORT || 3000;

var express = require('express');

var app = express();
app.set('view engine', 'ejs');

var routes = require('./routes/routes.js')(app);

var server = app.listen(port, function(){
    console.log('Server at localhost:' + port);
});

