var gulp = require("gulp"),
    config = require("./gulp-config.json"),
    del = require("del"),
    tslint = require("gulp-tslint"),
    debug = require("gulp-debug"),
    sourcemaps = require('gulp-sourcemaps'),
    tsc = require("gulp-typescript"),
    tsProject = tsc.createProject("tsconfig.json"),
    less = require('gulp-less'),
    path = require('path'),
    typedoc = require("gulp-typedoc"),
    uglify = require('gulp-uglify');

gulp.task("default", ["compile-ts", "less", "html", "lib", "styles"], function () {
    console.log("this is cool!!");
});

gulp.task('watch', function () {
    console.log("watching for ts changes!!");
    gulp.watch(config.allTypeScript, ['compile-ts']);
    console.log("watching for html changes!!");
    gulp.watch(['app/**/*.html', "app/index.html"], ['html']);
    console.log("watching for less changes!!");
    gulp.watch(['app/**/*.less', 'styles/app.less'], ['less', 'styles']);
});

gulp.task("tslint", function () {
    var removeTypings = [config.allTypeScript, "!" + config.allCustomTypings];

    gulp.src(removeTypings)
        //.pipe(debug())
        .pipe(tslint())
        .pipe(tslint.report("full"))
});

gulp.task("compile-ts", function () {
    var tsResult = gulp.src(config.allTypeScript)
        //.pipe(debug())
        .pipe(tsc(tsProject));

    return tsResult.js.pipe(gulp.dest(config.devDist));
});

gulp.task("compile-ts-sm", function () {
    // var tsResult =
    //     gulp.src(config.allTypeScript)
    //     .pipe(sourcemaps.init())
    //     .pipe(debug())
    //     .pipe(sourcemaps.write("."))
    //     .pipe(tsc(tsProject));

    // return tsResult.js.pipe(gulp.dest(config.devDist));
    
    var tsResult = tsProject
      .src()
      .pipe(sourcemaps.init())
      .pipe(tsc(tsProject)).js
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest(config.devDist));
});

gulp.task('compress', function() {
  return gulp.src(config.devDist + '/**/*.js')
    .pipe(debug())
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('less', function () {
    return gulp.src(['app/**/*.less', 'styles/app.less'])
        // .pipe(debug())
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest(config.devDist));
});

gulp.task('html', function () {
    return gulp.src(['app/**/*.html', "app/index.html"])
        // .pipe(debug())
        .pipe(gulp.dest(config.devDist));
});

gulp.task('lib', function () {
    // ["node_modules/systemjs/dist/system.js", "app/lib/wfa-myriad-pro-typekit.js"]
    return gulp.src(config.includeLibrary)
        // .pipe(debug())
        .pipe(gulp.dest(config.devDist + '/lib'));
});

gulp.task('styles', function () {
    return gulp.src(["styles/**/*", "!styles/**/*.less"])
        //.pipe(debug())
        .pipe(gulp.dest(config.devDist + '/styles'));
});

gulp.task("dev-build", function () {

});

gulp.task("prod-build", function () {

});