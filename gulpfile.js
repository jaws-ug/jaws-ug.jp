const gulp  = require('gulp');
const sass  = require('gulp-sass');
const child = require('child_process');
const gutil = require('gulp-util');

var cssFiles = 'assets/sass/**/*.?(s)css';

// sass
gulp.task('sass', () => {
  gulp.src(cssFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
});
 

// jekyll
gulp.task('jekyll', () => {
  const jekyll = child.spawn('bundle', ['exec', 'jekyll', 'serve',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});


// watch
gulp.task('watch', () => {
   gulp.watch(cssFiles, ['sass']);
 });

 gulp.task('default', ['sass', 'jekyll', 'watch']);