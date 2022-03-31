const socket = io();

socket.on("message", (message) => {
  console.log("demo 1", message);
})

