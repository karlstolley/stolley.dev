---
title: The `prefers-contrast` Media Query in Firefox
link: https://hacks.mozilla.org/2020/07/adding-prefers-contrast-to-firefox/
category: linked
---

> Depending on what operating system is being used, high contrast mode can make a wide variety of
> changes. It can reduce the visual complexity of the screen, force high contrast colors between
> text and backgrounds, apply filters to the screen, and more. Doing this all automatically and in a
> way that works for every application and website is hard.

Really interesting write up of how this is implemented in Firefox. Unfortunate that macOS does not
at present expose contrast preferences set at the system level to running applications.

`prefers-contrast` is currently
[part of the Media Queries Level 5 working draft](https://www.w3.org/TR/mediaqueries-5/#prefers-contrast)
at the W3C.
