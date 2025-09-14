import { createServer } from "node:http";
import { Server } from "socket.io";
import { app } from ".";
import { corsConfig } from "./config";
import { SocketEvents } from "./constants/events";

const server = createServer(app);
const io = new Server(server, {
  cors: corsConfig,
});

let users: Record<
  string,
  {
    userId: string;
    x: number;
    y: number;
    socketId: string;
  }
> = {};

io.on("connection", (socket) => {
  console.log("socket connected", socket.id);

  // # JOIN ROOM
  socket.on(
    SocketEvents.CURSOR.MOVE,
    (data: { userId: string; x: number; y: number; socketId: string }) => {
      const { userId } = data;
      users[userId] = { ...data, socketId: socket.id };
      const intoArray = Object.keys(users).map((key) => {
        return users[key];
      });
      socket.broadcast.emit(SocketEvents.CURSOR.OTHERS_CURSOR, intoArray);
    }
  );

  socket.on("disconnect", (reason) => {
    console.log("YES DISCONNECTED", reason);
    // socket.disconnect();
  });
});

server.listen(8000, () => {
  console.log("Socket Server Started");
});
