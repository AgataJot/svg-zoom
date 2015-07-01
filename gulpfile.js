var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , babelify = require('babelify')
  , reactify = require('reactify')
  , concat = require('gulp-concat')
  , nib = require('nib')
  , stylus = require('gulp-stylus')
  // , bootstrap = require('bootstrap-styl')
  , jeet = require('jeet')
  , jquery = require('jquery')
  , jqueryMockjax = require('jquery-mockjax')
  , addsrc = require('gulp-add-src')
  // , concat = require('gulp-concat')
  // , uglify = require('gulp-uglify')



// var defaultPaths = {
//   stylus: [
//     resourcesPath + '/stylus/**/**/*.styl'
//   , resourcesPath + '/stylus/**/*.styl'
//   , resourcesPath + '/stylus/*.styl'
//   , adsPath + '/stylus/*.styl'
//   ]
// }
var stylusOptions = {
  // use: [nib()]
  use: [nib(), jeet()]
, import: ['nib']
, linenos: true
//set: ['compress']
}

gulp.task('stylus', function () {
  // Render development version
  stylusOptions.compress = false
  gulp.src(['src/stylus/main.styl'])
    .pipe(
      stylus(stylusOptions)
      .on('error', handleError)
    )
    .pipe(gulp.dest('dist/css'))

})

gulp.task('browserify', function() {
    gulp.src([
      // 'node_modules/snapsvg/dist/snap.svg.js',
      'node_modules/jquery.mockjax/dist/jquery.mockjax'
      ])
      .pipe(concat('lib.js'))
        .on('error', handleError)
      .pipe(gulp.dest('public/js'))
        .on('error', handleError);

    gulp.src(['src/js/main.js'])
      .pipe(browserify({
        transform: [babelify, reactify]
      }))
        .on('error', handleError)
      // .pipe(concat('main.js'))
        // .on('error', handleError)
      .pipe(gulp.dest('public/js'))
        .on('error', handleError)

})

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('public/stylesheets'))
    gulp.src('src/assets/**/*.*')
      .pipe(gulp.dest('dist/assets'))
})

gulp.task('js',['browserify'])
gulp.task('default',['browserify', 'copy', 'stylus'])

gulp.task('w', function() {
    gulp.watch('src/**/*.*', ['js'])
})


function handleError(err) {
  console.log(err.toString())
  this.emit('end')
}
