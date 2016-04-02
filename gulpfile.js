var gulp = require('gulp');
var winInstaller = require('win-installer');

gulp.task('create-windows-installer', function(done) {
  winInstaller({
    appDirectory: './build/win32',
    outputDirectory: './release',
    arch: 'ia32'
    iconURL: ''
  }).then(done).catch(done);
});
