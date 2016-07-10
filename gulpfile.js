var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('html', function(){
	gulp.src(['./*.html'])
	.pipe(gulp.dest('./dist'))
	.pipe(browserSync.stream());
});

// compile sass
gulp.task('sass', function(){
  gulp.src(['./style.scss'])
  .pipe(sass())
  .pipe(gulp.dest('./dist'))
  .pipe(browserSync.stream());
});

// task reload browser
gulp.task('browsersync', ['sass','html'], function(){
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  gulp.watch('./*.scss', ['sass']);
  gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['browsersync']);
