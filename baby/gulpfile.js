var gulp = require('gulp');
var minify = require('gulp-minify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('default',['min','move','sass']);

gulp.task('min', function() {
  gulp.src('./assets/js/*.js')
    .pipe(minify({
      ext:{
        min:'.min.js'
      },
      exclude: ['tasks'],
      ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('js'))
});
gulp.task('move', function() {
  gulp.src('node_modules/js-sharing-buttons/dist/SocialMedia.min.js')
    .pipe(gulp.dest('js'))
});


gulp.task('sass', function () {
  return gulp.src(['./assets/sass/**/*.scss','../../../modules/custom/parallax_configurator/sass/*.scss'])
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
});


gulp.task('scripts-bundle', function() {
  return gulp.src(
    ['./assets/js/jquery.3.1.1.min.js',
      './assets/js/Menu.js',
      './assets/js/tether.min.js',
      './assets/js/bootstrap4.6.min.js',
      './assets/js/SocialMedia.min.js',
      './assets/js/LeftSideFilters.js',
      './assets/js/EventLibrary.js',
      './assets/js/gaTracker.js'
    ])
    .pipe(concat('bundle.min.js'))
    .pipe(gulp.dest('js'));
});
