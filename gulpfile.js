var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var prefix = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('app/style.scss')
  .pipe(sass())
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(cssnano())
  .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function(){
    return gulp.src(['node_modules/jquery/dist/jquery.min.js', 'app/js/plugins/*.js', 'app/js/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
  gulp.watch('app/*.scss', ['sass']);
  gulp.watch('app/js/*.js', ['js']);
});

gulp.task('default', ['sass', 'js', 'watch']);
