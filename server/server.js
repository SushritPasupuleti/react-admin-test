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

var apiRoutes = express.Router(); 

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

app.get('/post/:id', function (req, res) {
    db.Post.findById({_id: req.params.id}, function (err, post) {
        res.send(post);
    });
});


app.get('/post/slug/:slug', function (req, res) {
    db.Post.find({slug: req.params.slug}, function (err, post) {
        res.send(post);
    });
});

app.post('/post', apiRoutes, function (req, res) {
    // create a sample post
    var post = new db.Post({
        title: req.body.content,
        content: req.body.title
    });

    post.save(function(err) {
        if (err) throw err;

        res.json({ success: true });
    });
});

app.put('/post/:id', apiRoutes, function (req, res) {
	if (typeof req.body.content === 'undefined' || typeof req.body.title === 'undefined') {
		res.send(400, {message: 'no content provided'})
	} else {
        db.Post.update({'_id': req.params.id}, {title: req.body.title, content: req.body.content}, function(err, post){
            if (err) return res.send(500, { error: err });
            return res.send({message: 'success update', post:post});
        });
	}
});