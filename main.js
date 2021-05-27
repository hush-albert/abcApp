const   path =                 require('path');
                               require('update-electron-app')();
const { app, BrowserWindow } = require('electron');

/* [autoUpdater] update request
autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
const dialogOpts = {
type   :  'info',
buttons: ['Restart', 'Later'],
title  :  'Application Update',
message:   process.platform === 'win32' ? releaseNotes : releaseName,
detail :  'A new version has been downloaded. Restart the application to apply the updates.' };
dialog.showMessageBox(dialogOpts).then((returnValue) => {
if (returnValue.response === 0) autoUpdater.quitAndInstall(); } ) } );
// [autoUpdater] error handling
autoUpdater.on('error', message => {
console.error('There was a problem updating the application');
console.error(message); } ); */

function createWindow() {
// __dirname points to the path of the currently executing script
const win = new BrowserWindow( { width: 800, height: 600,
webPreferences: { preload: path.join(__dirname, 'preload.js') } } );
      win.loadFile('index.html');
}
// load web page when app is ready
app.whenReady().then(() => { createWindow();
// open a window if none are open (macOS)
app.on('activate', function () {
if (BrowserWindow.getAllWindows().length === 0) createWindow(); } ); } );
// quit application
app.on('window-all-closed', function () { if (process.platform !== 'darwin') app.quit(); } );
