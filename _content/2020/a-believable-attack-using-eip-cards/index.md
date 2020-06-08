---
layout: post
title: "A Believable Attack Using EIP Cards"
permalink: /2020/a-believable-attack-using-eip-cards/
description: "Turns out it would cost you between $1 and $1.50 in materials to pull off an EIP Card scam, plus procurement and assembly - the rapport you get from doing this is easily more valuable, and could be a viable attack in the real-world."
date: 2020-06-07 00:00:00
tags:
- eip card
- vishing
- phishing
- social engineering
- scam
---

Following on to my prior [rant](/2020/eip-cards-made-fraud-easier/) about how EIP Cards arguably made fraud and scams easier to pull off against the American people, let's try to prove that point by building a scam that relies on the disorganized nature of EIP Card distribution.

## Disclaimer

This post "A Believable Attack Using EIP Cards" is solely for educational purpose, describing the costs of a scam and problematic components of the EIP Card distribution and validation methods that scammers could exploit. I am not advocating for or advising that anyone use it, in whole or in part, for malicious activity of any kind.

To be very clear: the following section details a theoretical scheme for defrauding the American people. To enact it, in whole or in part, would be a federal crime. Don't do it. Let the grandmothers of the world have their CARES Act money, you rat bastards, I will call the internet police. (╯°□°)╯︵ ┻━┻

## Materials

Bearing the above disclaimer in mind, there are a few things you'd need to have in order to snag someone's social security number using an EIP Card mimicking scam. These are:

- Your target's name (must be embossed on the card)
- Your target's address (to send mail to them)

That's a very low information barrier to entry. The complexity here really comes from getting a supplier for fake credit cards - a regular credit card cloner just copies the magstripe information, you would need tons of cards of reasonable quality and design. Each card has to be uniquely addressed to a given name too, so no bulk discounts. Hunting on Alibaba, it didn't take more than five minutes to find a factory direct supplier in Guangdong, China that advertised they'd do everything we need: PVC/magstripe cards, embossing, custom CMYK & silkscreen printing, and specifically advertised they'd do license or credit card clones. So your full component list, with price breakdown, is:

- Envelopes (#10) with window, $20/500 = $0.04/ea
- A4 size high-quality printed leaflets, $105/500 = $0.21/ea
- Double sided half inch wide acrylic tape, $9 for 10 feet = $0.07/ea for one inch of tape
- Personalized fake credit cards, regular price is $45-$80/1000 but I'd expect to pay upwards of $0.16/ea due to your particular needs
- 1oz letter stamps, $0.55/ea at consumer rate

So your total is $1.03/ea in materials cost (including shipping), plus your time to procure, assemble, and anonymously send the letters. I'm sure if you worked in bulk or spent more than five minutes (as I did) to find sellers at each of those price points, you could drive the material cost down significantly, but let's benchmark off that. While you don't technically need a valid PO Box address to pull this off (you just need to list one, not actually have one), you would need to get a toll-free 1-800 number and route that to a programmable answering service. You should [expect](https://www.avoxi.com/blog/1800-number-cost/) to pay ~$50 for a US-based number plus $0.05/minute (higher risk) or $100 plus $0.25/minute for an India-based number (lower risk). Maybe also a website if you're feeling fancy and want something to try to corroborate the phone number.

## Making it "Look Real" is Easy

The way the EIP Cards were distributed immediately raised a lot of red flags with people - as it should have. The Treasury's decision to handle EIP Card distribution through an entity that people don't recognize wears down on good habits about tossing junk mail. News sites across the US recommended looking out for a "plain white envelope" that may have thousands of dollars in untapped relief debit. This sets the wrong expectations - people are more suspicious of junk mail in the same vein that they're more suspicious of [phishing](https://en.wikipedia.org/wiki/Phishing) these days - there's so much of it, and we're so used to it that lower-quality attempts don't phase us.

Like, you know, purporting to be from the government, but actually being a no-name unknown company half the country away at some PO box.

Unfortunately, these mistakes are very easy to capitalize on: you don't need custom envelopes, driving the price down; you *may* not need to impersonate a federal entity for a convincing scam, driving the risk down; and people have been prepped to receive similarly-foreign-looking letters, driving response rate up.

What would probably work best here is picking a similar company name (think: synonyms for 'money' and 'network') for the return address and putting a fake or disused PO box. The letter inside should be a nearly carbon copy, with of course the name/telephone number switched out, the MetaBank name switched out to something similar-looking, and possibly without federal symbols and links in case you are trying to dodge impersonating a federal entity (at the cost of your "trustworthiness" and response rate).

You could also enrich your scam by generating a number of similar papers, increasing your time cost slightly as you compile additional fraudulent names and addresses, but not meaningfully increasing your materials cost. Since these all go in unmarked envelopes, USPS would not be able to readily identify and intercept all of them if people started reporting your letters as fraudulent (ex. by identifying a common sender and stopping delivery of certain letters). Had there been clear federal identifiers on these letters (or even an Official Business [endorsement](https://en.wikipedia.org/wiki/Official_mail)) that a scammer would have needed to include, it would have significantly raised USPS suspicion and likely impacted deliverability.

## Making it "Check Out" is Easy

Content-wise you should be making few changes, but an important one to think through is a reason for the letter. By the time someone is ready to execute this scam, the original EIP Card kerfuffle is likely over. This would need to be creative enough to necessitate "sending an EIP Card" - but unfortunately your ship has sailed for COVID-19 initial relief funds. It would need to be topical enough for a Google search about "\<your reason\> EIP card" to turn up all the "look out for your EIP Card!" news stories which "confirm" your fraudulent story. You could take advantage of rumours of a second wave, or maybe the government miscalculated and needs to send you more moolah, or something else not-improbable-enough in our COVID-infested world.

What also helps your scam here is that the original letter was so hard-to-follow and didn't provide much evidence to assure the recipients that it was valid. Evidence to corroborate what the letter was present, but either unclear or hidden. There were two links, one to irs.gov, and one to eipcard.com. There were problems in both, but let's start with the IRS page.

The exact link we were given is [irs.gov/eip](https://www.irs.gov/eip) - check out an archived version [here](https://web.archive.org/web/20200605030257/https://www.irs.gov/coronavirus/economic-impact-payments) in case it's changed in the future. You should quickly notice there is no mention of the EIP Card - as if it never existed. There certainly aren't clear, bold, easy-to-see confirmations of where to confirm your EIP Card - the closest reference I could find is by clicking the [link](https://www.irs.gov/coronavirus/economic-impact-payment-information-center) titled "Visit our Economic Impact Payments Information Center" and scrolling down to item #45.

The IRS site is a trusted source - it's a well-known government agency and uses the .gov restricted-use TLD (as opposed to eipcard.com which is neither) - and therefore needed to immediately direct people to a page explaining the EIP Card and providing the EIP Card service telephone number. If you leave in the irs.gov references in on your EIP Card scam, it would look much more official and the chance that people dug around long enough on the IRS website to find a valid link to eipcard.com *and* check the fake telephone number you provided is exceptionally low.

Now, to be fair, the [eipcard.com](https://www.eipcard.com/) site itself is much better. The telephone number you need to be calling is in three semi-prominent places on the langing page. However, nobody recognizes the name "eipcard" and .com is a free-for-all TLD. Registering a similar domain name (think: money-network-eipcard.com, cares-act-card.com), cloning the site, and swapping the telephone number on it would be exceptionally simple. This could even include making the login page say that you need to activate the card by telephone number first, since that's corroborated by the paper that people received + news outlets. Further, keeping the link to the IRS site would be great for reputability, and it's the same link that we detailed above with no EIP Card validation information.

Some people are diligent and will check their preferred news sites or links you provided to make sure they're getting something real. A safe path for users to follow which would thwart this scam would be going to a trusted news source and clicking through to eipcard.com from there, then calling the number listed on the site. However, how many people are going to do that over "googling it for five seconds to make sure it's real" and then calling the number/going to the links that you provided in the letter? As referenced before, because of how this was set up, some sites are explicitly [recommending](https://www.aarp.org/money/taxes/info-2020/stimulus-payment-debit-cards.html) people trust what's on the letter *over* what they find on the internet:

> You’ll get a letter with the EIP card telling you how to activate it. Be very careful that you call the correct phone number. Don’t search the Internet for the number. Scammers sometimes set up fake customer service numbers to deceive people and take their personal information.

This is an adequate recommendation given the situation, since eipcard.com is not a recognizable domain to most EIP Card recipients. The going logic around avoiding scams is usually "if you get a suspicious phone call or letter from [your bank, your investment agency, etc.], call the number they have listed on their website." People not knowing what a "safe" website is for the EIP Card makes this more confusing for users and therefore much easier for predatory internet scammers to take advantage of.

## Getting an SSN is Easy-ish

All that's left if to actually get a social security number from anyone that calls. The existing setup for verifying an EIP Card had me:

- Enter a couple numbers for English menu and card activation
- Enter the 16-digit EIP Card number
- Enter the expiry date
- Enter the CVV
- Enter the last six of my Social Security Number
- Enter a pin number

None of which felt out-of-place. This took about two minutes total of my time, so your per-caller costs would be pretty low (~$0.05 for a USA-based number, ~$0.50 for an India-based number).

I *think* (though I can't confirm) most people would probably put in their full Social Security Number if prompted for it, since at that point they're convinced enough to call and on the verge of receiving a couple thousand dollars. Though if that had a low success rate, pivoting to a combined robot-and-operator method could help success rates - once users put in their "last six" and pin, put them on hold (with distracting facts or other information playing) for a little bit while "waiting for an operator," and then have a human (or human-sounding robot) ask them for their "first three digits" for some esoteric confirmation reason - now you have a whole SSN without asking for the whole SSN, and people may not have noticed.

## Would it be Worthwhile?

It's fine and dandy to have cooked up an SSN-stealing scam, but would it be worth anyone's while to actually pull this off? The short answer is no - with material cost and two minutes on the phone per victim, you're looking at between $1 and $1.50 spent per scam. Given that Social Security Numbers are worth between [$1](https://www.experian.com/blogs/ask-experian/heres-how-much-your-personal-information-is-selling-for-on-the-dark-web/) and [$2](https://www.radware.com/newsevents/pressreleases/2018/americans-fear-for-their-data) on average on the dark web, you'd need a nearly 100% success rate to just break even - not counting your time spent procuring and assembling the fraudulent mail, or resources spent getting the names and addresses to target. Considering that people are known to be throwing these cards out as-is, it's guaranteed to not be worthwhile to just get their SSN.

## The Value of Rapport for Vishing

However, this does put forward a good opportunity for [vishing](https://en.wikipedia.org/wiki/Voice_phishing). Once you get someone on the phone and ready to believe you're a government agency, you can do anything. Try this line on for size and try to objectively think about whether or not you'd fall for it:

> "I'm really sorry [sir/miss], we're having trouble activating your EIP Card. Here's what I can do for you. If you like, we can re-issue the card, and it will be at your door in four to six weeks. Or, if you're willing to stay on the line for fifteen minutes, we can wire the funds directly to your bank account now, we'll just need some additional information from you to verify your identity."

Would it get you? Because if that was delivered to me on a clear connection, possibly with a little joke about "four to six weeks being exactly the speed of government, I haven't gotten mine either," I'd have recited my email, my preferred usernames, and the answer to every security question that keeps attackers out of my PayPal, my bank, even my brokerage. These are all items that will fetch higher prices - online banking and PayPal credentials typically sell for a percentage of their known value, according to [LogDog](https://nakedsecurity.sophos.com/2016/08/09/what-your-hacked-account-is-worth-on-the-dark-web/) and [KnowBe4](https://blog.knowbe4.com/1170-is-how-much-youre-worth-on-the-dark-web).

Even still, say every account you were able to get into had $1,000 in assets. Conservatism is the answer here, what's the chance someone with $100,000 in assets is getting and responding to CARES Act money? That would probably translate to a sell price of between $60 and $80. For every person that gets on the phone, let's say you have a 20% chance of getting sufficient information to break an account over a ten minute conversation. An English-speaking operator in India billing 10x India's minimum wage would be paid roughtly $0.50 for that time, plus ~$2.50 in telephone charges.

So our expected cost of people calling is $3/caller or $15/success. That leaves (on the low end) $45 of materials cost and labor, so your letter would need to convince around one in eight people to call (12.5% call rate, 2.5% overall success rate) in in order to be breaking even. That's a rough benchmark at best, as caller conversion rates are estimated and will heavily impact overhead consumption.

Is this the next generation of fraud? Probably not - those are pretty high costs to sink for unknown returns, but again, the material cost is what raises the price so much. Locking down a good fake credit card supplier, getting cheap labor, and lowering calling costs will all significantly increase headroom. So as it stands, this *might* work as a targeted attack - especially against vulnerable persons who are unfamiliar with vishing and more likely to open physical mail, such as the elderly - but an optimized version could be viable in the real world or against a general populace.

## Final Thoughts

The real crux of the issue is that fraudsters have now been offered an opportunity to get their foot in the door with many Americans. There are definitely to be markets that are worthwhile to scammers to try to exploit this - whether that's something as simple and automated as getting you to divulge your SSN or other information, or something as advanced as getting you on the phone for a vishing session where you're primed to trust the caller - attacks using EIP Cards as a diversion are probable.

As far as making things better (both now and in the future), please see my other [post](/2020/eip-cards-made-fraud-easier/) about the flaws in EIP Card distribution. If you are worried about an EIP Card you received being a scam, or just feel the need to validate more thoroughly after reading this, I also wrote a little [guide](/2020/eip-cards-made-fraud-easier/staying-safe/) that relies on the IRS website security rather than easy-to-forge letters in the mail.