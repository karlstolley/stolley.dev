---
title: Properly Configuring Nightwatch to Run Geckodriver
date: 2022-03-26 16:11:40 -0500
category: posted
---

I’ll get right to it: both the stock Nightwatch configuration file (as of at least
[Nightwatch](https://nightwatchjs.org) v. 2.0.9) and the Nightwatch docs are inaccurate for using
[the geckodriver web driver](https://github.com/mozilla/geckodriver) (specifically, v. 0.30.0) to
run tests. Here is what you need to do, isolated to the `firefox` environment portion of the
`test_settings` object in a `nightwatch.conf.js` file:

```javascript
module.exports = {

  // snip, snip, snippety-snip

  test_settings: {

    // more snipping...

    firefox: {
      capabilities : {
        browserName : 'firefox',
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
          args: [
            // '-headless',
            // '-verbose'
          ],
          prefs: {
            // 'media.navigator.permission.disable': true,
            // 'media.navigator.streams.fake': true
          }
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        host: '127.0.0.1',
        port: 4444,
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ]
      }
    }

  }

};
```

Curious about what’s going on? I’ll elaborate, property by significant property:

1. The property you want is `capabilities`, not `desiredCapabilities`. The `capabilities` property
  is what ultimately shipped in the [WebDriver
  specification](https://www.w3.org/TR/webdriver/#capabilities). While it seems that both
  geckodriver and [chromedriver](https://chromedriver.chromium.org/capabilities) continue to support
  the older `desiredCapabilities`, `capabilities` is the property you want now and into the future.
2. The `acceptInsecureCerts` property should be a member directly on `capabilities`; this too is in
  the [WebDriver spec](https://www.w3.org/TR/webdriver/#dfn-insecure-tls-certificates). And in
  testing today, it seems that some combo of Nightwatch and geckodriver ignore `acceptInsecureCerts`
  in any other location.
3. For Firefox-specific options (like command-line `args` and browser about:config `prefs`), the
  property to use is `moz:firefoxOptions`. That is shipping in [the latest default
  `nightwatch.conf.js`
  file](https://github.com/nightwatchjs/nightwatch/blob/01c3f12270218eac7345767c14de5f073e6ae500/lib/runner/cli/nightwatch.conf.ejs),
  as is the parallel `goog:chromeOptions` for chromedriver. But if you've got a legacy configuration
  file—like I did—you'll want to update the old `chromeOptions` property, too.
4. For local testing, you’ll want to set an IPv4 address to your local loopback for the `host`
  property on `webdriver`. On the Macs I was working on (one Big Sur, one Monterey), `localhost` was
  resolving to the IPv6 `::1` adddress. Geckodriver was refusing the connection on that, as I
  discovered by running `wget` out of desperation. `wget` then retried on `127.0.0.1`:
  ```sh
  $ geckodriver
  1648330755779  geckodriver  INFO  Listening on 127.0.0.1:4444
  # separate terminal process, with geckodriver still running:
  $ wget http://localhost:4444/
  --2022-03-26 16:49:18--  http://localhost:4444/
  Resolving localhost (localhost)... ::1, 127.0.0.1
  Connecting to localhost (localhost)|::1|:4444... failed: Connection refused.
  Connecting to localhost (localhost)|127.0.0.1|:4444... connected.
  HTTP request sent, awaiting response... 405 Method Not Allowed
  2022-03-26 16:49:18 ERROR 405: Method Not Allowed.
  ```
  The 405 error is expected: there's no meaningful resource on the geckodriver for `GET /`. But the
  Nightwatch test-runner (I assume) did not attempt such a retry. Instead, it left behind a
  seemingly impossible error message of `Failed to connect to GeckoDriver on 127.0.0.1 with port
  4444`.
5. Bonus information: geckodriver now supports parallel testing, where two browsers can be open
  once! This is important for me, as I’m using Nightwatch to test out the code I’ve been writing for
  my [book on WebRTC](https://pragprog.com/titles/ksrtc/programming-webrtc/). I’ll save the full
  instructions for how to pull off parallel tests in full for another post, but essentially, you
  just need two different environments (I have `firefoxActive` and `firefoxPassive`, rather than
  just `firefox`). And each environment must have its own webdriver process on its own port. So
  `4444` (the default) on one, and say `4445` on another. When you go to run nightwatch, pass in the
  `-e` argument with the two environments: `npx nightwatch -e firefoxActive,firefoxPassive`.
