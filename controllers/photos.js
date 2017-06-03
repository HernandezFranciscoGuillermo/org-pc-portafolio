var express = require('express');
var router  = express.Router();
var auth    = require('http-auth');

var basic = auth.basic({
  realm: 'SUPER SECRET STUFF'

}, function(username, password, callback) {
  callback(username == 'utec' && password == 'utec');
});

var authMiddleware = auth.connect(basic);


router.get('/', authMiddleware, function(req, res, next) {
  res.render('portafolio/photos', {layout: 'layouts/portafolio', title: 'index', description:"Portafolio"});
});

module.exports = router;
