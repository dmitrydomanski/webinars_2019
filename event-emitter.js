const { EventEmitter } = require("events");
const emitter = new EventEmitter();
const { createReadStream } = require('fs')

emitter.on("fire", () => fireEvent(3));
emitter.emit("fire");

function fireEvent(times) {
  for (var i = 1; i <= times; i++) {
    console.log("Fire!");
  }
}

const readStream = createReadStream('./someFile.txt');
readStream.on('open', function(){
    console.log('file opened');
})
