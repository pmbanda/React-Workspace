const {app, BrowserWindow} = require('electron')

function createWindow(){
	// create the browser window
	let win = new BrowserWindow({ width: 800, height: 600})

	// load index.html file to the app
	win.loadFile('index.html')
}

app.on('ready', createWindow)


