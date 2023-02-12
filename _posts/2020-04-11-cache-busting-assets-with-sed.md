---
title: Cache-busting Assets with sed
category: posted
tags:
  - devto
  - javascript
  - nginx
  - serviceworkers
---

Thanks to the ongoing quarantine, I’ve found the time to take on some of the long-standing items on
my web dev to-do list. One of these items was to implement cache-busting on CSS and JavaScript
assets in coordination with service workers.

Being a developer with an already strong but still growing aversion to frameworks and taskrunners,
especially when all I really need is a simple feature, I prefer mining old-school Unix tools and
using them to building out a custom deploy script, usually using a `post-receive` hook with Git.
It’s hard to find an old-school tool as old as sed, which first appeared in 1974.

For those who don’t know sed (short for “streaming editor”), [its friendly overview
page](https://www.gnu.org/software/sed/) opens with a fine summary:

> sed is commonly used to filter text, i.e., it takes text input, performs some operation (or set of
> operations) on it, and outputs the modified text. sed is typically used for extracting part of a
> file using pattern matching or substituting multiple occurrences of a string within a file.

And that’s what I need: to comb through a static set of HTML files for references like `<script
src="assets/js/site.​js">` and insert a hash so the file referenced becomes something like
`assets/js/site.0a1cb23.​js`. The file itself remains `site.​js` on the server, so I don’t have to
worry about moving files around and changing their names. A quick little location-scoped regex
rewrite block in Nginx will ignore the hash:

```txt
# This assumes assets off of an /assets directory, obviously
location ~ /assets {
  rewrite (.+)\.([a-f0-9]+)\.(js|css)$ $1.$3 break;
}
```

To grab a meaningful hash, I need to capture the HEAD commit hash from my site’s repository, using
[`git rev-parse`](https://git-scm.com/docs/git-rev-parse). As a side note, it’s essential to include
the argument `--git-dir=<bare repo directory>` when trying to run commands on a specific
repo—especially bare repos, which I use for all my basic deploy scripts.

So the relevant part of my deploy script (which is written for zsh and [its awesome recursive
globbing syntax](http://zsh.sourceforge.net/Doc/Release/Expansion.html#Filename-Expansion) looks
something like this:

```txt
cd $TMP_GIT_CLONE
SHORTHASH=`git --git-dir=$TMP_GIT_CLONE/.git rev-parse --short HEAD`;
for file in **/*.html;
sed -E -i "s/=([^:]+)\.(css|js)/=\1.$SHORTHASH.\2/g" $file;
done;
```

With that run, the files have all of their paths updated. I then need to give a similar treatment to
my service worker script, which actually needs a variable declaration rewritten.

For the sake of local development and not hanging on too long to an existing service worker cache, I
open my service worker script with these lines JavaScript, which falls back to a
`mockTenMinuteVersion()` function that generates a new time-based hash every ten minutes:

```javascript
var VERSION;
const version = VERSION ? VERSION : mockTenMinuteVersion();
```

I prefer using the ES 2015 `const` declaration, but because `const` [by
definition](https://tc39.es/ecma262/#sec-let-and-const-declarations) cannot have its value
reassigned, simply declaring `const VERSION;` is enough kick out a nasty little syntax error and
prevent the rest of the script from running.

To allow for that, I write the regex on this call to sed to also replace `var` with `const` and
assign the SHORTHASH value you to `const VERSION` as well. These lines get added to the
`post-receive` lines listed above:

```txt
sed -E -i "s/var VERSION/const VERSION = \"$SHORTHASH\"/" _site/sw.​js;
sed -E -i "s/'([^:]+)\.(css|js)/'\1.$SHORTHASH.\2/g" _site/sw.​js;
```

And that changes the opening lines of my service worker script to:

```javascript
const VERSION = "0a1cb23";
const version = VERSION ? VERSION : mockTenMinuteVersion();
```

Finally, sed needs to do its thing and update the files listed in the manifest of preloaded files to
go from this:

```javascript
const site_preloaded_assets = {
  essential: [
    '/assets/css/screen.​css',
    '/assets/js/site.​js',
    '/',
    site_offline_path
  ],
  supporting: []
};
```

to this:

```javascript
const site_preloaded_assets = {
  essential: [
    '/assets/css/screen.0a1cb23.css',
    '/assets/js/site.0a1cb23.​js',
    '/',
    site_offline_path
  ],
  supporting: []
};
```
