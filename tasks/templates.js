import gulp from 'gulp';
import twig from 'gulp-twig';
import fs from 'fs';
import dir from './directories';

const index = JSON.parse(fs.readFileSync(__dirname + '/../data/index.json', 'utf8'));

gulp.task('templates', () =>
  gulp.src(dir.src + '/views/page/index.twig')
    .pipe(twig(index))
    .pipe(gulp.dest(dir.dest))
);
