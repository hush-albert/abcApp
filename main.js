const path = require('path');
require('update-electron-app')();
const { app, autoUpdater, BrowserWindow } = require('electron');

console.log(autoUpdater.getFeedURL);

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
