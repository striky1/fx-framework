'use strict';

import * as gulp from 'gulp';
import * as autoprefixer from 'gulp-autoprefixer';
import * as sass from 'gulp-sass';
import * as sourcemaps from 'gulp-sourcemaps';
import * as yargs from 'yargs';

/**
 * *** Helpers ***
 */
function finished(cb: any) {
    console.log('\t\t  KEEP \n\r \t\t  CALM \n\r \t\t   and \n\r \t\t  HAPPY \n\r \t\t CODING \n\r \t\t   :)');

    cb();
}

/**
 * *** Variables ***
 */
const isProd = yargs.argv.production;

/**
 * *** Path ***
 */
const source = 'src/',
    dest = 'dist/';

const scss = {
    in: source + '*.scss',
    out: dest,
    watch: source + '**/*.scss',
    sassOpts: {
        outputStyle: 'compressed',
        precison: 10,
        errLogToConsole: true,
        // @ts-ignore
        includePaths: []
    }
};

/**
 * *** Tasks ***
 */
gulp.task('scss', () => {
    let stream = gulp.src(scss.in);

    if (!isProd) {
        stream = stream.pipe(sourcemaps.init());
    }

    stream = stream.pipe(sass(scss.sassOpts).on('error', sass.logError))
        .pipe(autoprefixer());

    if (!isProd) {
        stream = stream.pipe(sourcemaps.write('.'));
    }

    return stream.pipe(gulp.dest(scss.out));
});

gulp.task('default', gulp.series( 'scss', finished));

gulp.task('develop', gulp.series('default', () => {
    gulp.watch(scss.watch, gulp.series('scss'));
}, finished));
