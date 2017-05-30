var express = require('express');
var router = express.Router();
//var data    = require('../data').data();

router.get('/', function(req, res){
    res.redirect('/portafolio');
});

router.get('/user', function(req, res) {
    var user_id = req.param('carne');

    if(user_id==null){
        res.redirect('/portafolio');

    }else{
        switch (user_id) {

            case data.users[0].carne:
                res.render('portafolio/user', {layout: 'layouts/slide', title: 'index', description:"Portafolio", user: user_id, nombre: data.users[0].nombre, apellido: data.users[0].apellido});

                break;

            case data.users[1].carne:
                res.render('portafolio/user', {layout: 'layouts/slide', title: 'index', description:"Portafolio", user: user_id, nombre: data.users[1].nombre, apellido: data.users[1].apellido});

                break;

            case data.users[2].carne:
                res.render('portafolio/user', {layout: 'layouts/slide', title: 'index', description:"Portafolio", user: user_id, nombre: data.users[2].nombre, apellido: data.users[2].apellido});

                break;

            case data.users[3].carne:
                res.render('portafolio/user', {layout: 'layouts/slide', title: 'index', description:"Portafolio", user: user_id, nombre: data.users[3].nombre, apellido: data.users[3].apellido});
                break;

            case data.users[4].carne:
                res.render('portafolio/user', {layout: 'layouts/slide', title: 'index', description:"Portafolio", user: user_id, nombre: data.users[4].nombre, apellido: data.users[4].apellido});
                break;

            default:
                res.render('errors/404', {layout: 'layouts/errors', title: '404', description:"No encontrado"});
                break;
        }
    }
});

module.exports = router;
