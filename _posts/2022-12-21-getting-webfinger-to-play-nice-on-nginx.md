---
title: Getting WebFinger to play nicely on Nginx
date: 2022-12-21 13:03:48 -0600
category: post
permalink: /getting-webfinger-to-play-nicely-on-nginx/
tags:
  - devto
  - nginx
  - mastodon
---

I was inspired by
[Scott Hanselman’s blog post on configuring WebFinger for use with Mastodon](https://www.hanselman.com/blog/use-your-own-user-domain-for-mastodon-discoverability-with-the-webfinger-protocol-without-hosting-a-server).
The idea is that you leverage a domain in your control to enable people to search for you in
the Mastodon fediverse—freeing you from anchoring yourself to a specific Mastodon instance, and also
freeing your friends and enemies to find you via an email address or really
`<any-value-here>@example.com`.

I wanted to make it possible to do just that using my new public email address, `karl@stolley.dev`.
If you search your favorite Mastodon instance for that email address, or even
`ugh-that-guy@stolley.dev`, you should see
[my `@stolley@hachyderm.io` username](https://hachyderm.io/@stolley) pop up in the results.

Creating
[the `webfinger` file](https://github.com/karlstolley/stolley.dev/blob/main/.well-known/webfinger)
and putting it in your URL’s `/.well-known/` path is only part of the story, however. You need to
make sure that your web server or platform knows how to return sensible responses to requests for
`/.well-known/webfinger`.

I’ve got a humble flat-file setup for
[my WebFinger file](https://stolley.dev/.well-known/webfinger). But to get Nginx to serve
`/.well-known/webfinger` correctly, I also added the following location block for the file:

```conf
location /.well-known/webfinger {
  types { } default_type 'application/jrd+json';
  add_header 'Access-Control-Allow-Origin' '*';
}
```

What that does is, first, ensure that the `webfinger` file is sent with the expected
`application/jrd+json` MIME type. The funny `types { }` syntax has the effect of basically ignoring
the types mapped out in the `mime.types` file that ships with Nginx, and instead setting
`application/jrd+json` as the MIME type and `content-type` header for .  I found in testing that
other methods were passing down two `content-type` headers: one with the Nginx default
`application/octet-stream`, and the other with `application/jrd+json`. (Note also that with `types`,
you don’t need to also call `add_header` to set `content-type`).

The second thing the location block does is set a permissive CORS header, in keeping with
[the WebFinger spec (RFC 7033)](https://www.rfc-editor.org/rfc/rfc7033.html), specifically
[section 5 on CORS](https://www.rfc-editor.org/rfc/rfc7033.html#section-6). That little header
ensures the widest possible access to the file, including from client-side JavaScript.

To test things out, I just made a little call to `curl`—here showing only the HTTP response headers
and contents of my `webfinger` file:

```console
$ curl -v https://stolley.dev/.well-known/webfinger

# A bunch of stuff snipped here...

< HTTP/2 200
< server: nginx
< date: Wed, 21 Dec 2022 19:01:38 GMT
< content-type: application/jrd+json
< content-length: 659
< last-modified: Wed, 21 Dec 2022 17:58:22 GMT
< etag: "63a3493e-293"
< access-control-allow-origin: *
< accept-ranges: bytes
<
{
    "subject":"acct:stolley@hachyderm.io",
    "aliases":
    [
        "https://hachyderm.io/@stolley",
        "https://hachyderm.io/users/stolley"
    ],
    "links":
    [
        {
            "rel":"http://webfinger.net/rel/profile-page",
            "type":"text/html",
            "href":"https://hachyderm.io/@stolley"
        },
        {
            "rel":"self",
            "type":"application/activity+json",
            "href":"https://hachyderm.io/users/stolley"
        },
        {
            "rel":"http://ostatus.org/schema/1.0/subscribe",
            "template":"https://hachyderm.io/authorize_interaction?uri={uri}"
        }
    ]
}
```

