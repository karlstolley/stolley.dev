---
title: "`@supports` Shines Brightest on Dependent Styles"
description: >
  Feature queries apply a set of style declarations when a given feature is supported.
category: posted
tags:
  - devto
  - css
  - "feature-queries"
---

Feature queries via [the `@supports` CSS
at-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) provide syntax to conditionally
apply a set of style declarations when a given feature is supported. It’s common to see web
developers test and immediately apply a newer CSS property:

```css
@supports(display: grid) {
  main { display: grid; }
}
```

But considering that [browsers ignore CSS that they don’t understand](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers#Creating_fallbacks_in_CSS), such applications of
feature queries can be redundant and unnecessary.

<figure class="screenshot" id="img-stolley-co-screenshot">
  <img src="/assets/img/stolley-co-screenshot.png" alt="Screenshot of CSS shapes example" />
  <figcaption>
    CSS shapes enable developers to draw outlines around floated content. Text will flow to conform
    to the shape, as shown here. The hyphenation and justification, however, are only desirable when
    CSS shapes are supported.
  </figcaption>
</figure>

Where feature queries really shine, however, is in preventing dependent styles from being applied.
Feature queries are exceptionally suited to applying properties browsers *do* understand, but that
are only appropriate when a more advanced property is available.

For a recent example, I started experimenting with [CSS
Shapes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Shapes) on [a floated image of a
Raspberry Pi on my professional website](https://stolley.co/) (Save a visit to the website itself
and see [the figure](#img-stolley-co-screenshot)).

I did not use a feature query on [the `shape-outside`
property](https://github.com/karlstolley/stolley.co/commit/8595b8b4dfa1fb0417648ed2943d9cd269025a06#diff-ce5e030f2e2e2a50f18199464f07ea70)
itself.

Instead, I used a feature query to prevent applying two other, more well supported features:
justified text and hyphenation. [The
code](https://github.com/karlstolley/stolley.co/commit/e3fa2f5f8c30e20689d4649045e5b6c5b9fe4071)
looks like this:

```css
@supports (shape-outside: polygon(0px 0px, 0% 0%)) {
  #about p {
    hyphens: auto;
    text-align: justify;
  }
}
```

I don’t want to use hyphens or text justification in the absence of the custom shape I drew around
the Pi image. Their purpose is only to  help the text better conform to the CSS shape and the image
content. In the absence of CSS shapes support, a plain old rectangular float appears. And that’s fine.
But there’s no need to bring hyphens or justification to that party, which will only further intensify
the boxiness of that older-school design.

A couple of notes here to close out the post:

* `@supports` rules require not just the property but also a valid value. The value `polygon()` is
*not* valid by itself, so I passed in some coordinates as zero values (with units, which is poor
form). Consult [the MDN documentation on
`shape-outside`](https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside).
* I highly recommend [the Firefox CSS Shapes
Editor](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes), even
though it feels to me like bizarro world using a WYSIWYG interface on newer CSS properties. The
coordinates it generates are responsive, too, which is awesome.
* I'm forever admonishing my students not to use justification. That is still the case for long
passages of text. Run a ragged right-edge. It occurs to me that it might be wise to also check for
`hyphens` support before applying justified text, although [browser hyphenation itself is still a
big work in
progress](https://justmarkup.com/articles/2019-01-28-a-look-at-css-hyphenation-in-2019/).
