var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream'),

    jshint = require('gulp-jshint'),

/*----- Scripts ------*/
gulp.task('reloadjs', function() {
    return gulp.src(['public/js/**.js'])
        .pipe(reload({
            stream: true
        }));
});

gulp.task('jshint:react', function() {
    return gulp.src([
            'src/app/**.js',
            'src/app/*/**.js'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter());
});

gulp.task('react',function(){
    return browserify('./src/app/app.js')
        .transform(reactify)
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function() {
   gulp.watch(['src/app/**.js','src/app/*/**.js'],['jshint:react','react','reloadjs']);
});


gulp.task('default',['react','watch']);
