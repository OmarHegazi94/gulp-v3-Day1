const gulp = require('gulp');
const gulpLess = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');

gulp.task('compile-less', () => {
    gulp.src('./assets/style/css/*.less')
        // compile less => css
        .pipe(gulpLess())
        // add autoprefixer
        .pipe(autoprefixer())
        // minify css 

        // bundle all css

        .pipe(gulp.dest('./dist/style/css'))
});

gulp.task('minify-css', () => {
    gulp.src('./dist/style/css/*.css')
    // minify css 
    .pipe(minify())

    .pipe(gulp.dest('./dist/style/css/min'))
});


