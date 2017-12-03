var http = require('http');
var module1 = require('./mymodule');

function onRequest(request, response){
console.log('Got a call');
response.writeHead(200, {'Content-Type':'text/plain'});
response.write('Hello');
module1.myFunction();
response.end();

}


http.createServer(onRequest).listen(8000);
