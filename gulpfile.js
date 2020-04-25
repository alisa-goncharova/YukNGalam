var gulp = require('gulp');
// var minCSS = require("gulp-clean-css");
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

// конвертация sass в css
gulp.task('sass', function () {
  return gulp.src('./src/sass/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'));
});
// автоатическое сравнение sass
gulp.task('default', function () {
  gulp.watch('./src/sass/', gulp.series('sass'));
});


// использование плагина на перезагрузку страницы 
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
});





