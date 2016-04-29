'use strict';
const electron = require('electron'); // Making sure the science is in place!

const app = electron.app; // Get ready to make a fake-o app

const BrowserWindow = electron.BrowserWindow; // Make the chromy-womy window

let mainWindow; // Magestic window record!

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600, icon: __dirname + '/ico/stackdesk.png' }); // Generate the window
  mainWindow.loadURL('file://' + __dirname + '/stackdesk.html'); // And load up the Index.html files

  // Open the DevTools. Only do this if you need to debug.
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() { // To do when window closes
    mainWindow = null; // Force the computer to forget the existance of the windows
  });
}

app.on('ready', createWindow); // Tell the rest of Electron its ok to make more windows

// Quit when all windows are closed.
app.on('window-all-closed', function () { // Commit suicide after all windows are closed
  if (process.platform !== 'darwin') { // darwin only icon killing
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) { // Remake a window after minimizing
    createWindow();
  }
});
