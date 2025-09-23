# io.on("connection", (socket)=>{})

here , when connection btwn client and server established , then we get that socket user.

# socket.on(<yourEvent>, (data:string)=>{})

here , we can add listeners on specific events and receive data but in string , so if obj is sent from client then you need to use json.parse.

# socket.join(<roomName>);

here , using join we can literally join any room ( if room is not present , then it will create a room);

# socket.emit(<eventName>, <msg>);

here we can send msges/data to specific event.

```ts
io.on("connection", (socket) => {
  socket.to("my_room").emit("CHAT", hello);

  NOTE: this will send msges to all the sockets except the sender.
  bcoz using socket.to , we only send msges to other.
});
```

# socket.broadcast.emit(<eventName>, msg)

This will send msg to all the users including the sender

```ts
io.on("connection", (socket) => {
  socket.broadcast.to("my_room").emit("CHAT", hello);

  NOTE: this will send msges to all the sockets except the sender.
  bcoz using socket.to , we only send msges to other.
});
```

# DIFFERENCES:

## 1. io.to(room)

Sends to all sockets in that room

✅ Includes the sender (if the sender is in the room)

```ts
io.to("room1").emit("msg", "Hello room1!");

👉 Everyone in room1, including the sender, gets "Hello room1!".
```

## 2. socket.to(room)

Sends to all sockets in that room EXCEPT the sender

```ts
socket.to("room1").emit("msg", "A new user joined!");

👉 Everyone else in room1 gets it, but not the sender.
```

## 3. socket.broadcast

Sends to all connected sockets except the sender

🌍 This is global, not room-specific (unless you chain it with .to(room)).

```ts
socket.broadcast.emit("msg", "Someone new joined!");

👉 Every connected socket gets it, except the sender.
```

You can also do :

```ts
socket.broadcast.to("room1").emit("msg", "User joined room1!");

👉 Everyone in room1 gets it, except the sender.
```

# Inshort , if you use socket. then you will not get the msg but others will... and if you use , io. then everyone including you also get the data

io.to(room) → everyone in room (✅ includes sender)

socket.to(room) → everyone in room (❌ excludes sender)

socket.broadcast.emit → everyone in the whole server (❌ excludes sender)

socket.broadcast.to(room).emit → everyone in room (❌ excludes sender)
