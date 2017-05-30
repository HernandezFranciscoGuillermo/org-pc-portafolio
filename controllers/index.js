var express = require('express');
var router = express.Router();
var data    = require('../data').data();

router.get('/', function(req, res, next) {
  res.render('portafolio/index', {layout: 'layouts/portafolio', title: 'index', description:"Portafolio", data:data});
});

module.exports = router;
