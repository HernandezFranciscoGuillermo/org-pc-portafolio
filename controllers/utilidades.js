var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('portafolio/utils', {layout: 'layouts/portafolio', title: 'Utilidades', description:"Portafolio"});
});

router.get('/numerical_systems', function(req, res, next) {
    res.render('portafolio/sistemas_numericos', {layout: false, title: 'Sistemas numericos'});
});

router.get('/motherboard', function(req, res, next) {
    res.render('portafolio/motherboard', {layout: false, title: 'Partes de la mother board'});
});

router.get('/molex', function(req, res, next) {
    res.render('portafolio/molex', {layout: false, title: 'Diferentes molex'});
});

router.get('/parts', function(req, res, next) {
    res.render('portafolio/partes', {layout: false, title: 'Diferentes partes'});
});


module.exports = router;
