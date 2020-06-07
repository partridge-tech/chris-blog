---
layout: post
title: "EIP Cards Made Fraud Easier"
permalink: /2020/eip-cards-made-fraud-easier/
description: "Who thought distributing debit cards in unmarked envelopes that predominantly reference a non-.gov domain was a good idea? I almost threw it away, then thought I had my identity stolen, then got so frustrated I wrote this post."
date: 2020-06-06 00:00:00
tags:
- eip card
- eip card safety
- vishing
- phishing
- social engineering
- scam
- rant
---

> If you need help validating that an "EIP Card" you received in the mail is valid, please see [this guide](/2020/eip-cards-made-fraud-easier/staying-safe/) - it'll save you a lot of time!

So for background, I have an [LLC](https://mns.llc), which means a physical address I am affiliated with is published in every United States incorporated company database known to humankind. As as consequence of that, I get a boatload of junk mail. This ranges from scam companies claiming there is additional legal filing that needs to be done for my LLC (there isn't), to banks wanting me to get high-interest business loans (hell no), to companies sending me unsolicited thousand-page industrial shopping catalogues ([why](https://www.youtube.com/watch?v=zFjkteBnYHw)).

Now, this post isn't about how junk mail generates [millions of tons](https://web.archive.org/web/20081031060724/http://donotmail.org/downloads/ClimateReport.pdf) of greenhouse gases. That's a travesty for sure, but it's not what got me riled up *today*. This is about one particular piece of 'junk' mail - one that millions of Americans have had to be [warned](https://www.cnbc.com/2020/06/05/how-to-replace-your-stimulus-debit-card-if-you-threw-it-away.html) *not* to throw out by accident. What was it? My COVID relief money, of all things.

Since I'm a certifiable security goon, this post will talk about the many issues with how certain CARES Act funds are being distributed. I'll critique some bad advice the internet has had for validating EIP cards, and provide recommendations on how to make this better, both now for future distribution of relief funds.

A follow-on post [here](/2020/a-believable-attack-using-eip-cards/) details how to construct a believable scam that makes use of how disorganized everything about EIP Cards is, as well - so all this "discreet" packaging and news hype was for nought. In fact, it might make it worse.

## What is the CARES Act?

But first - the basics. For any non-Americans browsing around, the [CARES Act](https://home.treasury.gov/policy-issues/cares) is a ~$2,200,000,000,000 relief bill in response to economic collapse due to nCoV-19. Among many other things, the median American could expect a one-time rebate of $1,200. Married filers with children, people who earn more than $75k, etc. are all eligible for different payouts according to a helpful payscale provided by the [Tax Foundation](https://taxfoundation.org/federal-coronavirus-relief-bill-cares-act/#16).

The exact details are not relevant, save for one bit: little old me should be getting the $1,200 moderate-income individual-filer no-kids rebate, but up until today, I hadn't seen a red cent of it. My roommate [Josh](https://jibby.org/) had received his rebate some time ago, in the form of a well-annotated direct deposit to his bank account from the federal government. It was no mystery where the money had come from or what it was for - everything was aboveboard.

## Surprises in the Mail

Today, I got my rebate in a very different form. An Economic Impact Payment ("EIP") debit card showed up without warning in my mailbox (as is has or will for roughly [four million](https://www.freep.com/story/money/2020/05/27/stimulus-money-visa-debit-cards-mail/5267885002/) Americans). What the EIP Card actually is is an alternate method of disbursing CARES Act relief money for people the IRS doesn't have banking information on file for. What it looked like was a scam, and let's break down what every suspicious detail was. A full photo archive is available [here](/2020/eip-cards-made-fraud-easier/letter/) for those curious, but we'll be covering most of the content in detail as it comes up in this rant.

#### The Envelope

The [envelope](/2020/eip-cards-made-fraud-easier/envelope-front.png) was presorted first class mail addressed solely to me - none of the "current resident" crap, which should be banned altogether. However, the sender was an entity that I had never heard of.

```
Money Network Cardholder Services
PO Box 247022
Omaha, NE 68124-7022
```

There are a couple things to break down here. The PO box being my obvious first choice - of most scams that I receive in the mail, I'd wager about 80-90% use a PO box. Very few reputable companies contact me with anything less than a full physical address that I can find on Google Maps. It's a trust thing. A PO box? You're anyone and anywhere. A physical address gives me doors to knock on - I never need to, but I like having the option.

And then second, of course, we have to talk about the name. "Money Network Cardholder Services" is generic, not trust-building, and is the furthest thing from any governmental entity name I've heard of. I would have been more trusting of "[Bitconnect](https://en.wikipedia.org/wiki/Bitconnect) [EDMchain](https://www.youtube.com/watch?v=e5nyQmaq4k4) Technologies" and that would have certainly been something I'd have bothered opening. Because to be totally honest, I was about to throw this out before I decided I'd have a little fun finding out what scam was being peddled to me today.

#### The Contents

Things didn't get much better once I opened the letter. Two sheets of paper were inside, let's start with the full-size paper. You'll note it has an America-themed debit card stuck to it with double-sided tape. The [letter](/2020/eip-cards-made-fraud-easier/metabank-front-card.png) opens with:

```
Authorization and Request for Service, Electronic Signature and Consent to Agreement

You acknowledge that you have read the materials provided to you, including the Terms and
Conditions, Balance and Transaction Limit Schedule for your Account, which can be found
at EIPCard.com (together, they are the "Cardholder Agreement") and agree to be bound by
their terms. A summary of terms and fees is also printed on the back.

You request that MetaBank N.A. open the Account and issue and activate the enclosed Card,
and understand that by retaining, activating or using the Card or Money Network Checks if
requested, you agree to the terms of the Cardholder Agreement and acknowledge that use of
the Card or Money Network Checks, if applicable, shall constitute your electronic signature
indicating such consent and acceptance.

You acknowledge that any term of the Cardholder Agreement, including the Fee Schedule, may
change at any time (and you will be provided with notice of such change if required by law)
and that your retention and use of Card account after the effective date of any such change
will constitute acceptance of the new terms or fees.
```

At this point I was pretty sure my identity had been [stolen](https://www.experian.com/blogs/ask-experian/5-steps-to-take-if-someone-opens-a-credit-card-in-your-name/) and someone just opened a new debit card in my name. I didn't ready *any* materials, I don't know of any Terms & Conditions, I didn't open an account at EIPCard.com, and I sure as hell don't want to be bound by any terms concerning MetaBank N.A. (another entity I've never heard of). The page continues into how to use a debit card, and the reverse contains a summary of specific terms and fee schedules.

There are only two things on this entire page that tell us anything substantive about the origin of the card. First, a "The Department of the Treasury" symbol in the top; nice touch, but also something I've seen in spam, so not something I trust. Second, *underneath the card* there is a [small dialogue](/2020/eip-cards-made-fraud-easier/metabank-front-clear.png) which says:

```
What is the Economic Impact Payment Card?

The Economic Impact Payment Card contains the money you are receiving as a result of the
Coronavirus Aid, Relief, and Economic Security Act (CARES Act).

Activate your Account to get started.
```

Let me repeat that for clarity. The **only** substantive text on this double-sided US A4 letter with tons of tiny text about a debit card that I did not sign up for is **hidden under the card itself**. I can't help but wonder, is this intentionally awful design? Or did your UX and marketing teams go on strike, so your substitute is a magician-in-training workshopping a stage reveal where they pull their head out of their ass, but haven't quite figured out how yet? You could have put that text anywhere else - really, anywhere, you could have hidden it in the fee schedule and I'd be less mad - for a more cohesive experience.

#### The (Other) Contents

The [final](/2020/eip-cards-made-fraud-easier/federal-front.png) piece of the puzzle was a little slip of paper included - 1/3rd of an A4 letter, single-sided. It's the first and only time we see anything that is recognizably governmental, the `irs.gov` domain.

```
Enclosed is your Economic Impact Payment Card

This prepaid debit card is being send to you on behalf of the U.S. Department of the
Treasury in place of a paper check. This Card contains the money you are receiving as a
result of the Coronavirus Aid, Relief, and Economic Security Act (CARES Act).

For additional information on Economic Impact Payments visit IRS.gov/EIP.

Safe * Convenient * Secure

Follow the enclosed instructions to activate your Card. Visit EIPCard.com to learn more.
```

However, the linked page (irs.gov/eip) didn't make any mention of the EIP Card, or any debit cards that are being distributed to Americans. I spent some time clicking around until I was finally able to find a section on the IRS site (hidden deep in the FAQ) that validates eipcard.com as a trusted source of CARES Act rebates, confirming that this was - shockingly - neither a scam nor my identity being stolen.

I called the EIP Card activation number, dutifully divulged the information I needed to access the card, and swiftly routed my $1,200 to my bank - away from this hot mess.

#### Digging Around Online

Was it possible that I just had a bad user experience, and missed an important detail that would have allowed me to validate this faster? Was I an outlier? Did Money Network Cardholder Services run out of envelopes that clearly denoted that this was my CARES Act rebate?

Unfortunately, my experience was in line with the experience of all Americans. News sites [reported](https://www.cnbc.com/2020/06/05/how-to-replace-your-stimulus-debit-card-if-you-threw-it-away.html) that something like this would happen, and pleaded with their readers not to throw out the junk mail they receive as there's a chance one of those letters might be your CARES Act rebate. However, few offered real advice for recognizing the card, and many did not provide safe guidance for validating that the EIP Card people received was real. This included:

- The [CFPB](https://www.consumerfinance.gov/about-us/blog/economic-impact-payment-prepaid-card/) (a federal entity) saying what you received is "not a scam" if the EIP Card came from "Money Network Cardholder Services" and has "VISA", "DEBIT", and "MetaBank, N.A." on the back. These are all easily forged with a fake card and bad return address. Though to their credit, they did provide the correct links and telephone numbers to call afterwards - you'd hope people didn't return to their letter after saying "yeah, it must be safe."
- [AARP](https://www.aarp.org/money/taxes/info-2020/stimulus-payment-debit-cards.html) advocated against searching online to validate the phone number you've been told to call. This is okay-ish to help avoid online scams, but dooms anyone with a fraudulent letter.
- While the [FTC](https://www.consumer.ftc.gov/blog/2020/05/what-know-about-economic-impact-payment-debit-cards) provides a good summary of what to do, even they reference that "the mailer will give you instructions on how to activate the card," which could be dangerous.

If you get a similar card, you may want to follow a safe guide for activating it, such as the one I've provided [here](/2020/eip-cards-made-fraud-easier/staying-safe/), which is also linked at the top and bottom of the page. It relies solely on securely connecting to the IRS site in order to determine facts and other trusted sources, and eschews nearly all use of the easily-forged paper letter.

## Making Fraud Easier

Like any financial device you have interacted with recently, activating the EIP Card requires dialing in the last four-to-six numbers of your Social Security Number. You know - that short, hard-to-replace number you can do almost anything with, like:

- Starting new lines of credit.
- Opening utilities and billing accounts.
- Filing fraudulent tax refunds.
- Steal unemployment or social security benefits.
- Calling my bank, pretending to be me, and resetting my passwords.

While this may be "Convenient," we're definitely not in "Safe" or "Secure" territory.

#### In the Name of Fraud Protection

Purportedly, the EIP Card was "[intentionally](https://www.washingtonpost.com/business/2020/06/01/faq-stimulus-debit-card/)" made "discreet" to "protect against" fraud and abuse. That's a myopic take at best, and assumes that the only attacks against Americans would be from people stealing or tampering with EIP Cards in transit. Though to be honest, I see those attacks as quite limited:

- A [porch pirate](https://www.dictionary.com/browse/porch-pirate) doesn't know your social security number and won't be able to activate the card readily.
- A more sophisticated theft without resorting to phishing would be stealing the envelope, opening it, copying the card details, replacing it in the original mailbox, and then hoping that they can use the card details between someone activating it and using the funds. This is plausible, but if someone is rifling through your mailbox, an extra 2 seconds to find the right envelope isn't stopping them.
- People in financially abusive relationships are certainly at risk here, but if that's the case, their partner will most likely have learned of the envelope anyway because of how much this has had to be publicized to prevent people throwing them out.

Making the EIP Card letters unrecognizable doesn't stop any meaningful malicious activity, it only serves to decrease trust & provide dangerous opportunities for fraud mailers. Nearly all other federal communications:

- Come from federal buildings, bearing federal markings.
- Are clear about what federal organization has sent them.
- Are engineered to at least be semi-readable and detail a clear process.

#### Creating New Opportunities

So now, people have been primed to expect a wordy, poorly-marked, fraudulent-looking letter in the mail, and been told to *trust* the contents of the letter. Anyone who wants to exploit people's confusion around EIP Card handling (and trust in the federal government) could assemble a low-material-cost letter, send it to people across the country, and direct them to call a fraudulent number. I explore practical attacks in my follow up post, which is available [here](/2020/a-believable-attack-using-eip-cards/) - including how a scam like this would work, how much its materials would cost, and whether or not it'd be worth it.

Per my research, it probably wouldn't be worthwhile to steal SSNs. [Vishing](https://en.wikipedia.org/wiki/Voice_phishing) attacks could be dangerous and profitable though, especially if you could drive your material and telephone costs down, because in piggybacking off EIP Cards you get a lot of rapport early on in a scam that you'd have to work much harder to cultivate otherwise.

## Remediation

What could have been done better by the Department of the Treasury to make this more trustworthy and less fraud-enabling? There are a several core areas that could be addressed, but only one area can be addressed without sending out new physical mail. Thankfully, this is the by-far most critical change to make.

The only recognizably-governmental page that's linked to by the EIP Card letters [irs.gov/eip](https://www.irs.gov/eip). There needs to be an easily-visible section (bold, highlighted, high-up - whatever) which includes:

- A link to the eipcard.com website.
- The telephone number that people should call to activate their EIP Card.
- A blurb that is very specific about the fact that you need to go to that site and/or call the number listed in order to activate your EIP Card, use NO other numbers.

That will help the most in streamlining the experience so Americans can reliably get information about their EIP Card, instead of searching the internet (and possibly getting bad information/telephone numbers etc.) or having to trust a random .com domain they've never heard of before (which sets this up for easy forgery, as outlined in practical attacks above). Most importantly, the change can be made *right now* - this will help solve the current confusion and helps streamline similar rebates in the future.

## Future Works

There's a lot more that could be done outside of the above which would require changes to the physical letter, but they're important to note for the future as well.

#### Trusted Links

Most importantly, I'd recommend that **ALL** links mentioned in the letter go to .gov domains. This creates a small but resolvable conflict: MetaBank and Money Network Cardholder Services are private entities which are servicing the EIP Card needs for the government. That's well and good - I understand the need for an external entity with infrastructure to handle this, and I also understand it would be improper for private entities to be given control of a .gov domain (ex. eipcard.gov is an unlikely-at-best solution).

However, a simple and reliable workaround would be to create a page at irs.gov/eipcard which provides sufficient information in one, reliable place about what the EIP Card is, how to access your EIP Card funds, and provides outbound links to private entities which are servicing that. That ensures that Americans are getting accurate information from a trusted source. Funnily enough, while researching for this article, I found out that something similar already exists - [usdebitcard.gov](https://www.usdebitcard.gov/) tracks USA-issued debit cards through MetaBank and provides information on them. Why wasn't this referenced?!

Having a single government site that details validation and activation also circumvents something we discussed above: because there was little trusted and straightforward content available to direct people to, news sites and secondary sources then have to figure out their own security guidance for their readership, which ranged from "fine" to "incredibly bad." Even major entities such as the CFPB (again, a *government entity*) provided semi-safe guidance.

#### Recognizable Source

Another thing to strongly consider changing is the return address. We went over possible rationales for why cards were sent "discreetly" in the "In the Name of Fraud Protection" section, and concluded that in-transit attacks present certain but limited opportunities.

In my opinion, it's better to absorb that risk and focus on maintaining trust from the federal government - any and all communications that are federal in nature but aren't extremely overt about it increase people's susceptibility to low-cost fraud relying on federal impersonation. An unknown-name PO box is a terrible precedent, and has lead to a lot of EIP Cards being [thrown out](https://www.washingtonpost.com/business/2020/06/01/faq-stimulus-debit-card/):

> “I opened an unmarked envelope, saw what looked like a credit card I hadn’t ordered from the Money Network, and I threw it out,” said Sarah Bardinone from New York City.

At least make the letters more readily identifiable with some sort of external notice that it's an EIP Card and say it's from Money Network Cardholder Services *on behalf of the US Department of the Treasury*. Yes, more will get stolen that way, but that's going to be far fewer than have been lost because this presented as junk mail, and it reduces the ability for fraudsters to cheap out on attacks against the American people.

## Closing Notes

The cost of attack rationale applies to fraud - all security is economic. The higher your cost of attack, the fewer successful attacks you see. The higher your cost of fraud, the fewer successful scams you will see. In this case, the United States drastically lowered the cost to launch certain fraud campaigns, and that concerns me.

If you are also concerned about the safety of Americans receiving their CARES Act rebate, please consider sharing this on your preferred communication platform (some options have buttons to share below). If you or someone you know is concerned about the validity of your EIP Card, please direct them to this [Staying Safe](/2020/eip-cards-made-fraud-easier/staying-safe/) page which presents a condensed version of "how to make sure you are handling a potentially fraudulent EIP Card safely."

In addition, I've included photos of how the EIP Card arrived to me - many of them are linked to throughout this article, but I've also assembled a [page](/2020/eip-cards-made-fraud-easier/letter/) where you can see them all together.