var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var env          = require('node-env-file');
var minifyHTML   = require('express-minify-html');
var hbs          = require('express-hbs');
var exphbs       = require('express-handlebars');


/**
 * Controllers
 */

var index = require('./controllers/index');
var users = require('./controllers/users');
var docs  = require('./controllers/docs');
var portf = require('./controllers/portafolio');
var utils = require('./controllers/utilidades');
var slide = require('./controllers/slide');
var viewr = require('./controllers/viewer');

/**
 * App initialization
 */

var app = express();
    env(__dirname + '/.env');

/**
 *  Set-up views
 */

app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials'
}));

app.use(function (req, res, next) {
  require('./helpers/common/table').hbsHelper(hbs, req, res);
  require('./helpers/common/portafolio').hbsHelper(hbs, req, res);
  require('./helpers/common/switch').hbsHelper(hbs, req, res);
  require('./helpers/common/documentos').hbsHelper(hbs, req, res);
  next();
});

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'),{ maxAge: 31557600000 }) );

/**
 *
 */

app.use(function(req, res, next){
  //res.header('Cache-Control','nocache, no-store, max-age=0, must-revalidate');
  //res.header('X-Frame-Options','deny');
  //res.header('X-Frame-Options','ALLOW-FROM /');
  res.header('X-Content-Type-Options', 'nosniff');
  //res.header('Pragma','no-cache');
  res.header('x-powered-by','Github');
  res.header('Server','Mind Server');
  res.header('X-XSS-Protection','1; mode=block');
  next();
});

/**
 *
 */

app.use(function (req, res, next) {
  //intercepts OPTIONS method
  if ('OPTIONS' === req.method) {

    res.sendStatus(200);
  }
  else {

    next();
  }
});

/**
 *
 */

app.options(function (req, res, next) {
  res.dropBody();
  next();
});

/**
 *
 */

app.delete(function(req, res){
  res.dropBody();
  console.log('Calling to delete method');
});

/**
 *
 */

app.head(function(){
  console.log('Calling to head method');
});

/**
 * Minimify html
 */

app.use(minifyHTML({
  override:      true,
  exception_url: false,
  htmlMinifier: {
    removeComments:            true,
    collapseWhitespace:        true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes:     false,
    removeEmptyAttributes:     true,
    minifyJS:                  true
  }
}));

/**
 * Routes
 */

app.use('/', index);
app.use('/users', users);
app.use('/docs', docs);
app.use('/portafolio', portf);
app.use('/utilidades', utils);
app.use('/slide', slide);
app.use('/viewer', viewr);

/**
 * catch 404 and forward to errors handler
 */

app.use(function(req, res, next) {
  res.status(404);
  res.render('errors/404', {layout: 'layouts/errors', title: '404', description:"No encontrado"});
});

/**
 *
 */
app.use('production', function(){
  app.use(express.errorHandler());
});

/**
 * errors handler
 */

app.use(function(err, req, res, next) {
  // set locals, only providing errors in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === process.env.APP_ENV ? err : {};

  // render the errors page
  res.status(err.status || 500);
  //res.render('error');

  res.render('errors/505', {layout: 'layouts/errors', title: '404', description:"No encontrado"});
});

module.exports = app;