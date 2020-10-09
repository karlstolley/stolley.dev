---
title: Styling Empty Grid Cells with Generated Content
link: https://www.smashingmagazine.com/2018/02/generated-content-grid-layout/
date: 2020-10-09 17:50:09 -0400
category: linked
---

Although from 2018, [this article](https://www.smashingmagazine.com/2018/02/generated-content-grid-layout/)
from the incomparable [Rachel Andrew](https://rachelandrew.co.uk) was exactly what I needed to solve
a CSS grid problem today, where an empty cell needed to have the same color as an adjacent one’s
content. And because the adjacent cell’s height was determined by another cell’s content, I couldn’t
simply fudge it with padding.

Enter Rachel’s technique:

> CSS Generated Content uses the `::before` and `::after` CSS pseudo-classes along with the
> `content` property to insert some kind of content into the document. The idea of inserting
> *content* might lead you to think that this is for inserting text, and while this is possible, for
> our purposes we are interested in inserting an empty *element* as a direct child of our Grid
> Container. With an element inserted we can style it.

There’s also a bonus section to the article for using this technique to add typographic flourishes,
such as lines to either side of a heading’s text.
