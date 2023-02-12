---
title: Accessibility API Mapping Specifications
date: 2020-07-25 17:21:21 -0500
category: posted
---

One of the most exciting areas of web accessibility continues to be the development and
standardization of APIs that bridge the many gaps between web browsers and assistive technologies,
such as screen readers, and do so in a cross-platform, operating-system neutral way.

The primary accessibility API specification is the
[Core Accessibility API Mappings 1.1](https://www.w3.org/TR/core-aam-1.1/), which became a W3C
Recommendation in December 2017. A feature-complete
[Core Accessibility API Mappings 1.2](https://www.w3.org/TR/core-aam-1.2/) Working Draft also exists,
and hopefully will soon be out of its public-comment period.

The Core Mappings specification is part of the WAI-ARIA suite, and it specifically

> defines support that applies across multiple content technologies, including general keyboard
> navigation support and mapping of general-purpose roles, states, and properties provided in Web
> content via WAI-ARIA.

The important thing to note about the specification is that it is aimed primarily at the creators
of user agents: that is, browser makers like Mozilla Firefox.

But even with that audience in mind, as a web developer I find it very useful to look at not only
the core accessibility mappings, but at the language-specific API mappings. Those currently include
two specifications that have reached W3C Recommendation status:

* The [Digital Publishing Accessibility API Mappings](https://www.w3.org/TR/dpub-aam-1.0/), which
map to the [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/) for long-form
documents
* The [Graphics Accessibility API Mappings](https://www.w3.org/TR/graphics-aam-1.0/), which map to
the [WAI-ARIA Graphics Module](https://www.w3.org/TR/graphics-aria-1.0/) for allowing authors “to
express the logical structure of the graphic to assistive technologies in order improve
accessibility”

Another two specifications that extend the Core Accecssibility API Mappings are in various stages
of working draft status, including:

* The [HTML Accessibility API Mappings 1.0](https://www.w3.org/TR/2020/WD-html-aam-1.0-20200718/),
which surprisingly does not mention the [ARIA in HTML](https://www.w3.org/TR/html-aria/) specification.
[ARIA in HTML](https://www.w3.org/TR/html-aria/) is also in Working Draft status, last updated in May 2020.
* The [SVG Accessibility API Mappings](https://www.w3.org/TR/svg-aam-1.0/), which hasn’t been updated
since May of 2018, although the [SVG-AAM GitHub repository](https://github.com/w3c/svg-aam) is active
and [the Editor’s Draft](https://w3c.github.io/svg-aam/) reflects that.

Familiarity with these specifications is a real enhancement not just to web development, but for
improving one’s understanding of tools like
[Mozilla Firefox’s Accessibility Inspector](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector).
I’m using that tool more and more in my research and development work, and I also plan to make it a
part of my web-development fundamentals class this fall.
