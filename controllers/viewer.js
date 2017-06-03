var express = require('express');
var router  = express.Router();
var xssFilters = require('xss-filters');

router.get('/', function(req, res, next) {
  res.render('viewer/pdf', {layout: false, title: 'visor'});
});

router.get('/doc', function(req, res) {
  var file = req.query.file;
  var ftitle = xssFilters.inHTMLData(file);

  if(file==null){
    res.render('viewer/pdf',{title:"visor", file:"utec.pdf"});

  }else{
    if(file.length > 0){
      res.render('viewer/pdf',{title:ftitle, file:file});

    }else{
      res.render('viewer/pdf',{title:"visor", file:"utec.pdf"});

    }
  }
});
module.exports = router;
