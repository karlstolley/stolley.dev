---
title: Leading-Trim and Better CSS Typesetting
description: >
  It’s hard to overstate how important this property will be to typesetting with CSS.
link: https://medium.com/microsoft-design/leading-trim-the-future-of-digital-typesetting-d082d84b202
date: 2020-08-19 21:52:03 -0400
category: linked
---

Ethan Wang, announcing [a new CSS specification](https://www.w3.org/TR/2020/WD-css-inline-3-20200618/#propdef-leading-trim)
sponsored by Microsoft Design:

> Leading-trim works by browsers accessing the font metrics to find, for example, the cap height and
> baseline. As the standard font format, OpenType specifies what metrics to include in the font
> file. OpenType has been jointly developed by Microsoft and Adobe as an extension of Apple’s
> TrueType font format since 1997. While today OpenType has robust support for Latin scripts and CJK
> languages, it still lacks key metrics for other less commonly used writing systems such as Hebrew
> or Thai. As people adopt leading-trim, we hope this leads the way for us to add more font metrics
> of other writing systems to OpenType.

It's hard to overstate how important this property, `leading-trim` (pron. *ledding*), will be to
typesetting with CSS. Since the very first specification, `line-height` has had some very troubling
behavior under certain circumstances. That `leading-trim` is set to access the metrics of individual
fonts also suggests that more font-aware CSS properties and rendering could be on the horizon.
