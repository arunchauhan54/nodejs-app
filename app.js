var fs = require('fs');
var url = require('url');

function renderHTML(path, response) {
  fs.readFile(path, null, function(error, data) {
    if (error) {
      response.writeHead(404);
      response.write('File not found');
    } else {
      response.write(data)
    }
    response.end();
  });
}

module.exports = {
  handleRequest: function(request, response) {
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    var path = url.parse(request.url).pathname;
    console.log('path');
    console.log(path);
    switch (path) {
      case ('/'):
        renderHTML('./index.html', response);
        break
      case ('/home2'):
          renderHTML('./index2.html', response);

    }
  }

}
