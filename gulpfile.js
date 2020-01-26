const gulp = require('gulp');
const gulpLess = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

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

    // bundle all css
    .pipe(concat('all.min.css'))

    .pipe(gulp.dest('./dist/style/css/min'))
});

// gulp.task('rename', () => {
//     gulp.src('./dist/style/css/min/*.css')

//     // rename
//     .pipe(rename('./dist/style/css/min/all.min.css'))

//     .pipe(gulp.dest('./dist'))
// });


