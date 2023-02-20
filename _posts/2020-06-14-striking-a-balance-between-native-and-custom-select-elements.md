---
title: Striking a Balance Between Native and Custom Select Elements
description: >
  Sandrina Pereira has authored a thoughtful and well engineered approach to styling HTML select
  elements.
link: https://css-tricks.com/striking-a-balance-between-native-and-custom-select-elements/
category: linked
---

[Sandrina Pereira](https://css-tricks.com/author/sandrinapereira/) has authored this thoughtful and
well engineered approach to styling `<select>` elements in the presence of a mouse pointer (smart,
as mobile interfaces like iOS have
[their own screen-hogging HUD](https://medium.com/@mibosc/responsive-design-why-and-how-we-ditched-the-good-old-select-element-bc190d62eff5)).

> Here’s the plan! We’re going to build a styled select element. Not just the outside, but the
> inside too. Total styling control. Plus we’re going to make it accessible. We’re not going to try
> to replicate everything that the browser does by default with a native `<select>` element. We’re
> going to literally use a `<select>` element when any assistive tech is used. But when a mouse is
> being used, we’ll show the styled version and make it function as a select element.

Pereira also spends some time, as [other designers have done](https://adrianroselli.com/2020/03/stop-using-drop-down.html),
clarifying the terminology around `<select>` and other types of drop-down control. (Just don't call
it a drop-down.)
