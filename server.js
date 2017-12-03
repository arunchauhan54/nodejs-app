var http = require('http');
var module1 = require('./app');
http.createServer(module1.handleRequest).listen(8000);
