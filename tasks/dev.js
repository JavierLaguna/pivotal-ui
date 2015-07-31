import gulp from 'gulp';
const runSequence = require('run-sequence').use(gulp);

gulp.task('setup-watchers', (callback) => {
  process.env.WEBPACK_WATCH = true;
  gulp.watch(['src/pivotal-ui/components/**/*.scss'], ['monolith-hologram', 'monolith-build-css-from-cache']);
  gulp.watch(['src/styleguide/**/*.scss'], ['monolith-styleguide-css']);
  callback();
});

gulp.task('dev', (callback) => runSequence(
  'setup-watchers',
  'assets-serve',
  'monolith-serve',
  callback
));
