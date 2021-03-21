---
title: I'm Writing a Book about WebRTC for Pragmatic Programmers
date: 2021-03-21 18:25:30 -0500
category: post
permalink: /im-writing-a-book-about-webrtc-for-pragmatic-programmers/
tags:
  - devto
  - webrtc
  - pragprog
---

I went from not even realizing I was going to write a book to having a signed contact with PragProg in 82 days: December 17, 2020 was the first day I worked in earnest on the proposal, and March 9, 2021 was the day I received and signed the contract. 

I’d only just submitted the proposal itself eight days earlier, on March 1. At 9:18am. I note the time, because it was just 28 minutes later that I heard from an Author Relations contact at PragProg with some of the best words a writer can hear:

> You've done a great job with the proposal and sample chapter, so I think I can present your proposal without any revisions. It's clear that you get the PragProg style and I'm grateful for that fact and happy to hear you are using PragProg books in your classroom!

(Yes, I use PragProg books in the classroom all the time, and no, I wasn’t ashamed to slip that little detail into my proposal itself.)

Since signing the contract, I’ve just been getting up to speed with Prag’s publication system—which I’m contractually bound not to discuss in detail, and I can see why. It’s pretty great. I’ve also begun working with my development editor, and I can say that this is book project is fixing to be whatever the opposite of lonely is. It’s an incredibly collaborative effort already, and I’ve only just gotten started.

Okay, but what about the book? What’s it actually about? Let me try out my elevator pitch on you:

You’re a web developer. You’ve spent the pandemic racking up untold hours on Google Meet, Zoom, FaceTime, or whatever real-time video-chat service. But what you might not know is that all modern browsers ship with an implementation of [a web API called WebRTC: Web Real-Time Communication Between Browsers](https://www.w3.org/TR/webrtc/). WebRTC allows you to build real-time applications that run directly in the browser. And sort of like with FaceTime or whatever, you can build your own video-chat app. Only unlike all of those popular services, WebRTC works peer to peer: the app you build directly connects one web browser to another. There’s no server involved. And video chatting is only just the most obvious example. With WebRTC, you can open up channels to exchange any arbitrary data that might power all kinds of real-time activities: text-based chats, secure peer-to-peer file transfers, collaborative brainstorming sessions, and even multiplayer gaming. This book will have you doing all of that. And not just with two connected peers: an entire chapter of the book is devoted to engineering multi-peer WebRTC apps, using a mesh-network architecture.

Okay. So that needs some work. But hopefully the gist of it comes across.

So where did the book come from? Last fall, I taught [a course on WebRTC](https://courses.stolley.co/rtc/) for the first time. As I wrote in the proposal, putting that class together didn’t go very smoothly:

> The biggest challenge I faced in putting together my WebRTC class over the last year was the lack of a suitable, up-to-date book for teaching or engaging in self-study of WebRTC—especially in the context of web development. As I detail in the competing books section below, there are a few rapidly aging titles on the market that are now little more than works of history. There is little, in book form or otherwise, that offers a substantial, pragmatic application of the WebRTC specification as it has matured since achieving Candidate Recommendation status in late 2017. (The spec became a full W3C Recommendation on January 26, 2021, while I was preparing this proposal).

Having scoured the web for as many articles and resources as I could to try to structure my class, I still had to write a lot of material for students—especially source-code examples. It was only after the fog had lifted at the end of fall semester that I realized I might have the material necessary to actually write a book about the topic.

It was really important to me to have the class structured around the native WebRTC APIs found in the browser, rather than rely on a third-party library. The book will be the same, native-API deal: although I’ll be using Socket.IO as a signaling server, all of the client-side code uses nothing but the available browser APIs (occasionally with an assist from the [adapter.js](https://github.com/webrtcHacks/adapter) to shim certain browsers as needed).

So that’s my news. I’ll be posting about the book here as I write it. And you’re welcome to message me about it on Twitter [@stolleydotdev](https://twitter.com/stolleydotdev), of course.
