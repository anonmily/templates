To install npm dependencies:
````
npm install --save-dev browserify babelify reactify vinyl-source-stream
````

Bare necessity:
```javascript
var browserify = require('browserify'),
    babelify = require('babelify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream');
    
gulp.task('react',function(){
    return browserify('./src/app/app.js')
        .transform(reactify)
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public/js'));
});
```
