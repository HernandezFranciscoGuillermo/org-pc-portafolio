var express = require('express');
var router  = express.Router();
var data    = require('../data').data();

router.get('/', function(req, res, next) {
    //res.render('portafolio',{data, title:'portafolio'});
    // res.contentType('application/json');
    // res.send(JSON.stringify(data));

    res.render('portafolio/portafolio', {layout: 'layouts/portafolio', title: 'Portafolio', description:"Portafolio", data:data});
});

module.exports = router;
