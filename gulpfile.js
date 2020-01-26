const gulp = require('gulp');
const gulpLess = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');



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

// minify scss + sass only + concat on css
gulp.task('compile-sass', () => {
    gulp.src('./assets/style/css/*.+(scss|sass)')
    .pipe(sass().on('error', sass.logError))
    // bundle all css
    .pipe(concat('all.min.css'))

    .pipe(gulp.dest('./dist/style/css/sass'))
})

// add live reload

// gulp.task('rename', () => {
//     gulp.src('./dist/style/css/min/*.css')

//     // rename
//     .pipe(rename('./dist/style/css/min/all.min.css'))

//     .pipe(gulp.dest('./dist'))
// });


