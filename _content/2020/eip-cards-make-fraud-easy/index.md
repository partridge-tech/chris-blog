---
layout: post
title: "EIP Cards Make Fraud Easy"
permalink: /2020/eip-cards-make-fraud-easy/
description: "A match made in hell. Who thought distributing debit cards, unannounced, that reference a non-.gov domain was a good idea? I've seen better scams."
date: 2020-06-06 00:00:00
tags:
- eip card
- vishing
- phishing
- social engineering
- scam
- rant
---

> If you need help validating that an "EIP Card" you received in the mail is valid, please see [this guide](/2020/eip-cards-make-fraud-easy/staying-safe/) - it'll save you a lot of time!

So for background, I have an [LLC](https://mns.llc), which means a physical address I am affiliated with is published in every United States incorporated company database known to humankind. As as consequence of that, I get a boatload of junk mail. This ranges from scam companies claiming there is additional legal filing that needs to be done for my LLC (there isn't), to banks wanting me to get high-interest business loans (hell no), to companies sending me unsolicited thousand-page industrial shopping catalogues ([why](https://www.youtube.com/watch?v=zFjkteBnYHw)).

Now, this post isn't about how junk mail generates [millions of tons](https://web.archive.org/web/20081031060724/http://donotmail.org/downloads/ClimateReport.pdf) of greenhouse gases. That's a travesty for sure, but it's not what got me riled up *today*. This is about one particular piece of 'junk' mail - one that millions of Americans have had to be [warned](https://www.cnbc.com/2020/06/05/how-to-replace-your-stimulus-debit-card-if-you-threw-it-away.html) *not* to throw out by accident. What was it? My COVID relief money, of all things.

Since I'm a certifiable security goon, this post will talk about the many issues with how certain CARES Act funds are being distributed, and we'll build a believable Social Security Number-stealing scam using those facts. Finally, I'll wrap up with recommendations on how to make this better, both now for future distribution of relief funds.

## What is the CARES Act?

But first - the basics. For any non-Americans browsing around, the CARES Act is a ~$2,200,000,000,000 relief bill in response to economic collapse due to nCoV-19. Among many other things, the median American could expect a one-time rebate of $1,200. Married filers with children, people who earn more than $75k, etc. are all eligible for different payouts according to a helpful payscale provided by the [Tax Foundation](https://taxfoundation.org/federal-coronavirus-relief-bill-cares-act/#16).

The exact details are not relevant, save for one bit: little old me should be getting the $1,200 moderate-income individual-filer no-kids rebate, but up until today, I hadn't seen a red cent of it. My roommate [Josh](https://jibby.org/) had received his rebate some time ago, in the form of a well-annotated direct deposit to his bank account from the federal government. It was no mystery where the money had come from or what it was for - everything was aboveboard.

## Surprises in the Mail

Today, I got my rebate in a very different form. An Economic Impact Payment ("EIP") debit card showed up without warning in my mailbox (as is has or will be four roughly [four million](https://www.freep.com/story/money/2020/05/27/stimulus-money-visa-debit-cards-mail/5267885002/) Americans). What the EIP Card actually is is an alternate method of disbursing CARES Act relief money for people the IRS doesn't have banking information on file for. What it looked like was a scam, and let's break down what every suspicious detail was. A full photo archive is available [here](/2020/eip-cards-make-fraud-easy/letter/) for those curious, but we'll be covering most of the content in detail as it comes up in this rant.

#### The Envelope

The [envelope](/2020/eip-cards-make-fraud-easy/envelope-front.png) was presorted first class mail addressed solely to me - none of the "current resident" crap, which should be banned altogether. However, the sender was an entity that I had never heard of.

```
Money Network Cardholder Services
PO Box 247022
Omaha, NE 68124-7022
```

There are a couple things to break down here. The PO box being my obvious first choice - of most scams that I receive in the mail, I'd wager about 80-90% use a PO box. Very few reputable companies contact me with anything less than a full physical address that I can find on Google Maps. It's a trust thing. A PO box? You're anyone and anywhere. A physical address gives me doors to knock on - I never need to, but I like having the option.

And then second, of course, we have to talk about the name. "Money Network Cardholder Services" is generic, not trust-building, and is the furthest thing from any governmental entity name I've heard of. I would have been more trusting of "[Bitconnect](https://en.wikipedia.org/wiki/Bitconnect) [EDMchain](https://www.youtube.com/watch?v=e5nyQmaq4k4) Technologies" and that would have certainly been something I'd have bothered opening. Because to be totally honest, I was about to throw this out before I decided I'd have a little fun finding out what scam was being peddled to me today.

#### The Contents

Things didn't get much better once I opened the letter. Two sheets of paper were inside, let's start with the full-size paper. You'll note it has an America-themed debit card stuck to it with double-sided tape. The [letter](/2020/eip-cards-make-fraud-easy/metabank-front-card.png) opens with:

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

If you and I think alike, at this point you're pretty sure your identity has been stolen and someone just opened a new debit card in your name. I didn't ready *any* materials, I don't know of any Terms & Conditions, I didn't open an account at EIPCard.com, and I sure as hell don't want to be bound by any terms concerning MetaBank N.A. (another entity I've never heard of). The page continues into how to use a debit card, and the reverse contains a summary of specific terms and fee schedules.

There are only two things on this entire page that tell you anything substantive about the origin of the card. First, a "The Department of the Treasury" symbol in the top; nice touch, but also something I've seen in spam, so not something I trust. Second, *underneath the card* there is a [small dialogue](/2020/eip-cards-make-fraud-easy/metabank-front-clear.png) which says:

```
What is the Economic Impact Payment Card?

The Economic Impact Payment Card contains the money you are receiving as a result of the
Coronavirus Aid, Relief, and Economic Security Act (CARES Act).

Activate your Account to get started.
```

Let me repeat that for clarity. The **only** substantive text on this double-sided US A4 letter with tons of tiny text about a debit card that I did not sign up for is **hidden under the card itself**. I can't help but wonder, is this intentionally awful design? Or did your UX and marketing teams go on strike, so your substitute is a magician-in-training workshopping a stage reveal where they pull their head out of their ass, but haven't quite figured out how yet? You could have put that text anywhere else - really, anywhere, you could have hidden it in the fee schedule and I'd be less mad - for a more cohesive experience.

#### The (Other) Contents

The [final](/2020/eip-cards-make-fraud-easy/federal-front.png) piece of the puzzle was a little slip of paper included - 1/3rd of an A4 letter, single-sided. It's the first and only time we see anything that is recognizably governmental, the `irs.gov` domain.

```
Enclosed is your Economic Impact Payment Card

This prepaid debit card is being send to you on behalf of the U.S. Department of the
Treasury in place of a paper check. This Card contains the money you are receiving as a
result of the Coronavirus Aid, Relief, and Economic Security Act (CARES Act).

For additional information on Economic Impact Payments visit IRS.gov/EIP.

Safe * Convenient * Secure

Follow the enclosed instructions to activate your Card. Visit EIPCard.com to learn more.
```

However, the linked page (irs.gov/eip) didn't make any mention of the EIP Card, or any debit cards that are being distributed to Americans.

#### Digging Around Online

Unfortunately, this seems like it's the best that the federal government (and their outsourced counterparts) could do on short notice.

News sites [reported](https://www.cnbc.com/2020/06/05/how-to-replace-your-stimulus-debit-card-if-you-threw-it-away.html) that something like this would happen, and pleaded with their readers not to throw out the junk mail they receive as there's a chance one of those letters might be your CARES Act rebate. However, few offered real advice for recognizing the card, and many did not provide safe guidance for validating that the EIP Card people received was real. This included:

- The [CFPB](https://www.consumerfinance.gov/about-us/blog/economic-impact-payment-prepaid-card/) (a federal entity) saying what you received is "not a scam" if the EIP Card came from "Money Network Cardholder Services" and has "VISA", "DEBIT", and "MetaBank, N.A." on the back. These are all easily forged with a fake card and bad return address. Though to their credit, they did provide the correct links and telephone numbers to call afterwards - you'd hope people didn't return to their letter after saying "yeah, it must be safe."
- [AARP](https://www.aarp.org/money/taxes/info-2020/stimulus-payment-debit-cards.html) advocated against searching online to validate the phone number you've been told to call. This is okay-ish to help avoid online scams, but dooms anyone with a fraudulent letter.
- While the [FTC](https://www.consumer.ftc.gov/blog/2020/05/what-know-about-economic-impact-payment-debit-cards) provides a good summary of what to do, even they reference that "the mailer will give you instructions on how to activate the card," which could be dangerous.

If you get a similar card, you may want to follow a safe guide for activating it, such as the one I've provided [here](/2020/eip-cards-make-fraud-easy/staying-safe/), which is also linked at the top and bottom of the page. It relies solely on securely connecting to the IRS site in order to determine facts and other trusted sources, and eschews nearly all use of the easily-forged paper letter.

My card, thankfully, was real. I called the EIP Card activation number, dutifully divulged the information I needed to access the card, and swiftly routed my $1,200 to my bank - away from this hot mess.

## What Could Go Wrong?

Like any financial device you have interacted with recently, activating the EIP Card requires dialing in the last four-to-six numbers of your Social Security Number. You know - that short, hard-to-replace number you can do almost anything with, like:

- Starting new lines of credit.
- Opening utilities and billing accounts.
- Filing fraudulent tax refunds.
- Steal unemployment or social security benefits.
- Calling my bank, pretending to be me, and resetting my passwords.

While this may be "Convenient," we're definitely not in "Safe" or "Secure" territory. The devil is in the details - and unfortunately, there's a lot that went wrong here. I believe you could send a low-material-cost letter to people across the country with very few details changed and get a huge success rate snagging whole SSNs.

## Disclaimer

The following section "A Simple EIP Card Scam" is solely for educational purpose, describing the costs of a scam and problematic components of the EIP Card distribution and validation methods that scammers could exploit. I am not advocating for or advising that anyone use it, in whole or in part, for malicious activity of any kind. To be very clear: the following section details a theoretical scheme for defrauding the American people. To enact it, in whole or in part, would be a federal crime. Don't do it.

## A Simple EIP Card Scam

Bearing the above disclaimer in mind, there are a few things you'd need to have in order to snag someone's social security number using an EIP Card mimicking scam. These are:

- Your target's name (must be embossed on the card)
- Your target's address (to send mail to them)

That's a very low information barrier to entry. The complexity here really comes from getting a supplier for fake credit cards - a regular credit card cloner just copies the magstripe information, you would need tons of cards of reasonable quality and design. Each card has to be uniquely addressed to a given name too, so no bulk discounts. Hunting on Alibaba, it didn't take more than five minutes to find a factory direct supplier in Guangdong, China that advertised they'd do everything we need: PVC/magstripe cards, embossing, custom CMYK & silkscreen printing, and specifically advertised they'd do license or card clones. So your full component list, with price breakdown, is:

- Envelopes (#10) with window, $20/500 = $0.04/ea
- A4 size high-quality printed leaflets, $105/500 = $0.21/ea
- Double sided half inch wide acrylic tape, $9 for 10 feet = $0.07/ea for one inch of tape
- Personalized fake credit cards, regular price is $45-$80/1000 but I'd expect to pay upwards of $0.16/ea due to your particular needs
- 1oz letter stamps, $0.55/ea at consumer rate

So your total is $1.03/ea in materials cost (including shipping), plus your time to procure, assemble, and anonymously send the letters. I'm sure if you worked in bulk or spent more than five minutes (as I did) to find sellers at each of those price points, you could drive the material cost down significantly, but let's benchmark off that. While you don't technically need a valid PO Box address to pull this off (you just need to list one, not actually have one), you would need to get a toll-free 1-800 number and route that to a programmable answering service. You should [expect](https://www.avoxi.com/blog/1800-number-cost/) to pay ~$50 for a US-based number plus $0.05/minute (higher risk) or $100 plus $0.25/minute for an India-based number (lower risk). Maybe also a website if you're feeling fancy and want something to try to corroborate the phone number.

#### Making it "Look Real" is Easy

The way the EIP Cards were distributed immediately raised a lot of red flags with people - as it should have. The Treasury's decision to handle EIP Card distribution through an entity that people don't recognize wears down on good habits about tossing junk mail. News sites across the US recommended looking out for a "plain white envelope" that may have thousands of dollars in untapped relief debit. This sets the wrong expectations - people are more suspicious of junk mail in the same vein that they're more suspicious of [phishing](https://en.wikipedia.org/wiki/Phishing) these days - there's so much of it, and we're so used to it that lower-quality attempts don't phase us.

Like, you know, purporting to be from the government, but actually being a no-name unknown company half the country away at some PO box.

Unfortunately, these mistakes are very easy to capitalize on: you don't need custom envelopes, driving the price down; you *may* not need to impersonate a federal entity for a convincing scam, driving the risk down; and people have been prepped to receive similarly-foreign-looking letters, driving response rate up.

What would probably work best here is picking a similar company name (think: synonyms for 'money' and 'network') for the return address and putting a fake or disused PO box. The letter inside should be a nearly carbon copy, with of course the name/telephone number switched out, the MetaBank name switched out to something similar-looking, and possibly without federal symbols and links in case you are trying to dodge impersonating a federal entity (at the cost of your "trustworthiness" and response rate).

The last thing you need to edit content-wise is a reason for the letter. This would need to be creative enough to necessitate "sending an EIP Card" - but unfortunately your ship has sailed for COVID-19 initial relief funds. It would need to be topical enough for a Google search about "\<your reason\> EIP card" to turn up all the "look out for your EIP Card!" news stories which "confirm" your fraudulent story. You could take advantage of rumours of a second wave, or maybe the government miscalculated and needs to send you more moolah, or something else not-improbable-enough in our COVID-infested world.

#### Making it "Check Out" is Easy

What also helps your scam here is that the original letter was so hard-to-follow and didn't provide much evidence to assure the recipients that it was valid. Evidence to corroborate what the letter was present, but either unclear or hidden. There were two links, one to irs.gov, and one to eipcard.com. There were problems in both, but let's start with the IRS page.

The exact link we were given is [irs.gov/eip](https://www.irs.gov/eip) - check out an archived version [here](https://web.archive.org/web/20200605030257/https://www.irs.gov/coronavirus/economic-impact-payments) in case it's changed in the future. You should quickly notice there is no mention of the EIP Card - as if it never existed. There certainly aren't clear, bold, easy-to-see confirmations of where to confirm your EIP Card - the closest reference I could find is by clicking the [link](https://www.irs.gov/coronavirus/economic-impact-payment-information-center) titled "Visit our Economic Impact Payments Information Center" and scrolling down to item #45.

The IRS site is a trusted source - it's a well-known government agency and uses the .gov restricted-use TLD (as opposed to eipcard.com which is neither) - and therefore needed to immediately direct people to a page explaining the EIP Card and providing the EIP Card service telephone number. If you leave in the irs.gov references in on your EIP Card scam, it would look much more official and the chance that people dug around long enough on the IRS website to find a valid link to eipcard.com *and* check the fake telephone number you provided is exceptionally low.

Now, to be fair, the [eipcard.com](https://www.eipcard.com/) site itself is much better. The telephone number you need to be calling is in three semi-prominent places on the langing page. However, nobody recognizes the name "eipcard" and .com is a free-for-all TLD. Registering a similar domain name (think: money-network-eipcard.com, cares-act-card.com), cloning the site, and swapping the telephone number on it would be exceptionally simple. This could even include making the login page say that you need to activate the card by telephone number first, since that's corroborated by the paper that people received + news outlets. Further, keeping the link to the IRS site would be great for reputability, and it's the same link that we detailed above with no EIP Card validation information.

Some people are diligent and will check their preferred news sites or links you provided to make sure they're getting something real. A safe path for users to follow which would thwart this scam would be going to a trusted news source and clicking through to eipcard.com from there, then calling the number listed on the site. However, how many people are going to do that over "googling it for five seconds to make sure it's real" and then calling the number/going to the links that you provided in the letter? As referenced before, because of how this was set up, some sites are explicitly [recommending](https://www.aarp.org/money/taxes/info-2020/stimulus-payment-debit-cards.html) people trust what's on the letter *over* what they find on the internet:

> You’ll get a letter with the EIP card telling you how to activate it. Be very careful that you call the correct phone number. Don’t search the Internet for the number. Scammers sometimes set up fake customer service numbers to deceive people and take their personal information.

This is an adequate recommendation given the situation, since eipcard.com is not a recognizable domain to most EIP Card recipients. The going logic around avoiding scams is usually "if you get a suspicious phone call or letter from [your bank, your investment agency, etc.], call the number they have listed on their website." People not knowing what a "safe" website is for the EIP Card makes this more confusing for users and therefore much easier for predatory internet scammers to take advantage of.

#### Getting an SSN is Easy-ish

All that's left if to actually get a social security number from anyone that calls. The existing setup for verifying an EIP Card had me:

- Enter a couple numbers for English menu and card activation
- Enter the 16-digit EIP Card number
- Enter the expiry date
- Enter the CVV
- Enter the last six of my Social Security Number
- Enter a pin number

None of which felt out-of-place. This took about two minutes total of my time, so your per-caller costs would be pretty low (~$0.05 for a USA-based number, ~$0.50 for an India-based number).

I *think* (though I can't confirm) most people would probably put in their full Social Security Number if prompted for it, since at that point they're convinced enough to call and on the verge of receiving a couple thousand dollars. Though if that had a low success rate, pivoting to a combined robot-and-operator method could help success rates - once users put in their "last six" and pin, put them on hold (with distracting facts or other information playing) for a little bit while "waiting for an operator," and then have a human (or human-sounding robot) ask them for their "first three digits" for some esoteric confirmation reason - now you have a whole SSN without asking for the whole SSN, and people may not have noticed.

#### Would it be Worthwhile?

It's fine and dandy to have cooked up an SSN-stealing scam, but would it be worth anyone's while to actually pull this off? The short answer is no - with material cost and two minutes on the phone per victim, you're looking at between $1 and $1.50 spent per scam. Given that Social Security Numbers are worth between [$1](https://www.experian.com/blogs/ask-experian/heres-how-much-your-personal-information-is-selling-for-on-the-dark-web/) and [$2](https://www.radware.com/newsevents/pressreleases/2018/americans-fear-for-their-data) on average on the dark web, you'd need a nearly 100% success rate to just break even - not counting your time spent procuring and assembling the fraudulent mail, or resources spent getting the names and addresses to target. Considering that people are known to be throwing these cards out as-is, it's guaranteed to not be worthwhile to just get their SSN.

However, this does put forward a good opportunity for [vishing](https://en.wikipedia.org/wiki/Voice_phishing). Once you get someone on the phone and ready to believe you're a government agency, you can do anything. Try this line on for size and try to objectively think about whether or not you'd fall for it:

> "I'm really sorry [sir/miss], we're having trouble activating your EIP Card. Here's what I can do for you. If you like, we can re-issue the card, and it will be at your door in four to six weeks. Or, if you're willing to stay on the line for fifteen minutes, we can wire the funds directly to your bank account now, we'll just need some additional information from you to verify your identity."

Would it get you? Because if that was delivered to me on a clear connection, possibly with a little joke about "four to six weeks being exactly the speed of government, I haven't gotten mine either," I'd have recited the answer to every security question that keeps attackers out of my PayPal, my bank, and even my brokerage. These are all items that will fetch higher prices - online banking and PayPal credentials typically sell for a percentage of their known value, according to [LogDog](https://nakedsecurity.sophos.com/2016/08/09/what-your-hacked-account-is-worth-on-the-dark-web/) and [KnowBe4](https://blog.knowbe4.com/1170-is-how-much-youre-worth-on-the-dark-web).

The real crux of the issue is that fraudsters have now been offered an opportunity to get their foot in the door with many Americans. There are going to be markets that are worthwhile to scammers to try to exploit this - whether that's something as simple and automated as getting you to divulge your SSN or other information, or something as advanced as getting you on the phone for a vishing session where you're primed to trust the caller - the attacks are *coming*. Just give them time.

## Remediation

What could have been done better by the Department of the Treasury to make this more trustworthy and less fraud-enabling? There are a several core areas that could be addressed.

#### Immediate Changes

The only recognizably-governmental page that's linked to by the EIP Card letters [irs.gov/eip](https://www.irs.gov/eip). There needs to be an easily-visible section (bold, highlighted, high-up - whatever) which includes:

- A link to the eipcard.com website
- The telephone number that people should call to activate their EIP Card
- A blurb that is very specific about the fact that you need to go to that site and/or call the number listed in order to activate your EIP Card, use NO other numbers

That will help the most in streamlining the experience so Americans can reliably get information about their EIP Card, instead of searching the internet (and possibly getting bad information/telephone numbers etc.) or having to trust a random .com domain they've never heard of before (which sets this up for easy forgery, as outlined in practical attacks above). Most importantly, the change can be made *right now* - this will help solve the current confusion and helps streamline similar rebates in the future.

#### Future Works

There's a lot more that could be done outside of the above which would require changes to the physical letter, but they're important to note for the future as well.

##### Trusted Links

Most importantly, I'd recommend that **ALL** links mentioned in the letter go to .gov domains. This creates a small but resolvable conflict: MetaBank and Money Network Cardholder Services are private entities which are servicing the EIP Card needs for the government. That's well and good - I understand the need for an external entity with infrastructure to handle this, and I also understand it would be improper for private entities to be given control of a .gov domain (ex. eipcard.gov is an unlikely-at-best solution).

However, a simple and reliable workaround would be to create a page at irs.gov/eipcard which provides sufficient information in one, reliable place about what the EIP Card is, how to access your EIP Card funds, and provides outbound links to private entities which are servicing that. That ensures that Americans are getting accurate information from a trusted source. Funnily enough, while researching for this article, I found out that something similar already exists - [usdebitcard.gov](https://www.usdebitcard.gov/) tracks USA-issued debit cards through MetaBank and provides information on them. Why wasn't this referenced?!

Having a single government site that details validation and activation also circumvents something we discussed above: because there was little trusted and straightforward content available to direct people to, news sites and secondary sources then have to figure out their own security guidance for their readership, which ranged from "fine" to "incredibly bad." Even major entities such as the CFPB (again, a *government entity*) provided semi-safe guidance.

##### Recognizable Source

Another thing to strongly consider changing is the return address. People need to be able to trust the letter they see from the moment they get it. An unknown-name PO box is a terrible precedent, and has lead to a lot of EIP Cards being [thrown out](https://www.washingtonpost.com/business/2020/06/01/faq-stimulus-debit-card/):

> “I opened an unmarked envelope, saw what looked like a credit card I hadn’t ordered from the Money Network, and I threw it out,” said Sarah Bardinone from New York City.

Apparently, making the letters "discreet" was intentional to guard against fraud. Aside from the fraud opportunities this *introduced* which we recapped a couple paragraphs ago in "Trusted Links" - what is there to worry about?

- A [porch pirate](https://www.dictionary.com/browse/porch-pirate) doesn't know your social security number and won't be able to activate the card readily.
- A more sophisticated theft without resorting to phishing would be stealing the envelope, opening it, copying the card details, replacing it in the original mailbox, and then hoping that they can use the card details between someone activating it and using the funds. This is plausible, but if someone is rifling through your mailbox, an extra 2 seconds to find the right envelope isn't stopping them.
- People in financially abusive relationships are certainly at risk here, but if that's the case, their partner will most likely have learned of the envelope anyway because of how much this has had to be publicized to prevent people throwing them out.

In short, making the EIP Card letters unrecognizable doesn't stop any meaningful malicious activity, it only serves to decrease trust & provide dangerous opportunities for fraud mailers. At least make the letters more readily identifiable with some sort of external notice that it's an EIP Card and say it's from Money Network Cardholder Services *on behalf of the US Department of the Treasury*. Yes, more will get stolen that way, but that's going to be far fewer than have been lost because this presented as junk mail.

## Closing Notes

If you are concerned about the safety of Americans receiving their CARES Act rebate, please consider sharing this on your preferred communication platform (some options have buttons to share below). If you or someone you know is concerned about the validity of your EIP Card, please direct them to this [Staying Safe](/2020/eip-cards-make-fraud-easy/staying-safe/) page which presents a condensed version of "how to make sure you are handling a potentially fraudulent EIP Card safely."

In addition, I've included photos of how the EIP Card arrived to me - many of them are linked to throughout this article, but I've also assembled a [page](/2020/eip-cards-make-fraud-easy/letter/) where you can see them all together.