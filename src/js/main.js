// to depend on a bower installed component:
// define(['bower_components/componentName/file'])

// define(["jquery"], function($) {

//   var ui;

//   require(['ui'], function(Ui) {
//     ui = new  Ui();
//     ui.on('SHOWFLASHBOX', function(e) {
//       $('.box').css({'background': 'green'});
//     });
//   });



//   require(['dev']);


//   require(['search'], function (Search) {
//     Search.init();
//   });
// });
var APP = require('./components/app');
var $ = require('jQuery');

var app = new APP();
app.init().test();