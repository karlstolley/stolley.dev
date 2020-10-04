---
title: The lazysizes lazy-loader
link: https://github.com/aFarkas/lazysizes
date: 2020-10-04 12:07:00 -0400
category: linked
---

A weird little side-obsession of mine for a few years has been trying to imagine a native,
JavaScript-free way of making use of either `srcset` or the `<picture>` element on something like
a set of images in a flex container, where each individual image might not be the same size as the
others, depending on the way the flex is configured. (You can see the effect I'm talking about on
[my overview page of courses that I teach](https://courses.stolley.co).)

Obviously in a server-generated page of HTML, it would be easy to count the total number of items,
figure out the *nth* item at each viewport size that might be larger, and insert the correct `sizes`
values for `srcset` or `<picture>`.

But what about just vanilla, hand-written HTML? I've yet to imagine a viable solution (let alone
try to write one), but I did stumble upon this JavaScript library called
[lazysizes](https://github.com/aFarkas/lazysizes) that's using JavaScript to do what I'm thinking
about (but that I'd rather do with pure HTML and CSS):

> It can automatically calculate the sizes attribute for your responsive images, it allows you to
> share media queries for your media attributes with your CSS, helping to separate layout (CSS) from
> content/structure (HTML) and it makes integrating responsive images into any environment really
> simple.

Hanging onto this for experimentation and at least a study in prior art.
