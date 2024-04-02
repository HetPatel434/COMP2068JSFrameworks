var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Pet 1 page. */
router.get('/pet1', function(req, res, next) {
  res.render('pet1', { title: 'Pet 1' });
});

/* GET Pet 2 page. */
router.get('/pet2', function(req, res, next) {
  res.render('pet2', { title: 'Pet 2' });
});

/* GET Pet 3 page. */
router.get('/pet3', function(req, res, next) {
  res.render('pet3', { title: 'Pet 3' });
});

/* GET Pet 4 page. */
router.get('/pet4', function(req, res, next) {
  res.render('pet4', { title: 'Pet 4' });
});

module.exports = router;
