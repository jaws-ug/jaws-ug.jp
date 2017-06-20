const gulp  = require('gulp');
const child = require('child_process');
const gutil = require('gulp-util');

// jekyll
gulp.task('jekyll', () => {
  const jekyll = child.spawn('bundle', ['exec', 'jekyll', 'serve',
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

// test
gulp.task('test', () => {
  const htmlproofer = child.spawn('bundle', ['exec', 'htmlproofer', './_site',
    '--disable-external'
  ]);

  const htmlprooferLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('htmlproofer: ' + message));
  };

  htmlproofer.stdout.on('data', htmlprooferLogger);
  htmlproofer.stderr.on('data', htmlprooferLogger);
});

gulp.task('default', ['jekyll']);