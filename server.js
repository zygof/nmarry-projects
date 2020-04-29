var express = require('express')
var serveStatic = require('serve-static')
var path = require('path')

var app = express()


app.use('/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)

console.log('server started on port ' + port)