require('dotenv').config();
const cors = require('cors');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const db = require('./models');

var port = process.env.PORT || 5000;

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Expose-Headers", "X-Total-Count, Content-Range");
    next();
});

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello! The API is at http://localhost:' + port);
});

app.listen(port, () => {
    console.log(`API is at http://localhost: ${port}`)
});

var apiRoutes = express.Router();

//Setup
app.get('/setup', function (req, res) {

    // create a sample user
    var admin = new db.User({
        name: 'admin',
        password: 'password',
        admin: true
    });
    admin.save(function (err) {
        if (err) throw err;

        console.log('User saved successfully');
        res.json({ success: true });
    });
});

app.get('/posts', function (req, res) {
    db.Post.find({}, function (err, posts) {
        var postsMap = [];

        posts.forEach(function (post) {
            postsMap.push({ id: post._id, title: post.title, content: post.content, slug: post.slug, instructions: post.instructions })
        });
        res.setHeader('Content-Range', posts.length);
        res.send(postsMap);
    });
});

app.get('/posts/:id', function (req, res) {
    db.Post.findById({ _id: req.params.id }, function (err, post) {
        res.send(post);
    });
});


app.get('/posts/slug/:slug', function (req, res) {
    db.Post.find({ slug: req.params.slug }, function (err, post) {
        res.send(post);
    });
});

app.post('/posts', apiRoutes, function (req, res) {
    // create a sample post
    var post = new db.Post({
        title: req.body.title,
        content: req.body.content,
        instructions: req.body.instructions
    });

    post.save(function (err) {
        if (err) throw err;

        res.json({ success: true });
    });
});

app.put('/posts/:id', apiRoutes, function (req, res) {
    if (typeof req.body.content === 'undefined' || typeof req.body.title === 'undefined') {
        res.send(400, { message: 'no content provided' })
    } else {
        db.Post.update({ '_id': req.params.id }, { title: req.body.title, content: req.body.content, instructions: req.body.instructions }, function (err, post) {
            if (err) return res.send(500, { error: err });
            return res.send({ message: 'success update', post: post });
        });
    }
});

app.delete('/posts/:id', apiRoutes, function (req, res) {

    db.Post.findByIdAndDelete({ '_id': req.params.id }).then(
        function () {
            res.send({ message: 'success delete' })
        }
    ).catch(function (err) {
        return res.send(500, { error: err });
    });
});

////USERS////
app.get('/users', function (req, res) {
    db.User.find({}, function (err, users) {
        var usersMap = [];

        users.forEach(function (user) {
            usersMap.push({ id: user._id, name: user.name, isAdmin: user.admin })
        });
        res.setHeader('Content-Range', users.length);
        res.send(usersMap);
    });
});

app.get('/users/:id', function (req, res) {
    db.User.findById({ _id: req.params.id }, function (err, user) {
        res.send(user);
    });
});


app.get('/users/slug/:slug', function (req, res) {
    db.User.find({ slug: req.params.slug }, function (err, user) {
        res.send(user);
    });
});

app.post('/users', apiRoutes, function (req, res) {
    // create a sample user
    var user = new db.User({
        title: req.body.title,
        content: req.body.content,
        instructions: req.body.instructions
    });

    user.save(function (err) {
        if (err) throw err;

        res.json({ success: true });
    });
});

app.put('/users/:id', apiRoutes, function (req, res) {
    if (typeof req.body.content === 'undefined' || typeof req.body.title === 'undefined') {
        res.send(400, { message: 'no content provided' })
    } else {
        db.User.update({ '_id': req.params.id }, { title: req.body.title, content: req.body.content, instructions: req.body.instructions }, function (err, user) {
            if (err) return res.send(500, { error: err });
            return res.send({ message: 'success update', user: user });
        });
    }
});

app.delete('/users/:id', apiRoutes, function (req, res) {

    db.User.findByIdAndDelete({ '_id': req.params.id }).then(
        function () {
            res.send({ message: 'success delete' })
        }
    ).catch(function (err) {
        return res.send(500, { error: err });
    });
});