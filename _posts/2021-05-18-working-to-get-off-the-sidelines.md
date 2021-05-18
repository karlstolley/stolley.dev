---
title: Working to Get Off the Sidelines
date: 2021-05-18 15:48:00 -0500
category: post
permalink: /working-to-get-off-the-sidelines/
tags:
  - devto
  - webrtc
  - pragprog
---

For the last few weeks, the brisk progress I’d been making on [my WebRTC
book](https://stolley.dev/im-writing-a-book-about-webrtc-for-pragmatic-programmers/) basically
ground to a halt thanks to my “day job” (as my development editor whimsically puts it). My day job
is being a professor, and there’s really no worse time of year than mid-April until final grades get
turned in. That period isn’t just about helping students over the finish line, but also
accommodating a bunch of panicky colleagues and administrators scheduling last-minute meetings
before people start disappearing for the summer.

Anyway. While I’ve not written much at all on the manuscript, I decided to take what time I could
manage to work on my own organization, particularly all of the thousands of lines of source code I’m
writing that’ll accompany the book.

Writing code for yourself or for your job is usually a bit different from writing code to teach
others. Even the code that I write in order to teach in the classroom is different from code I write
to accompany books and articles: my usual way of prepping for code-intensive classes is to do a dry
run and then have skeletal notes or sometimes more complete examples to refer from, if I’m teaching
something extra complex and am likely to forget some small but essential detail in the middle of
class. I don’t like just walking through canned, finished examples in class: live coding is how I
roll.

In an instructional setting, even if its online because of the pandemic, there’s always the chance
to go back and fix something later or, in the best cases, improve something on the spot in response
to a student question or point of confusion. Writing code live makes for a better class than a
shitty slide deck with completed examples, I think, but it also helps students sort of wrap their
heads around the timescales and especially the *process* of writing code. As every developer knows,
the process is never linear.

But when you’re writing code for a book or an article, you don’t have the luxury of refining things
once the piece is published. Throughout the writing process, you’re building a foundation and
guiding someone down a path that you, as the author, will have finished before the reader even
starts out. And that means that you’ve got to do a lot more planning, as an author and a developer,
to figure out what the reader’s journey is going to look like.

To smooth the way for themselves, the authors of some books and articles—*too many* books and
articles, I’ll add—basically set up the code equivalent of a straw person: early examples so
amateurishly written and poorly formed that they’re basically laughable. Of course, just like the
straw-person argument, it’s easy to swoop in as the hero-author and make yourself look amazing by
fixing crappy, amateurish code.

I don’t like that approach, though, and I avoid it in my own work. And this is why: from years of
both reading a lot of these books as well as teaching them, I can say that the first examples
readers see tend to make the deepest impressions. I notice this in my own work, when I make a
mistake that a book deliberately showed me and only *then* admonished me not to make. I see the same
thing happen in student work too, either when they repeat a mistake that they were shown in a book
or a mistake that I showed off in class before clarifying it as a mistake. That pattern is annoying
for readers, too: *Why did we just spend all that time talking about this thing that you should
never do?*

So rather than starting from crappy code, I like to start with reasonably good code—which, just like
the running copy of anything I write, is never the code that I draft.

The trick I’ve found, and the thing I’ve been working on for the last few weeks with my book, is to
write the absolute best code you can on your own. And then you dial it back a few notches from
there. Maybe that fancy ternary operator has to go, or that little shortcut method or piece of
syntactic sugar: anything that would take time and space too much to explain to readers, especially
when they’re first starting out. It doesn’t mean that you won’t ultimately get the code whipped into
that shape, but that you don’t have to start there—and leave readers feeling lost by all the
ancillary, look-how-smart-the-author-is stuff that can wait.

I do think it’s useful, however, to point out common mistakes after walking through a piece of
code—especially readers are expected to write it out themselves and run it. Beginners trying to pass
a callback function in by reference in JavaScript, for a simple example, will very often include
parentheses, so that the correct code `on('event', callbackFunction);` gets miswritten as
`on('event', callbackFunction());`. It’s an easy mistake for beginners to make, because they’re used
to seeing either the function definition— `function someFunction() { }` —or the place in the code
where the function is called: `someFunction()`.

The catch, of course, is when you as an author make a mistake in your own code. Alongside all of
this, I’ve also been upping my automated testing game. (That’s included me bringing
[Nightwatch.js](https://nightwatchjs.org) to the party. Testing WebRTC apps means having multiple,
simultaneous browsers open for the duration of the test. Chrome can do that, but Gecko’s web driver
implementation seems to be lagging somewhat. But this is all material for a whole other post.) Once
I’ve got good-enough draft examples, I can’t help but continue to improve them. Sometimes the
improvement is just about the code itself, but other times it’s about making the text read more
gracefully. But even for books or articles, there’s no confidence in refactoring code without good
test coverage. You’ve really not experienced BDD in full until you’re writing tests on code that you
know will evolve a particular way over the length of a book.

One of the things I’m finding challenging about writing WebRTC code over a book-length work is that
ideally the signaling and connection logic works completely separately and independently from any
application logic. The application logic is what carries the examples throughout my book. At the
same time, it’s too much to ask readers to write, say, fallbacks for older browsers in the signaling
and connection code when they’re just getting started. So it’s necessary for me to keep track of
gradual improvements to be made to the signaling and connection logic, even as I’m working through
different examples with readers as they progress deeper into the book.

The latest strategy I’ve employed is to write the best, most thoroughly tested examples I can before
I even begin to write a chapter. Then, as I write the chapter, I’m re-writing the completed example
just as I expect a reader will. That frequently gives me insight as to the fancier or more
complicated parts of my completed examples that I can save to guide readers through later.

So, that’s where I am. I’m ready to get back to churning out the running content of the book. And
while I wish I had a few thousand more words to show for the last few weeks, I’m feeling pretty good
that this code work is going to pave the way for me to better focus on how the book is put
together—and how readers will work through it.
