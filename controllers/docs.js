var express = require('express');
var router  = express.Router();
var walk    = require('walk');
var files   = [];
var fs      = require('fs');
var mthfx   = require('../mathfx');
var walker  = walk.walk('./public/documentos/pdf', { followLinks: false });

function fname(file){
    var result = file.split('.'),
        name   = result[0];
    return name;
}

function ftype(file){
    var result = file.split("."),
        name   = result[1];
    return name;
}

function getFilesizeInBytes(filename) {
    const stats = fs.statSync(filename);
    const fileSizeInBytes = stats.size /(1024* 1024);
    return mthfx.Mathround10(fileSizeInBytes, -1)
}

function reader(callback){
    walker.on('file', function(root, stat, next) {
        if(ftype(stat.name) == "pdf"){
            files.push({file:stat.name, name:fname(stat.name), size:getFilesizeInBytes(root + '/' + stat.name)});
        }

        next();
    });

    walker.on('end', function() {
        var docs = {"docs": files};
        var jsonString = JSON.stringify(docs);
        callback(docs);
    });
}

reader(function(data){
    router.get('/', function(req, res, next) {
         //res.contentType('application/json');
         //res.send(JSON.stringify(data));
         res.render('portafolio/documentos', {layout: 'layouts/portafolio', title: 'Documentos', description:"Portafolio", data:data});
    });
});

module.exports = router;