const app = require('http').createServer(handler);
const io = require('socket.io')(app);
const fs = require('fs');

app.listen(8080);

function handler(req, res) {
  fs.readFile(__dirname + '/index.html', (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', (socket) => {
  // receive
  socket.on('chat', (data) => {
    console.log(data);
    // send
    io.sockets.emit('news', data);
  });
});
