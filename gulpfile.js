var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');
var jasmine = require('gulp-jasmine');

// Location of all JS files that need to be linted
var jsFiles = ['*.js', 'src/*/*.js'];

// Location of all Jasmine spec files
var specFiles = ['test/*.js'];

// Gulp task to lint our JS files against JSCS and JSHint
// (aka Code Analysis)
gulp.task('style', function() {
    return gulp.src(jsFiles)
                .pipe(jshint())
                .pipe(jshint.reporter('jshint-stylish', {
                    verbose: true    
                }))
                .pipe(jscs());
});

// Gulp task to build the app
// (combo of code analysis and unit testing)
gulp.task('build', ['style'], function() {
    return gulp.src(specFiles)
                .pipe(jasmine());
});

// Gulp task to monitor the app server
// and restart it when changes in code are detected
gulp.task('serve', ['style'], function() {
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 5000
        },
        watch: jsFiles
    };
    return nodemon(options)
            .on('restart', function(ev) {
                console.log('Restarting...');
            });
});