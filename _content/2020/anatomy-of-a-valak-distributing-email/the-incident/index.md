---
layout: post
title: "Anatomy of a Valak-Distributing Email: The Incident"
permalink: /2020/anatomy-of-a-valak-distributing-email/the-incident/
description: "A beginner-friendly post about email, collecting evidence, forming hypotheses, and responding to a real-world incident. Batteries, references, and source materials included."
date: 2020-06-02 00:00:00
tags:
- cybersecurity 200
- malware
- incident response
- email
---

About seven years ago I picked up IT consulting to keep my pockets padded in high school, and frequently took work from SMB clients in my sleepy hometown. I've been out of the business for a while, but got a text last week about a client's email being used to send out a handful of malware. I'm also rustier than I'd like on email security topics & trends, so I decided to pitch in some free hours in the spirit of a little security adventure.

What immediately struck me about this was that despite targeting a very small business (10-20 employees), this was exceptionally well-done. The malicious emails sent were generic, but while they were out of place, they were written and formatted in an expected fashion to more readily trick users. There was nothing that I uncovered about the malicious emails themselves that felt "sloppy" - everything looked normal-ish, and anything that had a traceable reputation (IPs, email servers, etc.) had a perfect record. The only thing that would have tripped an alarm is, well, the malware.

This post will focus more on discovering, gathering evidence for, and responding to a potential small-scale email security issue. To throw a wrench in the information machine, it's an all-remote task without access to impacted systems - only word of mouth and maybe a little external help - so we'll have to carefully establish our claims throughout. Where possible, I've made this batteries-included and attached screenshots, text dumps, etc. so novice security engineers can learn more about email-based incidents.

This is the first of two posts I have on the subject, the second will be coming out within the next day or so with more [Valak](https://www.cyberscoop.com/valak-malware-cybereason-data-theft/)-specific campaign information, IOCs, security trends, and key detection/prevention details.

So, let's walk through the incident.

## Initial Contact

On the morning of May 28th, 2020, a former client of mine has a potential incident happen with their email. We'll call them [Alice](https://en.wikipedia.org/wiki/Alice_and_Bob). Alice does a lot of client-facing work with their email, and so they can't afford to have serious disruptions to their email (such as getting blacklisted for spam/malware). A couple of Alice's contacts gave them a call to say they had a suspicious-looking email bearing Alice's name, signature, and sending address in their inbox - including a mystery attachment they didn't want to open. Alice took excellent next steps, including:

- Starting a scan on their computer using their paid antivirus provider - all clean.
- Checking their email provider's inbox, outbox, and trash - finding nothing amiss.
- Sending out mass communications asking their contacts not to open suspicious emails.
- Asked coworkers if they'd been emailed or received complaints about malicious emails - none.

At that point, Alice reached out to me over text and email, sending a copy of a suspicious email one of their clients forwarded back to them. Minus the generic names and contact information, it looked like this:

{:refdef: style="text-align: center;"}
![gone phishing](/2020/anatomy-of-a-valak-distributing-email/email-1.png)
{: refdef}

It was simple, but well in-line with Alice's normal formatting and had a pixel-perfect signature, both the format and details were correct. We couldn't establish whether or not all the other emails that went out were similar - since we could only see the one - so I began to investigate and rule out potential attack vectors.

## Gathering Evidence

Right then I actually didn't have too much evidence of an incident that directly impacts Alice's account integrity. Something, somewhere, managed to send a nasty-looking email attached to what *appears* to be an existing thread, but how? Does this represent a breach, or is it just a reputation-tarnishing drive-by?

#### Possibility A: Email Forgery

Email itself has exceptionally old roots from back in the day when [ARPANET](https://en.wikipedia.org/wiki/ARPANET) didn't exist, and while it has been slowly carried out of the dark ages, security extensions for things we normally take for granted are not implemented universally.

Skip over this section if you're an email guru, but in short, the problem is this: Simple Mail Transfer Protocol ([SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol), the forwarding component of the store-and-forward model) permits any computer to send email claiming to be from any source address. You read that right. Without additional technologies we'll talk about in a second, **any computer** can claim to be **any source address**. Can you imagine the chaos of one hundred state-sponsored threat actors vying for attention using [@POTUS](https://twitter.com/potus) on Twitter? No? Email has been around and (at a basic level) mostly unchanged since before we could have conceived of any of that as a problem, and no matter how much I dislike it, that is generally as good a testament as software can get to its tenacity.

So if you *don't* want people to issue emails claiming they're you or, whoops, [government agencies](https://www.scmagazine.com/home/security-news/states-lack-of-dmarc-adoption-ups-risk-of-covid-19-email-spoofing-scams/,) as easily as renting a VPS with adequate sender reputation, there are few protocols you can implement to protect your email server. Principally, these are Sender Policy Framework ([SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework)), DomainKeys Identified Mail ([DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail)), and Domain-based Message Authentication, Reporting and Conformance ([DMARC](https://en.wikipedia.org/wiki/DMARC)). Taken together, [DMARC and [SPF or DKIM]] gives email stronger fraud protection, specifically against forged sender email addresses, by:

- SPF: Publishing DNS records to list authorized hosts or IP addresses that can send email for that domain. The receiver can then look up the presumed domain's SPF records and validate the sending host is in the SPF whitelist.
- DKIM: Affixing a signature tied to a specific domain name to each outgoing email. The receiver can then look up the claimed sending server's public key via DNS and validate the signature. This also guarantees some parts of the email have not been modified in transit.
- DMARC: Allows a sender domain to indicate that emails purporting to be from them must be using SPF and/or DKIM on a well-formatted `From:` field. DMARC also provides what to do if an email fails either check, as well as how to report violations back to the sending email server.

Checking Alice's email servers with [MxToolBox](https://mxtoolbox.com/SuperTool.aspx) for convenience, SPF, DKIM, and DMARC are supported. However, DMARC in particular sets a very low standard with `Policy: none` - SPF/DKIM failures are simply ignored, rather than quarantining or rejecting the email outright ([me irl](https://www.youtube.com/watch?v=zFjkteBnYHw)). At this point it's pretty possible that Alice's email could have been forged, and there are reasonable circumstances to support it. The weak DMARC would have allowed even a complete forgery through unless the recipient had enabled strong [anti-phishing](https://www.techrepublic.com/article/why-g-suite-admins-should-enable-gmails-advanced-anti-phishing-and-malware-settings/) protections - email providers tend to [honor](https://help.yahoo.com/kb/review-yahoo-mail-deliverability-faq-sln24439.html) those settings. Further, forging emails which are "replying" to fake threads is a well-known contemporary method for [malware](https://blog.trendmicro.com/trendlabs-security-intelligence/phishing-campaign-uses-hijacked-emails-to-deliver-ursnif-by-replying-to-ongoing-threads/) distribution and [spearphishing](https://www.valimail.com/blog/spear-phishers-use-fake-email-threads-fake-spf-authentication/).

That all said, I had a nagging suspicion about the Alice's signature. All of that information was public knowledge just an internet search or two away, and Microsoft Office's signature slate blue text wasn't uncommon for signatures, but it was too perfect - the right font size, the right spacing, the right order for information. If we can confirm that the thread itself was not forged, we know that a compromise has happened somewhere, but we'll need some more data.

#### Possibility B: Email Compromise

On a hunch, I reached out to [Bob](https://en.wikipedia.org/wiki/Alice_and_Bob) (another former client) who had connected Alice & I some years back to find out if they'd received "any" suspicious emails today. As luck would have it, they did receive an identical email from Alice that morning: a reply to an existing thread which looked exactly like Alice, but sounded a little suspicious, and had an unexpected encrypted attachment. It had the same format, but a different thread (one Bob confirmed *definitely* existed before), so it was time to look more seriously at vectors to get in to Alice's account.

Since email header information is rewritten by most servers and not preserved anywhere, getting an original copy was the only hope of finding out more about where these malicious emails came from. I was able to walk Bob through dumping the malicious email to `.eml` in order to preserve its headers, and was rewarded with a wealth of information. Let's look through things together, starting with a selection of the headers from the malicious email:

```
Received: by <relay.email_server.com> (Authenticated sender: <compromised_email>) with ESMTPSA id <id>
	for <target_email>; Thu, 28 May 2020 09:31:09 -0400 (EDT)
X-Sender-Id: <compromised_email>
Received: from localhost (172-223-074-245.res.spectrum.com [172.223.74.245])
	(using TLSv1.2 with cipher DHE-RSA-AES128-GCM-SHA256)
	by 0.0.0.0:587 (trex/5.7.12);
	Thu, 28 May 2020 09:31:11 -0400
Date: Thu, 28 May 2020 13:30:55 +0000
To: <target_email>
From: <sender_name> <compromised_email>
Subject: Re: <exiting_thread>
Message-ID: <message_id>
X-Mailer: Microsoft Office Outlook 12.0
References: <thread_id>
```

The rest of the (sanitized for anonymity) headers are available [here](/2020/anatomy-of-a-valak-distributing-email/the-incident/headers-malicious.txt) as well. Don't worry, they were still pretty unreadable before I stripped out the identifying information - for your own investigations I strongly recommend Google's [Messageheader](https://toolbox.googleapps.com/apps/messageheader/) tool. But even amid the semi-formatted text blobs, it's becoming painfully clear: someone logged in to Alice's SMTP server as an `Authenticated sender:` for Alice's email. This is further validated by the SPF and DKIM information - while SPF is 'neutral', the DKIM signature appeared to be valid.

Lookine at the listed connecting IP, 172.223.74.245 is a residential Spectrum/Charter address per its [WHOIS](/2020/anatomy-of-a-valak-distributing-email/the-incident/spectrum-whois.txt) and has a clean bill of health - no suspicious ports open that I can find, no appearances in public threat or spam [feeds](https://www.ipvoid.com/ip-blacklist-check/) as of writing either. The only thing amiss is its presumed geolocation - while this can be [inaccurate](https://support.maxmind.com/geoip-faq/geoip2-and-geoip-legacy-databases/how-accurate-are-your-geoip2-and-geoip-legacy-databases/), it's reported as Cleburne, Texas, USA by all major [GeoIP](https://www.iplocation.net/) services as of writing. A far cry from Upstate NY.

Cross-referencing that with the X-Mailer field, Outlook v12.0 is [Outlook 2007](https://www.msoutlook.info/question/200) - a far cry from the Windows 10 era, and unlikely to be Alice's workplace's preferred email platform (Office 365 last I knew, aka Outlook v16.0). That to me indicates 172.223.74.245 is more likely a compromised machine and part of a relatively high-quality botnet used for specific email campaigns - we'll explore that theory in the Campaign post.

*But could this be malware on Alice's machine all along?* Maybe. To confirm Alice is not the sender, I also checked over Alice's most recent email headers (available [here](/2020/anatomy-of-a-valak-distributing-email/the-incident/headers-normal.txt) in their full sanitized glory) when they forwarded information to me:

```
Received: from <smtp.email_server.com> (unknown [<smtp.email_server.com_ip>]) by <relay.email_server.com_ip> (SMTP Server) with ESMTPS id <esmpts_id>; Thu, 28 May 2020 13:11:13 -0400 (EDT)
X-Sender-Id: <uncompromised_email>
Received: from <smtp.email_server.com> ([UNAVAILABLE]. [<smtp.email_server.com_ip>]) (using TLSv1 with cipher DHE-RSA-AES256-SHA) by 0.0.0.0:25 (trex/5.7.12); Thu, 28 May 2020 13:11:13 -0400
Received: from <mbx.email_server.com>  ([<mbx/mex_ipv6>]) by <hub.email_server.com>  ([<mbx/hub_ipv6>]) with mapi id <id>; Thu, 28 May 2020 12:11:12 -0500
From: <sender_name> <uncompromised_email>
To: <my_email>
Subject: <new_thread>
```

Unfortunately, that's pretty much case closed: Alice's email password has been breached. Looking carefully at the first hop, Alice's email client is configured to use an [Exchange](https://en.wikipedia.org/wiki/Microsoft_Exchange_Server) server, and communicates first through MAPI, not over SMTP. Any malware on Alice's computer would be better-served by not tampering with settings (a riskier/detectable activity for little benefit) when trying to distribute spam. Combined with the low-version X-Mailer and unlikely source IP prior, it's highly unlikely that this breach was due to malware on Alice's machine - much more likely  their password was phished, guessed, or reused in a breach.

## Presenting Evidence

Alice and I hopped on a call to go over details and next steps, 

Alice & I hopped on a phone call to go over the details as we saw them from both sides of the fence, and confirmed the following attack path:

- Alice had been receiving infrequent spam emails that were seeking a Bitcoin ransom to not reveal a phrase which was "close" to one of their passwords. This could indicate the Alice has used password permutations before, or that some of Alice's passwords can be easily guessed with personal information.
- A malicious program logged in to Alice's email, downloading a number of recent threads. I suspect the attacker used POP3, as IMAP would have pushed email state information (ex. whether or not an email is read) up to Alice's server.