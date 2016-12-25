import gulp from 'gulp';
import twig from 'gulp-twig';
import dir from './directories';

const data = {
  data: {
    title: 'Gulp and Twig',
    benefits: [
      'Fast',
      'Flexible',
      'Secure'
    ]
  }
};

gulp.task('templates', () =>
  gulp.src(dir.src + '/views/index.twig')
    .pipe(twig(data))
    .pipe(gulp.dest(dir.dest))
);
