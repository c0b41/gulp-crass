var gulp = require('gulp'),
    crass = require('./index.js'),
    gutil = require('gulp-util');
gulp.task('default', function() {
  return gulp.src('./test/fixtures/*.css')
        .pipe(crass({pretty:false,sourceMap:true}).on('error',gutil.log))
        .pipe(gulp.dest('test/expected/'));;
});
