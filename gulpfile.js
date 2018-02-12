const gulp   = require('gulp');
const watch  = require('gulp-watch');

gulp.task('default', function() {
	console.log("YAYY!!!!! GULP TASK C R E A T E D !!!!!!")
});


gulp.task('html', function() {
	console.log("Imagine the HTML here!");

});


gulp.task('watch', function() {
	
	watch('./app/index.html', function() {
		gulp.start('html');
	});

});

