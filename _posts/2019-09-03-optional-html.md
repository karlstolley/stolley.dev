---
title: Optional HTML
link: https://meiert.com/en/blog/optional-html/
category: linked
layout: linked
---

Jens Meiert is a big fan of omitting optional HTML. He’s assembled [a pretty exhaustive
guide](https://meiert.com/en/blog/optional-html/) covering what can be omitted and when. From there
he’s also linked to other posts where he’s run the tests and developed the metrics that illustrate
the performance gains from leaving out optional HTML (everything from optional closing tags to
quotes around single-word attributes).

The problem I have is that optional rules come with no small amount of caveats and contextual
issues. As a developer, I want a readable, consistent code base. Quote your attributes, for example,
always. I still write HTML in XHTML-strict style. I don’t want the ambiguity of some attributes
being enclosed in quotation marks, and others not. Quote them all.

Plus there’s always the possibility of being burned by a change in content forcing a change in
context, and therefore a different rule. For a dumb example,

```html
<aside class=summary>A summary</aside>
```

That’s legal. But the second an additional class gets added, it’s not:

```html
<!--Invalid-->
<aside class=summary review>A summary and review</aside>
```

By inserting quotation marks and reducing ambiguity from the get-go, later adjustments are
potentially less error-prone, simply by a reduced cognitive load of changing the content while
maintaining the operative rule:

```html
<aside class="summary">A summary</aside>
<!-- becomes: -->
<aside class="summary review">A summary and review</aside>
```

Although as Jens himself notes in his guide’s appendices, it’s essential to validate.

A possible compromise: Write the verbose, strict style in HTML or any other language. Then leave it
to a piece of tooling to remove the optional stuff. And even then, it’s essential to validate.
