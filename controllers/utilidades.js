var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('portafolio/utils', {layout: 'layouts/portafolio', title: 'Utilidades', description:"Portafolio"});
});

router.get('/numerical_systems', function(req, res, next) {
    res.render('portafolio/sistemas_numericos', {layout: false, title: 'Sistemas numericos'});
});

module.exports = router;
