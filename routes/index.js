var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/Home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/About', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET about page. */
router.get('/Projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET about page. */
router.get('/Contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});


module.exports = router;
