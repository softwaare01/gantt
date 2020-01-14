const socket = require('socket.io-client');
let client = socket.connect('http://51.15.137.122:18000', {reconnect: true}); // L'adresse IP vous sera communiqué dans un mail ultérieur

client.on('connect', () => {
  console.log('connected')

  client.emit('needHelp');
});
