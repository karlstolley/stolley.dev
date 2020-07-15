---
title: Inclusive Web Performance Metrics for Assistive Technologies
link: https://www.filamentgroup.com/lab/a11y-ready/
date: 2020-07-14 23:18:27 -0500
category: linked
---

Scott Jehl writing about getting beyond visual-rendering markers, like first contentful paints, for
web performance metrics:

> These metrics are often touted as measures of usability or meaning, but they are not necessarily
> meaningful for everyone. In particular, users relying on assistive technology (such as a
> screenreader) may not perceive steps in the page loading process until after the DOM is complete,
> or even later depending on how JavaScript may block that process.

Absolutely. Metrics undoubtedly drive how performance is tuned for off-the-shelf frameworks, and not
just the sites that use them. Including assistive technology in those metrics is long past due.
