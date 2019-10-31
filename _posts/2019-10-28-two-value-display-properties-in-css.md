---
title: Two-Value Display Properties in CSS
link: https://hacks.mozilla.org/2019/10/the-two-value-syntax-of-the-css-display-property/
category: linked
tags: devto
---

The incomparable Rachel Andrew introduces the brave new world of two-value CSS `display` properties:

> the outer `display` type of an element is always block or inline, and dictates how the box behaves
> in the normal flow of the document. The inner `display` type then changes the formatting context
> of the children.
>
> To better describe this behavior, the CSS Display specification has been
> refactored to allow for `display` to accept two values. The first describes whether the outer
> `display` type is block or inline, whereas the second value describes the formatting of the
> children.

I’m of two minds for this change. On the one hand, this introduces some complexity (e.g., the
venerable `display: block` is, in its two-value declaration, `display: block flow`). But on the
other hand, with that complexity comes an invitation to web developers to better understand document
flow and formatting context—to which Rachel Andrew’s book *[The New CSS
Layout](https://abookapart.com/products/the-new-css-layout)* is an indispensable guide.

The two-value syntax for `display` is currently [only available in Firefox
70](https://developer.mozilla.org/en-US/docs/Web/CSS/display#Browser_compatibility), listed in the compatibility table at MDN under “multi-keyword values.”
