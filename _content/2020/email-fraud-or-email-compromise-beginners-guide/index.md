---
layout: post
title: "Email Fraud or Email Compromise: A Beginner's Guide"
permalink: /2020/email-fraud-or-email-compromise-beginners-guide/
description: "A student-friendly post about email, collecting evidence, forming hypotheses, and responding to a real-world incident with imperfect information. Batteries, references, and source materials included."
date: 2020-09-27 00:00:00
tags:
- malware
- phishing
- email
- guide
---

About seven years ago I picked up IT consulting to keep my pockets padded in high school, and frequently worked small jobs with SMB clients in my sleepy hometown. I've been out of the business for a while, but got a text from a client requesting security support for an incident where their email was used to send out a bunch of malware-laden emails. So, I pitched in a few hours and had a fun security adventure refreshing my knowledge on the ambient nightmare that is email security.

What immediately struck me about this was that despite targeting a very small business (10-20 employees), this malware campaign was exceptionally well-done. From initial compromise all the way to delivered emails, every part of this attack was executed using modern techniques, minimizing the chance that emails from this campaign would be detected and stopped.

This post will focus principally on discovering, gathering evidence for, and responding to a potential email security issue. To throw a wrench in the information machine, it's an all-remote task without access to impacted systems - only written and voice correspondence with a few ex-clients - so we'll have to carefully establish our claims throughout.

Where possible, I've made this batteries-included for security beginners and attached screenshots, text dumps, etc. so novice security engineers can learn more about email-based incidents. All information has been sanitized to maintain the privacy of impacted clients. So, let's jump in!

## Initial Contact

On the morning of May 28th, 2020, a former client of mine has a potential incident happen with their email. We'll call them [Alice](https://en.wikipedia.org/wiki/Alice_and_Bob). Alice does a lot of client-facing work with their email, and so they can't afford to have serious disruptions to their email (such as getting blacklisted for spam/malware). A couple of Alice's contacts gave them a call to say they had a suspicious-looking email bearing Alice's name, signature, and sending address in their inbox - including a mystery attachment they didn't want to open. Alice took excellent next steps, including:

- Starting a scan on their computer using their paid antimalware provider - all clean.
- Checking their email provider's inbox, outbox, and trash - finding nothing amiss.
- Sending out mass communications asking their contacts not to open suspicious emails.
- Checking with coworkers, who hadn't heard anything similar from their clients.

At that point, Alice reached out to me over text and email, sending a copy of a suspicious email one of their clients forwarded back to them. After removing their personal information, it looked like this:

{:refdef: style="text-align: center;"}
![gone phishing](/2020/email-fraud-or-email-compromise-beginners-guide/email.png)
{: refdef}

It was simple, but well in-line with Alice's normal formatting and had a pixel-perfect signature, both the format and details were correct. We couldn't establish whether or not all the other emails that went out were similar - since we could only see the one - so I began to investigate and rule out potential attack vectors.

## Gathering Evidence

Right then I actually didn't have too much evidence of an incident that directly impacts Alice's account integrity. Something, somewhere, managed to send a nasty-looking email attached to what *appears* to be an existing thread, but how? Does this represent a breach, or is it just a reputation-tarnishing drive-by?

#### Email Security Fundamentals

Email itself has exceptionally old roots from the era of [ARPANET](https://en.wikipedia.org/wiki/ARPANET), and while it has been slowly carried out of the dark ages, security extensions for things are not implemented universally.

The core problem that's troubling us here is this: Simple Mail Transfer Protocol ([SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol), the forwarding component of the store-and-forward model) permits any computer to send email claiming to be from any source address. You read that right. Without additional technologies we'll talk about in a second, **any computer** can claim to be **any source address**. Can you imagine the chaos of one hundred state-sponsored threat actors vying for attention using [@POTUS](https://twitter.com/potus) on Twitter? No? Email has been around and (at a basic level) mostly unchanged since before we could have conceived of any of that as a problem, and no matter how much I dislike it, that is generally as good a testament as software can get to its tenacity.

So if you *don't* want people to issue emails claiming they're you or, whoops, [government agencies](https://www.scmagazine.com/home/security-news/states-lack-of-dmarc-adoption-ups-risk-of-covid-19-email-spoofing-scams/) as easily as renting a VPS with adequate sender reputation, there are few protocols you can implement to protect your email server. Principally, these are Sender Policy Framework, DomainKeys Identified Mail, and Domain-based Message Authentication, Reporting and Conformance. Taken together, these frameworks give email stronger fraud protection by:

- [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework): Publishing DNS records to list authorized hosts or IP addresses that can send email for that domain. The receiver can then look up the presumed domain's SPF records and validate the sending host is in the SPF whitelist.
- [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail): Affixing a signature tied to a specific domain name to each outgoing email. The receiver can then look up the claimed sending server's public key via DNS and validate the signature. This also guarantees some parts of the email have not been modified in transit.
- [DMARC](https://en.wikipedia.org/wiki/DMARC): Allows a sender domain to indicate that emails purporting to be from them must be using SPF and/or DKIM on a well-formatted `From:` field. DMARC also provides what to do if an email fails either check, as well as how to report violations back to the sending email server.

#### Possibility A: Email Forgery

Checking Alice's email servers: SPF, DKIM, and DMARC are supported. However, the DMARC policy is `none`, so SPF or DKIM failures will not result in quarantining or rejecting emails by recipient mailservers. However, there is a silver lining - just the presence of DMARC allows mailserver administrators to [track potential misuse](https://dmarc.org/wiki/FAQ#Does_DMARC_.E2.80.9Cp.3Dnone.E2.80.9D_affect_the_way_my_emails_get_delivered.3F). While Alice's service provider should have been alerted to these if it was forgery, security metrics and alerting aren't guaranteed to be implemented or error-free.

So at this point it's *possible* that Alice's email could have been forged. Their DMARC policy would allow a forgery through unless the recipient had enabled strong [anti-phishing](https://www.techrepublic.com/article/why-g-suite-admins-should-enable-gmails-advanced-anti-phishing-and-malware-settings/) protections, since email providers tend to [honor](https://help.yahoo.com/kb/review-yahoo-mail-deliverability-faq-sln24439.html) those settings normally. Forging emails which are "replying" to fake threads is also a well-known method for [malware distribution](https://blog.trendmicro.com/trendlabs-security-intelligence/phishing-campaign-uses-hijacked-emails-to-deliver-ursnif-by-replying-to-ongoing-threads/) and [spearphishing](https://www.valimail.com/blog/spear-phishers-use-fake-email-threads-fake-spf-authentication/) campaigns, so it's possible this was a series of minor security mistakes rather than a compromised account.

That all said, I had a nagging suspicion about Alice's signature. All of that information was public knowledge just an internet search or two away, and Microsoft Office's signature navy text wasn't uncommon for signatures, but it was too perfect - the right font size, the right spacing, the right order for information. If we can confirm that the thread itself was not forged, we know that a compromise has happened somewhere, but we'll need some more data.

#### Possibility B: Email Compromise

On a hunch, I reached out to [Bob](https://en.wikipedia.org/wiki/Alice_and_Bob) (another former client) who had connected Alice & I some years back to find out if they'd received "any" suspicious emails today. As luck would have it, they did receive an identical email from Alice that morning: a reply to an existing thread which looked exactly like Alice, but sounded a little suspicious, and had an unexpected encrypted attachment. It had the same format, but a different thread (one Bob confirmed *definitely* existed before), so it was time to look more seriously at vectors to get in to Alice's account.

Since email header information is rewritten by most servers and not preserved anywhere, getting an original copy was the only hope of finding out more about where these malicious emails came from. I was able to walk Bob through dumping the malicious email to `.eml` in order to preserve its headers, and was rewarded with a wealth of information. Let's take a look, starting with a selection of the headers from the malicious email:

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

The rest of the headers are available [here](/2020/email-fraud-or-email-compromise-beginners-guide/headers-malicious.txt) as well, but unfortunately it's clear: something logged in to Alice's SMTP server as an `Authenticated sender:` for Alice's email. This is certified by the SPF and DKIM information - while SPF is 'neutral', the DKIM signature was valid and correct, so Alice's email server had signed the email.

Interestingly, the listed connecting IP (172.223.74.245) is a residential Spectrum/Charter address per its [WHOIS](/2020/email-fraud-or-email-compromise-beginners-guide/spectrum-whois.txt) and has a clean bill of health - no suspicious ports open, and no appearances in public threat or spam [feeds](https://www.ipvoid.com/ip-blacklist-check/). The only thing amiss is its presumed geolocation - while this can be [inaccurate](https://support.maxmind.com/geoip-faq/geoip2-and-geoip-legacy-databases/how-accurate-are-your-geoip2-and-geoip-legacy-databases/), it's reported as Cleburne, Texas, USA by all major [GeoIP](https://www.iplocation.net/) services as of writing - far from NY, USA.

To confirm this is not likely malware on Alice's machine (just in case GeoIP providers got this wrong), we'll compare those malicious headers against Alice's email headers (available [here](/2020/email-fraud-or-email-compromise-beginners-guide/headers-normal.txt)) from when they forwarded information to me:

```
Received: from <smtp.email_server.com> (unknown [<smtp.email_server.com_ip>]) by <relay.email_server.com_ip> (SMTP Server) with ESMTPS id <esmpts_id>; Thu, 28 May 2020 13:11:13 -0400 (EDT)
X-Sender-Id: <uncompromised_email>
Received: from <smtp.email_server.com> ([UNAVAILABLE]. [<smtp.email_server.com_ip>]) (using TLSv1 with cipher DHE-RSA-AES256-SHA) by 0.0.0.0:25 (trex/5.7.12); Thu, 28 May 2020 13:11:13 -0400
Received: from <mbx.email_server.com>  ([<mbx/mex_ipv6>]) by <hub.email_server.com>  ([<mbx/hub_ipv6>]) with mapi id <id>; Thu, 28 May 2020 12:11:12 -0500
From: <sender_name> <uncompromised_email>
To: <my_email>
Subject: <new_thread>
```

Looking at the first hop, Alice's email client is configured to use an [Exchange](https://en.wikipedia.org/wiki/Microsoft_Exchange_Server) server, and communicates first through MAPI, not over SMTP. Another note is that an X-Mailer header is listed claiming that the email was sent with Outlook v12.0 ([Outlook 2007](https://www.msoutlook.info/question/200)) - not Alice's workplace's email platform (Office 365, aka Outlook v16.0). Taking that information alongside the IP used to send the emails, it appears that the malicious email was most likely sent by a compromised residential machine.

## Incident Remediation

Unfortunately for Alice, that's also case closed: their email password has likely been breached, so we set up a call to make sure I didn't miss anything and go over next steps.

It turns out that Alice had been receiving infrequent spam emails that were seeking a Bitcoin ransom to not reveal a phrase which was "close" to one of their passwords. This indicates the Alice has used password permutations before, or that some of Alice's passwords can be easily guessed with personal information. Either way, they're practices worth avoiding, so Alice and I talked through [better password security practices](https://www.cisecurity.org/newsletter/why-strong-unique-passwords-matter/).

There wasn't much for me to help with that Alice, being the phenomenal client they are, hadn't already done:
* The breach was contained to just Alice's email account - so Alice's computer was secure and their other accounts used "different" passwords. Alice was advised to review their other passwords and consider a password manager moving forward.
* Alice confirmed that no sensitive information (of Alice's or Alice's clients) was accessible in Alice's email history, deleted items, etc.
* Alice had already sent notifications to potentially impacted clients informing them of the incident and asking them not to open the encrypted file.

Additionally, I compiled evidence and sent a detailed account of the incident to [Spectrum's abuse team](https://community.spectrum.net/discussion/162066/reporting-internet-abuse) so they could notify the infected customer and (ideally) prevent further misuse.

No further email security incidents have occurred since Alice switched to stronger passwords. Ideally, Alice's business would move to an email provider which supports 2FA and has stronger DMARC settings in the future - though I can't complain much about their DMARC, they're still doing better than 65% of the [SaaS top 1000](https://s3.amazonaws.com/250ok-wordpress/wp-content/uploads/2018/07/31203230/Aggregate-DMARC-Report-2018.pdf) were in 2018, a fine feat for a small and generally low-risk business.

## Further Work

But what was the malicious attachment all along? Our culprit was [Valak](https://www.cyberscoop.com/valak-malware-cybereason-data-theft/) - a modular malware which matured quickly over 2019-2020. It's used by threat actors principally to target Exchange servers in the United States and Germany, sending phishing emails to any contacts it can find.

I am writing a follow-up to this article which will deep-dive on the significance of how this Valak-distributing campaign worked and a dissection of what makes it so special. Between the squeaky-clean IP reputation, using an source in the same country as the target for the attack, and excellent use of existing threads to dupe users - bullshit security "solutions" won't last long in this advancing threat landscape.