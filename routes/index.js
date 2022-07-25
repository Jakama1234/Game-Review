var express = require('express');
var morgan = require('morgan');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/post', function(req, res, next) {
  res.render('post', { title: 'Express' });
});
router.get('/review', function(req, res, next) {
  res.render('review', { title: 'Express' });
});
router.get('/sorry', function(req, res, next) {
  res.render('sorry', { title: 'Express' });
});
router.post('/submit', function(req, res, next) {
  let gameName = req.body.gamename;
  let review = req.body.review;
  res.render('review', { Name: gameName, Review: review});
});
module.exports = router;