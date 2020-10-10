require('dotenv').config();
const cors = require('cors');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const db = require('./models');

var port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send('Hello! The API is at http://localhost:' + port);
});

app.listen(port, () => {
    console.log(`API is at http://localhost: ${port}`)
});

//Setup
app.get('/setup', function(req, res) {

	// create a sample user
	var admin = new db.User({ 
		name: 'admin',
		password: 'password',
		admin: true 
	});
	admin.save(function(err) {
		if (err) throw err;

		console.log('User saved successfully');
		res.json({ success: true });
	});
});

app.get('/post', function (req, res) {
	db.Post.find({}, function (err, posts) {
        var postsMap = [];

        posts.forEach(function(post) {
            postsMap.push({id: post._id, title: post.title, content: post.content, slug: post.slug })
        });
        res.setHeader('Content-Range', posts.length);
        res.send(postsMap);
    });
});