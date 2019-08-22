---
title: Breaking Down the Monolith of `git checkout` in Git 2.23
link: https://github.blog/2019-08-16-highlights-from-git-2-23/
category: linked
layout: linked
---

Great overview of the changes in Git 2.23, care of Taylor Blau on the GitHub.com blog:

> Git 2.23 brings a new pair of experimental commands to the suite of existing ones: `git switch`
> and `git restore`. These two are meant to eventually provide a better interface for the well-known
> `git checkout`. The new commands intend to each have a clear separation, neatly divvying up what
> the many responsibilities of git checkout, as we’ll show below.

The perennially overloaded `git checkout` command is a notable piece of difficult CLI in an already
challenging suite. I can easily imagine myself tripping over the old flags, though, as in the
comparable `git checkout -b` and `git switch -c`  commands for immediately creating and checking out
a branch. Because `git checkout` is used in so many different contexts, it’s its flags and argument
patterns that are most memorable to those who use Git every day.
