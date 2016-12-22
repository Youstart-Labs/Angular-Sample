var gulp = require("gulp");
var eslint = require('gulp-eslint');

gulp.task('default', ["watch"]);


gulp.task('lint', function(){

    return gulp.src(['app/**/*.js','!app/lib/**'])
        .pipe(eslint({
            configFile:".eslintrc"
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});



gulp.task("watch",function(){
   gulp.watch(['app/**/*.js','!app/lib/**'], ['lint']);
});
