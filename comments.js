// Create web server
var http = require('http');
var fs = require('fs');

// Create web server
http.createServer(function(request, response) {
    // Read the file
    fs.readFile('comments.html', function(error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
}).listen(52273, function() {
    console.log('Server Running at http://