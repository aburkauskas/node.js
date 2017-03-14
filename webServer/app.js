var http = require('http');
var fs = require('fs');
http.createServer(function(request, response){
    var callback = function(err, data) {
        if (err) {
            throw Error();
        }
        response.write(data);
        response.end();
    };
    fs.readFile(__dirname + '/info.txt', 'utf8', callback);
}).listen('7000', '127.0.0.1');

console.log('Server started');