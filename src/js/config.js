require.config({
  // make components more sensible
  // expose jquery 
  paths: {
    'components': '../bower_components',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'jquery': '../bower_components/jquery/dist/jquery'
    ,'timeago': './vendor/jquery.timeago'
  }
});

if (!window.requireTestMode) {

  require(['main'], function(){ });
}