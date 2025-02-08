const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('send_message', () => {
  console.log('Hi, this is my first message');
});

const connectHandler = () => {
  console.log('Connection is created');
  eventEmitter.emit('send_message');
};

eventEmitter.on('connection', connectHandler);

eventEmitter.emit('connection');

console.log('Finish');
