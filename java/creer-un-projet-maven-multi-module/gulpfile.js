var gulp = require('gulp');
var run = require('gulp-run')
var bs = require('browser-sync').create(); // create a browser sync instance.

/**
 * Generate website from asciidoctor files
 */
function generateWebsite() {
    return run("npm run gen").exec();
}


//config browser-sync
gulp.task('browser-sync', cb => {
    generateWebsite()
    setTimeout(() => {
        bs.init({
            files: ["*.html"],
            server: {
                baseDir: "./",
            }
        });
        cb()
    }, 5000)

});

gulp.watch("./**/*.adoc").on('change', function () {
    generateWebsite()
})
