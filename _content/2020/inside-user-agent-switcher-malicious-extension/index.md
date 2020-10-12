---
layout: post
title: "Inside 'User-Agent Switcher' Malware: The Dark Side of Influencer Marketing"
permalink: /2020/inside-user-agent-switcher-malicious-extension/
description: "In a dystopian future where 'followers' and 'likes' can turn one person's social media account into a million-dollar brand-deal powerhouse, those unoriginal enough will pay hundreds or thousands of dollars to try to enter the social media stratosphere through shady deals and malicious methods. Oh, wait."
date: 2020-10-11 00:00:00
tags:
- malware
- extension
- chrome
---

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

Hopping into the extension directory, we're greeted with simple internals - mostly JavaScript, some HTML, CSS, and little else. The JavaScript files have been minified (a space-saving measure), so I "beautified" them with [js-beautify](https://github.com/beautify-web/js-beautify) before beginning.


## Analysis

## Recommendations

Never install software from untrusted sources.

## Disclosures

