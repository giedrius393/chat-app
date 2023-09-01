import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  socket.on("message", (message) => {
    socket.broadcast.emit("message-receive", message);
    socket.emit("message-receive", message);
  });
});

io.listen(3000);