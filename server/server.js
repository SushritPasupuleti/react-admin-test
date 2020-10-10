var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var port = process.env.PORT || 5000;

app.get('/', function(req, res) {
	res.send('Hello! The API is at http://localhost:' + port);
});

app.listen(port, () => {
    console.log(`API is at http://localhost: ${port}`)
});