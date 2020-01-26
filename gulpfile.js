const gulp = require('gulp');


    gulp.task('compile-less', () => {
        gulp.src('./assets/style/css/*.less')
        .pipe()
        .pipe(gulp.dest('./dist/style/css'))
    });