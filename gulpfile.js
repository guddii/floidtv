import gulp       from 'gulp';
import loadTasks  from 'require-dir';
import sequence   from 'run-sequence';

loadTasks('./tasks');

gulp.task('generate', [
  'assets',
  'scripts',
  'styles',
  'templates',
]);

gulp.task('generate-server', [
  'generate',
  'serve'
]);

gulp.task('build', (done) =>
  sequence('clean', 'generate', done)
);

gulp.task('default', [
  'build'
]);
