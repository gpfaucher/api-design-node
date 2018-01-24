// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
var express = require('express')
var app = express()
var path = require('path')

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/data', (req, res) => {
	res.send(jsonData)
})

app.listen(3000, (e) => {
	e ? console.log(e) : console.log('Server is running on port 3000')	
})
var jsonData = {count: 12, message: 'hey'};
