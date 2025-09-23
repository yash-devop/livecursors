import { createServer } from "node:http";
import { Server } from "socket.io";
import { app } from ".";
import { corsConfig } from "./config";
import { SocketEvents } from "./constants/events";

const server = createServer(app);
const io = new Server(server, {
  cors: corsConfig,
});

type Users = Record<
  string, // socketId as key
  {
    userId: string;
    x: number;
    y: number;
    socketId: string;
    config: {
      name: string;
      color: string;
    };
  }
>;

let users: Users = {};

io.on("connection", (socket) => {
  console.log("socket connected", socket.id);

  // Send current users to the newly connected client
  const currentUsers = Object.fromEntries(
    Object.entries(users).filter(([socketId, _]) => socketId !== socket.id)
  );
  socket.emit(SocketEvents.CURSOR.OTHERS_CURSOR, currentUsers); // imagine, 2 users are there in the lobby now new joins... so those exisgting users data is visible to the new user.

  socket.on(
    SocketEvents.CURSOR.MOVE,
    (data: {
      userId: string;
      x: number;
      y: number;
      config: {
        name: string;
        color: string;
      };
    }) => {
      console.log("Cursor move from", socket.id, ":", data);

      users[socket.id] = {
        ...data,
        socketId: socket.id,
      };

      console.log("LIVE COUNT", Object.keys(users).length);

      // Broadcast ONLY to other sockets, NOT to the sender
      socket.broadcast.emit(SocketEvents.CURSOR.OTHERS_CURSOR, users);
      io.emit(SocketEvents.META.COUNT, Object.keys(users).length);
    }
  );

  socket.on("disconnect", (reason) => {
    console.log("Socket disconnected", socket.id, reason);

    // Remove the disconnected user
    delete users[socket.id];

    console.log("Remaining users:", Object.keys(users));

    // Broadcast updated user list to everyone
    socket.broadcast.emit(SocketEvents.CURSOR.OTHERS_CURSOR, users);
    io.emit(SocketEvents.META.COUNT, Object.keys(users).length);
  });
});

server.listen(8000, () => {
  console.log("Socket Server Started on port 8000");
});
