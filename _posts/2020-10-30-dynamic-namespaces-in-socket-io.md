---
title: Dynamic Namespaces in Socket.io
date: 2020-10-30 18:12:27 -0500
category: posted
tags:
  - devto
  - webrtc
  - socket-io
---

I’m teaching [socket.io](https://socket.io/) as a convenient WebRTC signaling channel in [my WebRTC class](https://courses.stolley.co/rtc/) this semester. As part of prepping that, I finally had to sit down and figure out dynamic namespaces in socket.io. There is some really tricky business to namespaces, dynamic or otherwise, particularly when it comes to listening for messages and events server-side sent from connected clients on the namespace.

**In short, namespaced sockets work differently on the client from how they do on the server.**

On the client, we simply create a namespaced socket connection (`ns`, here with a Google Meet–like namespace of `/jkl-mnop-qrs`) and both listen and emit events on it directly:

```javascript
// Client-side code (site.js)

var ns = io('/jkl-mnop-qrs'); // ordinarily set dynamically in JavaScript, somehow

ns.on('message', function(data) {
  console.log('Message received: ' + data);
});

document.querySelector('body').addEventListener('click', function(e) {
  console.log('Body was clicked');
  // the `send()` method is essentially shorthand for `emit('message', data)`;
  // that is, the `send()` method emits the `message` event for us:
  ns.send('Someone clicked the body element');
});
```

In that example, the listener `ns.on(...)` handles incoming messages and sends a pre-determined message to the socket server when someone clicks anywhere in the `<body>` element. Both use the `ns` object created from calling the `io()` constructor.

On the server, though, it’s a completely different, more complicated story.

```javascript
// Server-side code (app.js)

const namespaces = io.of(/^\/[a-z]{3}-[a-z]{4}-[a-z]{3}$/);

namespaces.on('connection', function(socket) {
  const namespace = socket.nsp;

  // You can emit messages directly on the `namespace` object...
  namespace.emit('message', `Successfully connected on namespace: ${namespace.name}`);

  // ...BUT--BUT, BUT, BUT--you must listen for messages coming from the clients
  // on the socket (`socket`) object, NOT the namespace:
  socket.on('message', function(data) {
    console.log('A message was received from a client: ', data);
    // AND if you want to do a broadcast emit -- which sends the message to
    // all the connected clients *except* for the sender -- you MUST use the
    // socket object (`socket`), as the `namespace` does not understand the
    // `broadcast` method:
    socket.broadcast.emit('message', data);
  });
});
```

To summarize the content of the comments: you listen for connections on the namespaces that match the pattern in `socket.of(...)`. You can emit messages on the `namespace` returned by `namespaces.on(...)`, but you **cannot** listen for incoming messages or any other events on `namespace`. Instead, you listen on the socket object (`socket`) created on the connection event.

Additionally, if you want to broadcast a message (which sends the message to all connected clients except the sending client), you must use `socket.broadcast.emit`.

So a simplified version of the code above looks like this:

```javascript
// Server-side code (app.js)

const namespaces = io.of(/^\/[a-z]{3}-[a-z]{4}-[a-z]{3}$/);

namespaces.on('connection', function(socket) {
  const namespace = socket.nsp;

  socket.emit('message', `Successfully connected on namespace: ${namespace.name}`);

  socket.on('message', function(data) {
    console.log('A message was received from a client: ', data);
    socket.broadcast.emit('message', data);
  });
});
```

Now the `namespace` variable is only being used for diagnostic purposes (`Successfully connected on namespace: ${namespace.name}`).

Everything else is listening or emitting on the socket object (`socket`) returned to the initial `namespaces.on(...)` callback on each client connection.

The thing that is tricky to grasp (and that cost me about 3 hours of my life) is that that `socket` object is unique to the connection on each namespace. This is not properly reflected ANYWHERE in [socket.io’s documentation](https://socket.io/docs/namespaces/), which makes me crazy. And yes, I should write something and submit a pull request. I know.
