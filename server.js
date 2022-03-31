const path = require('path');
const http = require('http');
const express = require('express');
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Run client socket
io.on("connection", socket => {
  console.log("New websocket connection");

  socket.emit("message", "Hello world");
  
  // Broadcast when user connects
  socket.broadcast.emit("message", "A user has joined the chat");

  socket.on("disconnect", () => {
    io.emit("message", "A user has left the chat");
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
