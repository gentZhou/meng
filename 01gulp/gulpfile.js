const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const less = require('gulp-less');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');

const open = require('./open');

gulp.task('babel', () =>
    gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload())
);

gulp.task('browserify', function () {
    // Single entry point to browserify
    return gulp.src('dist/js/index.js')
        .pipe(rename("built.js"))
        .pipe(browserify({
            insertGlobals: true,
            //   debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload());
});

gulp.task('less', function () {
    return gulp.src('./src/less/*.less')
        .pipe(less({
            // paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('connect', function () {
    connect.server({
        port: 12138,
        root: ['./dist'],
        livereload: true,

    });
    open('http://localhost:12138');
    gulp.watch('./src/index.html', gulp.series('html'));
    gulp.watch('./src/less/*.less', gulp.series(['less']));
    gulp.watch('./src/js/*.js', gulp.series(['js-dev']));
})

gulp.task('uglify', function () {
    return gulp
        .src('./dist/js/built.js')
        .pipe(uglify())
        .pipe(rename('uglify.min.js'))
        .pipe(gulp.dest('./dist/built'))
})

gulp.task('cssmin', function () {
    return gulp
        .src('./dist/css/all.css')
        .pipe(cssmin())
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('./dist/built'))
})

gulp.task('htmlmin', function () {
    return gulp
        .src('./src/index.html')
        .pipe(
            htmlmin({
                collapseWhitespace: true, // 去除空格换行符
                removeComments: true, // 去除注释
            })
        )
        .pipe(gulp.dest('./dist/built'))
})


// 配置统一任务
// gulp.series([多个任务])  顺序执行：速度慢
// gulp.parallel([多个任务])  并行执行：速度快
gulp.task('js-dev', gulp.series(['babel', 'browserify']));
gulp.task('dev', gulp.parallel(['js-dev', 'less', 'html']));
// gulp.task('watch', gulp.series(['dev', 'connect']));
gulp.task('gulp',gulp.par)