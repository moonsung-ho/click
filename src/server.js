import http from 'http';
import express from 'express';
import WebSocket from 'ws';

const app = express();

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (req, res) => res.render('index.html'));
app.get('/*', (req, res) => res.redirect('/'));
const handleListen = () => console.log('Listening on http://localhost:3000');
const server = http.createServer(app);

const wss = new WebSocket.Server({ server });
let score = 0
const sockets = [];

wss.on('connection', (socket) => {
  sockets.push(socket);
  socket.on('close', () => {
    console.log('disconnected');
  });
  socket.send(score)
  console.log('connected');
  socket.on('message', (message) => {
    score++
    sockets.forEach((aSocket) => aSocket.send(score));
  });
});

server.listen(process.env.PORT || 8080, handleListen);
