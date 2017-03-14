//Purpose of this is to test streams and pipes
var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/source.txt');

var writable = fs.createWriteStream(__dirname + '/copy.txt');

// Will comment this to use pipe
// readable.on('data', function(data) {
//     writable.write(data);
// });

readable.pipe(writable);

//Using zlib to test stream pipe chaining

var zlib = require('zlib');

var gzip = zlib.createGzip();

var writableGz = fs.createWriteStream(__dirname + '/copy.txt.gz');

//Chaining readable, duplex and writable streams
readable.pipe(gzip).pipe(writableGz);

