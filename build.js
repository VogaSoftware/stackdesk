// ----------------------------------- //
//  Build.js is no longer used by      //
//  windows or darwin OSes - not anymo //
//  this script can be run.            //
//  to run it execute the below:       //
//  node build.js                      //
// ----------------------------------- //

// Demand installer be downloaded/used //
<<<<<<< HEAD
var electronInstaller = require('electron-windows-installer')
// Run a resultpromise to ensure build works properly
resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './StackDesk-win32-ia32',
    outputDirectory: './buildjs/output',
=======
var electronInstaller = require('electron-winstaller')
// Run a resultpromise to ensure build works properly
resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: '/ladel/stackdesk',
    outputDirectory: '/ladel/stackdesk/buildjs/output',
>>>>>>> 015170dce810a26ced015b6487a4c70a1f1c2e8e
    authors: 'Voga Software.',
    exe: 'stackdesk.exe'
  });
// Run a resultpromise return to report if the windwos build worked properly
resultPromise.then(() => console.log("Build completed!"), (e) => console.log(`No dice. This is what went wrong: ${e.message}`));
