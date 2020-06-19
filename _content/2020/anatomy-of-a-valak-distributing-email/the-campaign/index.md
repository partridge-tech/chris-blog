---
layout: post
title: "Anatomy of a Valak-Distributing Email: The Campaign"
permalink: /2020/anatomy-of-a-valak-distributing-email/the-campaign/
description: "Draft in progress"
date: 2020-06-03 00:00:00
tags:
- cybersecurity 300
- malware
- ioc
- iocs
- valak
---

About seven years ago I picked up IT consulting - to  keep my pockets padded in high school - and frequently took work from SMB clients in my sleepy hometown. I've been out of the business for a while, but got a text last week about a client's email being used to send out oodles of malware, so I took on a little pro bono work and started investigating. Admittedly, this also included brushing up on email security, as I've been getting rusty.

What initially struck me about this was that the emails sent were well-crafted, and while simple or a little out of place, were written and formatted in an expected fashion to more readily trick users. Running this down, I uncovered interesting facts about how the attack was pulled off which are in-line with the growing complexity of the security landscape.

Finally, I downloaded and analyzed samples to determine that this was a spearphishing campaign designed to convince users to install the [Valak](https://www.cyberscoop.com/valak-malware-cybereason-data-theft/) malware, giving attackers varied control over user systems to install plugins in its ecosystem (which is actually *so* cool) or download common malware pairings, such as [Ursnif/Gozi](https://attack.mitre.org/software/S0386/) or [IcedID](https://securityintelligence.com/new-banking-trojan-icedid-discovered-by-ibm-x-force-research/).

This post will focus more on the email compromise and distribution of Valak itself, rather than disassembly of Valak and Valak's modular framework, which has been well-documented by [Cybereason](https://www.cybereason.com/blog/valak-more-than-meets-the-eye) with what appears to be the same version I saw in the wild. I'll link their analysis again at the bottom so you can use their post to follow this story all the way from compromise, to distribution, to operation and secondary infection.

## How Did it Work?