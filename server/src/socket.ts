import { Server } from "socket.io";
import { createServer } from "node:http";
import { app } from ".";

const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("socket connected", socket.id);
});

server.listen(8000, () => {
  console.log("Socket Server Started");
});
