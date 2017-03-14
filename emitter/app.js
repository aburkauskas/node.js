
//Comment my own module of emitter 
//var Emitter = require('./emitter');

//Load node.js emitter module
var Emitter = require('events');

var emtr = new Emitter();

emtr.on('greet', function() {
    console.log('Hello 1');
})

emtr.on('greet', function() {
   console.log('Hello 2'); 
});

emtr.emit('greet');