---
title: Getting WebFinger to Play Nicely on Nginx
description: >
  Leverage a domain in your control to enable people to search for you in the Mastodon fediverse.
date: 2022-12-21 13:03:48 -0600
category: posted
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

The first thing that block does is ensure that the `webfinger` file is sent with the correct
`application/jrd+json` MIME type. The funny `types { }` syntax, with the empty braces, overrides
Nginx’s default MIME types in `mime.types` and sets `application/jrd+json` as the default MIME type.
The call to `types` also has the effect of setting the `content-type` HTTP header. For that reason,
you should’t attempt to call `add_header` to set `content-type`. From experimenting, I found that it
and other Nginx header-setting methods resulted in two `content-type` headers
([an HTTP no-no](https://httpwg.org/specs/rfc9110.html#field.content-type)): one `content-type`
header with the Nginx default `application/octet-stream` and the other with the correct
`application/jrd+json`.

The second thing that location block does is set a permissive CORS header, in keeping with
[the WebFinger spec (RFC 7033)](https://www.rfc-editor.org/rfc/rfc7033.html), specifically
[section 5 on CORS](https://www.rfc-editor.org/rfc/rfc7033.html#section-6). That little header
ensures the widest possible access to the file, including from client-side JavaScript.

To test things out, I made this little call to `curl`—here showing only the HTTP response headers
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

