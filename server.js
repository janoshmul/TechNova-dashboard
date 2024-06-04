const { log } = require('console');
const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = 3000;

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A client has connected');
});



let y = 1000;
setInterval(() => {
    y += Math.round(100 + Math.random() * (-100 - 100));
    io.emit('data', JSON.stringify({
        value: y
    }))
}, 2000)


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

