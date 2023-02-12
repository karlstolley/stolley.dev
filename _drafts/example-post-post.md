---
title: Syntax Highlighting
category: posted
permalink: /syntax/
date: 2039-11-27
---

Here's some HTML:

```html
<!DOCTYPE html>
<html lang="en" class="light">
<head>
  <title>Breaking Down the Monolith of `git checkout` in Git 2.23: stolley.dev</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0,shrink-to-fit=no" />
  <link rel="stylesheet" href="/assets/css/screen.css" />
  <link rel="stylesheet" href="https://use.typekit.net/wxg6qvw.css">
</head>
<body class="linked">
<header id="header">
  <h1><a href="https://stolley.dev/">stolley.dev</a></h1>
</header>
<main id="content">

  <article class="linked">
    <header>
      <h2><a href="https://github.blog/2019-08-16-highlights-from-git-2-23/">Breaking Down
         the Monolith of <code>git checkout</code> in Git 2.23</a></h2>
      <ul class="meta">
        <li>22 August 2019</li>
        <li>
          <a href="https://github.blog/2019-08-16-highlights-from-git-2-23/">github.blog</a>
          <!-- domain of link, linked to the item -->
        </li>
      </ul>
    </header>
    <p>Great overview of the changes in Git 2.23, care of Taylor Blau on the GitHub.com blog:</p>
    <blockquote>
      <p>
        Git 2.23 brings a new pair of experimental commands to the suite of existing ones: <code>git
        switch</code> and <code>git restore</code>. These two are meant to eventually provide a
        better interface for the well-known <code>git checkout</code>. The new commands intend to
        each have a clear separation, neatly divvying up what the many responsibilities of git
        checkout, as we’ll show below.
      </p>
    </blockquote>

    <p>
      The perennially overloaded <code>git checkout</code> command is a notable piece of difficult
      CLI in an already challenging suite. I can easily imagine myself tripping over the old flags,
      though, as in the comparable <code>git checkout -b</code> and <code>git switch -c</code>
      commands for immediately creating and checking out a branch. Because <code>git checkout</code>
      is used in so many different contexts, it’s its flags and argument patterns that are most
      memorable to those who use Git every day.
    </p>
  </article>
</main>
<aside>
  <![CDATA[
    <message>Welcome to our Glorious XML Future</message>
  ]]>
</aside>
<footer id="footer">
  <small>Site content &amp; design by Karl Stolley.</small>
</footer>
<script src="/assets/js/site.js"></script>
</body>
</html>

```

Here's some CSS:

```css
@media screen and (min-width: 700px) {
  #header,
  #content,
  #footer {
    padding-left: 15%;
    padding-right: 15%;
  }
  #header {
    padding-top: 7.5vw;
  }
  #footer {
    padding-bottom: 7.5vw;
  }
}

/* Styles for Source-code Examples ========================================= */

code,
pre {
/*background: #DDD; */
  background: var(--color-p-base-background);
  color: var(--color-p-base-body);
  font-family: Menlo, Monaco, Consolas, 'Courier New', Courier, monospace;
  font-size: 0.9411764706; /* 16px */
  font-style: normal; !important
  font-weight: normal;
  padding: 0 0.25em 0 0.25em; /* 4px */
}
pre {
  margin: 0px -24px 12px -24px;
  padding: 12px 24px;
}
pre code {
  background: inherit;
}


/* ========================================================================= */
/* End custom site styles */
/* ========================================================================= */


/* PrismJS 1.17.1
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+bash+ruby+git+json */
/**
 * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
 * Based on https://github.com/chriskempson/tomorrow-theme
 * @author Rose Pritchard
 */

code[class*="language-"],
pre[class*="language-"] {
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;

  -moz-tab-size: 2;
  -o-tab-size: 2;
  tab-size: 2;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #999;
}
```

And here's some JavaScript:

```javascript
/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

var isBoolean = true;

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function (_self){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;

/**
 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
 *
 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
 *
 * @param {Element} element
 * @returns {string}
 */
function getLanguage(element) {
	while (element && !lang.test(element.className)) {
		element = element.parentNode;
	}
	if (element) {
		return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
	}
	return 'none';
}

getLanguage('html');

switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [break;]
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}
```

And here's some ruby

```ruby
class Post < ApplicationRecord
  validates :title, presence: true
  belongs_to :author
  has_and_belongs_to_many :tags

  has_one_attached :photo

  def author_name=(name)
    self.author = Author.find_or_create_by(name: name)
  end

  def author_name
    self.author ? self.author.name : nil
  end

  def tag_names=(names)
    # reset self tags to an empty set; build all on each create/update
    self.tags = []
    # split the tag names at commas into an array
    names.split(',').each do |name|
      # strip any trailing or leading whitespace on each tag
      tag = Tag.find_or_create_by(name: name.strip)
      # append each newly found or created tag to self
      self.tags << tag
    end
  end

  def tag_names
    if self.tags.any?
      # use Array#map to build a collection of just the tag name values
      tags = self.tags.map{|x| x.name }
      # join the array and return a comma-space-separated string
      tags.join(', ')
    else
      # return a nil value if there are no tags
      tags = nil
    end
  end

end

class ApplicationController < ActionController::Base

  helper_method :current_user

  private
  # Getter method for current user
  def current_user
    @current_user ||= Author.find_by(uid: session[:uid])
  end
  # Setter method for current user
  def current_user=(author)
    session[:uid] = author.uid
    session[:name] = author.name
  end

  def user_signed_in?
    !!current_user
  end

  def authenticate_user
    unless user_signed_in?
      redirect_to github_auth_url(origin: request.url)
    end
  end

end

isBoolean = true
isNumber = 42
```

How about some JSON?

```json
{
  "settings": {
    "_version": "Stolley Browser Config, v. 2.0.2, 20180811",
    "_eslint_version": "4.19.1",
    "_rules_url": "https://eslint.org/docs/rules/",
    "_repo_url": "https://github.com/karlstolley/eslint-config"
  },
  "parserOptions": {
    "ecmaVersion": 5
  },
  "root": true,
  "env": {
    "browser": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-console": "off",
    "no-template-curly-in-string": "error",
    "block-scoped-var": "warn",
    "curly": ["warn", "all"],
    "dot-location": ["warn", "property"],
    "dot-notation": "warn",
    "eqeqeq": ["warn", "always"],
    "no-multi-spaces": ["warn", { "ignoreEOLComments": true, "exceptions": { "Property": true } }],
    "no-sequences": "error",
    "require-await": "error",
    "vars-on-top": "error",
    "yoda": "error",
    "strict": ["error", "global"],
    "no-undefined": "error",
    "comma-dangle": ["warn", "never"],
    "comma-spacing": ["warn", { "before": false, "after": true }],
    "func-call-spacing": "warn",
    "indent": ["warn", 2],
    "linebreak-style": ["error", "unix"],
    "multiline-comment-style": ["warn", "separate-lines"],
    "newline-per-chained-call": ["warn", { "ignoreChainWithDepth": 2 }],
    "spaced-comment": ["warn", "always"],
    "semi": ["warn", "always"],
    "semi-spacing": ["warn", {"before": false, "after": true}]
  }
}
```

How about some command-line shit?

```bash
$ uptime

$ df -H
Filesystem      Size   Used  Avail Capacity iused               ifree %iused  Mounted on
/dev/disk2s1    2.1T   164G   1.9T     8% 1380350 9223372036853395457    0%   /
devfs           195k   195k     0B   100%     658                   0  100%   /dev
/dev/disk2s4    2.1T   2.1G   1.9T     1%       1 9223372036854775806    0%   /private/var/vm
map -hosts        0B     0B     0B   100%       0                   0  100%   /net
map auto_home     0B     0B     0B   100%       0                   0  100%   /home

$ ls -la | grep "who"

```

And how about some git?

```git
$ git status
On branch syntax-highlight
nothing to commit, working tree clean
$ git branch -a
dev
master
structure
* syntax-highlight
typefaces
remotes/origin/HEAD -> origin/master
remotes/origin/dev
remotes/origin/master
remotes/origin/structure
remotes/origin/typefaces
$ git commit -m "Here's a fancy commit message for ye"
```
