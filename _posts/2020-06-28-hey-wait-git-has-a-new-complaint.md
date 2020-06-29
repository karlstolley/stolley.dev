---
title: "Hey, Wait: Git Has a New Complaint"
category: post
permalink: /hey-wait-git-has-a-new-complaint/
tags:
  - devto
  - git
---

When you upgrade to
[Git 2.27](https://raw.githubusercontent.com/git/git/master/Documentation/RelNotes/2.27.0.txt), one
of the first changes you'll notice is Git issuing this dire warning every time you go to pull from a
remote:

```txt
$ git pull origin main
warning: Pulling without specifying how to reconcile divergent branches is
discouraged. You can squelch this message by running one of the following
commands sometime before your next pull:

  git config pull.rebase false  # merge (the default strategy)
  git config pull.rebase true   # rebase
  git config pull.ff only       # fast-forward only

You can replace "git config" with "git config --global" to set a default
preference for all repositories. You can also pass --rebase, --no-rebase,
or --ff-only on the command line to override the configured default per
invocation.
```

Almost certainly the best option here is to (probably globally) specify fast-forward only:

```txt
$ git config --global pull.ff only
```

A fast-forward is what happens under the happiest of circumstances: your local branch has no new
changes that aren’t already on the remote, so you’re updating (fast-forwarding) the pointer on the
HEAD commit to match the remote. Setting `pull.ff only` ensures that that happy behavior continues.

But there are plenty of unhappy circumstances. The one that most commonly ruins my day is when I’ve
been working on the same branch of the same repo on two different computers. I push the commits from
Computer A to the remote, but forget to run `git pull` from Computer B before writing new commits.

The default strategy, a merge commit, means you can end up with a repository full of merge commits
from your own remote branch. It’s ugly and almost always leads to
[foxtrot commits](https://blog.developer.atlassian.com/stop-foxtrots-now/).

By setting `pull.ff only`, Git will no longer race ahead and create a merge commit. You can opt to
do so manually (`git merge origin/main`), but if you’re not working on a public branch, or if your
divergent commits are still local, you can rebase your local branch onto the missing commits from
your remote (`git rebase origin/main`). They’ll then appear as though they’ve been there the whole
time.

Of course, when it comes to working with branches shared with others, it’s better by far to create
your own, independent feature-branches and keep your work isolated, and rebase from the parent
branch before pushing the commits on your own branch.
