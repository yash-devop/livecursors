import { Server } from "socket.io";
import { createServer } from "node:http";
import { app } from ".";
import { SocketEvents } from "./constants/events";

const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("socket connected", socket.id);

  // # JOIN ROOM

  socket.on(SocketEvents.JOIN_ROOM.CONNECT, (data) => {
    const parsedData = JSON.parse(data);
    console.log("data", parsedData, typeof data);
    socket.join("common_room");
    io.to("common_room").emit(SocketEvents.JOIN_ROOM.SUCCESS, {
      message: `User ${parsedData?.name} joined.`,
    });
  });
});

server.listen(8000, () => {
  console.log("Socket Server Started");
});
