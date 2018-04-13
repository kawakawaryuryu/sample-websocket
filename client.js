//import io from 'socket.io-client';
const io = require('socket.io-client');

const socket = io('http://localhost:8080');
socket.on('news', (data) => {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});
