---
title: "WebRTC Book Update: Revised TOC and Some More Legroom"
description: >
  This is starting to feel more like a book to me.
date: 2021-05-31 11:08:19 -0500
category: posted
tags:
  - devto
  - webrtc
  - pragprog
  - writing
---

It’s the end of May, and I’m now about ten weeks into the contracted part of this project for
[Pragmatic Programmers](https://pragprog.com). And in the last week, the book has grown from its
original proposed 6 chapters at 150 pages to 8 chapters that will weigh in at around 250 pages. That
gives me a lot more room to work and should prevent anything vital from having to be cut.

As I put the finishing touches this week on the work for my first major milestone—the three-chapter
publisher’s review, which I’d originally planned for mid-June—the table of contents its looking like
this, minus an introductory setup chapter that’ll be part of the frontmatter and an appendix showing
a signaling channel written in pure WebSockets (the book itself uses [Socket.IO](https://socket.io)
in its recently released [version 4](https://socket.io/blog/socket-io-4-release/)):

1. **Working with a Signaling Channel.** Readers set up an interface in HTML, CSS, and JavaScript
  to manage a basic video-chat app and wire up a pre-built signaling channel and its callbacks. A
  high-level description of WebRTC contextualizes the signaling channel’s purpose and limited
  features.
2. **Establishing a Peer-to-Peer Connection.** Picking up right where the last chapter left off,
  readers learn to request permissions for camera/mic access and display the resulting stream. They
  then go on to create a peer connection using the “perfect negotiation” pattern [described in the
  WebRTC specification](https://www.w3.org/TR/webrtc/#perfect-negotiation-example) and build out the
  rest of the basic video-chat app.
3. **Handling Data Channels.** Media streaming is WebRTC’s most famous feature, but it’s data
  channels that really open up the possibilities for all kinds of real-time, peer-to-peer apps.
  Readers add a video-filter function to the app built over the first two chapters and then build a
  complete text-chat feature.
4. **Streaming Complex Data.** Data channels can handle more than simple strings. This chapter
  opens with building fallbacks into the perfect-negotiation code so they can more confidently test
  their work, including especially with data channels, on browsers that have poorer implementations
  of WebRTC (ahem, Safari). Readers work with sending and receiving JSON strings to build out the
  chat feature further, and then turn to streaming binary data—as either Blobs or ArrayBuffers,
  using some clever feature-detection—to share images in the chat. Readers build a standalone
  peer-to-peer file-sharing app to close out the chapter.
5. **Building Peer-to-Peer Interfaces.** The first four chapters cover all the fundamentals of
  WebRTC. This chapter looks more closely at real-time, peer-to-peer interface design—all framed by
  accessibility. Readers learn to build interfaces that take advantage of semantic HTML and ARIA
  attributes, while also giving users greater control over real-time interfaces, such as arranging
  interface elements in relation to their cameras.
6. **Managing Multi-Peer Connections.** This chapter moves from one-to-one to many-to-many WebRTC
  apps. Sticking to the browser-based focus of the book, it introduces a mesh-network architecture
  for connecting three or more peers in a single call. Readers also learn the practical and
  theoretical upper limits to the number of simultaneous peer connections, and begin to work with
  [the `RTCPeerConnection.getStats()`
  interface](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getStats).
7. **Optimizing Media Streaming.** Readers take a deep dive on different media APIs in this
  chapter, and learn to optimize streaming media based on local and remote statistics and even the
  simple appearance of media streams in the browser (how big does that video stream need to be? how
  small can it get?). The chapter also looks at current and forthcoming methods for optimizing
  images sent over data channels, including [the exciting but currently not universally
  supported](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/createImageBitmap)
  `self.createImageBitmap()` method.
8. **Deploying WebRTC Apps to Production.** This final chapter of the book looks at what it takes
  to deploy a WebRTC app into production. Readers learn about using public STUN servers as well as
  setting up a private STUN/TURN server, with the TURN component as a fallback for when a direct
  peer-to-peer connection cannot be established.

There are a lot of topics packed into chapters six, seven, and eight especially. So I wouldn’t be
surprised to discover a topic that deserves its own chapter—either on my own as I write or from
feedback that’ll come in from the technical and beta reviews later in the summer.

The first three chapters are draft complete, apart from some intro and outro work that I need to do
today. And I’ve got good chunks of the fourth and sixth chapters coming along, in addition to a
growing number of topics for the fifth chapter, on interfaces and accessibility.

Put another way, this is starting to feel more like a book to me—and not just a collection of stuff
I’ve written. Considering that the spring semester just ended for me a little over two weeks ago,
I’m pretty happy with where I am. But I’m hoping to pick up the pace as I recover from this weird
academic year and settle into the summer.
