import 'babel-polyfill';

import gulp       from 'gulp';
import loadTasks  from 'require-dir';
import sequence   from 'run-sequence';

loadTasks('./infra/tasks');

gulp.task('generate', [
  'assets',
  'scripts',
  'styles'
]);

gulp.task('generate-server', (done) =>
  sequence('clean', 'generate', 'serve', done)
);

gulp.task('build', (done) =>
  sequence('clean', 'generate', done)
);

gulp.task('default', [
  'build'
]);
