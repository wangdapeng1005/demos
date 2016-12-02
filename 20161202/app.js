var log = require('../libs/log');
var express = require('express')

var app = express()

app.use('', express.static('public'))

var port = 3000;
app.listen(port, function() {
    log('serve started at port ' + port)
})