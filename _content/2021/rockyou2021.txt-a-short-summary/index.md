---
layout: post
title: "rockyou2021.txt - A Short Summary"
permalink: /2021/rockyou2021.txt-a-short-summary/
description: "Thanks to an anonymous Redditor, I obtained a copy of rockyou2021.txt. It's easily the largest wordlist I have - but size isn't everything, and in rockyou2021.txt's case I think it's a detriment overall. You can download rockyou2021.txt here for your own research and projects."
date: 2021-06-09 00:00:00
tags:
- wordlist
- offensive_security
---

rockyou2021.txt flew on to the scene a couple days ago with significant news coverage:

* **"Hackers expose 8.4 billion passwords online - your security is at risk,"** howls [Laptop](https://www.laptopmag.com/news/hackers-expose-84-billion-passwords-online-your-security-is-at-risk), dying for clicks
* **"This might be the mother of all password leaks, with billions of credentials exposed,"** preaches [Yahoo](https://www.yahoo.com/entertainment/might-mother-password-leaks-billions-001204813.html), missing the point entirely
* **"Billions of passwords leaked online from past data breaches,"** says [TechRepublic](https://www.techrepublic.com/article/billions-of-passwords-leaked-online-from-past-data-breaches/), who are closest to the mark

The unfortunate truth is, the consumer security news cycle hasn't bothered to check their notes before claiming Armageddon - *again*.

## What is rockyou2021.txt?

rockyou2021.txt is a compilation of dictionaries, breached words, and probable passwords, released by kys234 on RaidForums (a forum often catering to cybercrime). The original thread is available [here](https://raidforums.com/Thread-82-billion-rockyou2021-passward-list-dictionary), and allows anyone (researchers, threat actors, oh my!) to download and redistribute this compilation.

But while rockyou2021.txt is a new compilation of many things, none of them are actually new. Here's what's inside:

* The [CrackStation Dictionary](https://crackstation.net/crackstation-wordlist-password-cracking-dictionary.htm) - a compilation of known password leaks and old breaches, words in Wikipedia articles, and some books from Project Gutenberg.
* Hack3r.com's [Wikipedia Wordlist](https://www.hack3r.com/forum-topic/wikipedia-wordlist) - another source of words appearing in Wikipedia.
* Daniel Meissler's [SecLists/Passwords](https://github.com/danielmiessler/SecLists/tree/master/Passwords) - common words, permutations, default credentials, captured passwords from honeypots, and more - many separate entities to assist in password cracking attempts.
* berzerk0's [Probable-Wordlists](https://github.com/berzerk0/Probable-Wordlists) - known passwords and dictionaries used in Ben's research in password trends.
* Passwords from [Weakpass](https://weakpass.com/) - mostly wordlists and real passwords.
* COMB - the Combination of Many Breaches list (3.8 billion records) from earlier this year, another amalgam of known passwords this wasn't itself a new breach, but [made the news anyway](https://cybernews.com/news/largest-compilation-of-emails-and-passwords-leaked-free/).

... and a couple other minor sources, for a total of 8.4 billion records (after cleaning and deduplication).

While I have a screenshot of the original thread [here](/2021/rockyou2021.txt-a-short-summary/source.png) in case it's edited or removed, I wanted to write these out to make it clear that the majority of this compilation was already 100% free, 100% available, and therefore 100% not a reason to sound any alarms. In fact, *none of this is new*, any news provider that said you should change your passwords immediately due to the existence of rockyou2021.txt needs a slap on the wrist and a cold shower.[^slap]

## Is rockyou2021.txt useful?

**Maybe.**

It's definitely not useful as a "password list" or "breached password list," and it'd be a mistake to think of it as one, despite many news sites suggesting that it's the largest password breach ever. Troy Hunt [tweeted](https://twitter.com/troyhunt/status/1402358364445679621) about rockyou2021.txt about as quickly as it was released, and said the following:

>Unlike the original 2009 RockYou data breach and consequent word list, these are not “pwned passwords”; it’s not a list of real world passwords compromised in data breaches, it’s just a list of words and the vast majority have *never* been passwords.
> Just do the maths: about 4.7B people use the internet. They reuse passwords like crazy not just across the services each individual uses, but different people use the same passwords. Then, only a small portion of all the services out there have been breached.
> ...
> This list is about 14 times larger than what’s in Pwned Passwords because the vast, vast majority of it isn’t passwords. Word lists used for cracking passwords, sure, but not real world passwords so they won’t be going into [Have I Been Pwned](https://haveibeenpwned.com/).

Despite not being a password list, could it be useful when cracking passwords? I'd wager "in certain situations." kys234 (the author of the list) made a couple tradeoffs to put this into one mega list, and these might be bad for the utility of the list:

* **ASCII-only**: kys234 explicitly removed any non-ASCII characters, and limited password length to 20 characters. This makes for a very clean list, in stark contrast to other password breaches or dictionaries which are often very messy or unformatted, and can take time to clean before being usable. However, this also makes the list substantially less useful for international targets - any non-English speaker may prefer to use Unicode characters, and those passwords or dictionary items have been removed.
* **Single list**: kys234 also elected to make this a single file instead of multiple files sorted by type. Many of the lists that kys234 pulled from are explicitly separated into their sources - dictionaries such as those derived from Wikipedia and Project Gutenberg are kept separate from breached passwords. This is because password crackers may want to use them separately or applying different permutations to them. For example, checking known passwords first, or only applying permutations to English-language words when attacking an English-language target.

So while it might be a list worth keeping in a password cracker's arsenal, it's not suddenly going to become their default. But if you do want it in your arsenal, or just want to have a look for yourself ...

## Download

Thanks to a Redditor who wishes to remain anonymous, I have obtained a copy of rockyou2021.txt and have prepared it for redistribution via torrent. The torrent contains rockyou.txt, 7z compressed into a split archive of two files, for a total compressed size of ~12.8 GB. The uncompressed size of rockyou2021.txt is a whopping ~92 GB, so be sure you have enough space. The torrent is currently being seeded at 20 Gbps, but please help maintain a healthy seed swarm.

A torrent file is available [here](/2021/rockyou2021.txt-a-short-summary/rockyou2021.torrent), or you can use this [magnet link](magnet:?xt=urn:btih:JEQMEEFTBXT35RJ3GUTGXU7HP3HBU5P6&dn=rockyou2021.txt%20dictionary%20from%20kys234%20on%20RaidForums&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce).

After downloading, you can uncompress these with the command `7z x rockyou2021.txt.7z.001`, or on Windows simply right-click the first file (`rockyou2021.txt.7z.001`) and hit "Extract" - 7zip will be aware of the other split file and will extract the entire wordlist without problem.

## TL;DR

**rockyou2021.txt is not**: a breach, a list of breached passwords, anything substantively new, or a sufficient reason to change your passwords (*on its own*).

**rockyou2021.txt is**: a wordlist which includes mostly English-language words, possible passwords, and known breached passwords. All of which was known & publicly available prior to this point.

**You should**: take this time to identify news sources which used fearmongering to draw readers in on this subject in instead of facts, and unfavorite/unsubscribe from/block those sources.

## Appendix

[^slap]: I want to especially call out Yahoo for doing a shit job, with their monstrous take of *"If you’re reading these words, suffice it to say you probably need to change your passwords. Today, even."* To you I say: **do better**. It's not hard - TechRepublic and CyberNews did a great job: advising users to try a data leak checker such as HIBP *first*, using a password manager, and enabling multifactor authentication. This is a pragmatic take, instead of an alarmist one.
