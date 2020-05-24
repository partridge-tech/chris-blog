---
layout: post
title: "My 2020 Biohacking Stack"
description: "I may have asked a bio student to stab me in the hand with a needle I bought on the internet to plant a microchip under my skin. This is the current state of my biohacked life."
date: 2020-05-21 00:00:00
tags:
- biohacking
- nfc
- 2fa
- meditation
---

I've been slowly expanding my quackery-avoidant biohacking since September 2018. I took the plunge and unified a tiny part of my technological life with my physical body by implanting an NFC chip (think: work badge, bootleg Amiibo, etc.) under my skin. The specific chip I had put in was the [xNT](https://dangerousthings.com/product/xnt/) tag from [Dangerous Things](https://dangerousthings.com/), a cylindrical bioglass-encased gizmo which can receive, store, and send nearly 1kb of data.

Due to COVID-19, I have been working from home, and the jarring changes across my life began to impact my ability to focus at work. I raised this with a coworker and received a strong recommendation for meditation, and after a while I decided that I wanted to collect more metrics and information on how much meditation is helping me from a bodily standpoint. So I've also recently expanded my biohacking to include regular meditiation which is monitored by a [Muse 2](https://choosemuse.com/muse-2/) headband, and I'm testing out focus monitoring while I'm working with a [Foci](https://fociai.com/) but have yet to realize a benefit from it.

This is a post about the things that I do, why I do them, and how I feel about each component of my biohacked life.

## What?

Right. So a quick primer - [biohacking](https://en.wikipedia.org/wiki/Do-it-yourself_biology) is a broad topic, encapsulating any modification you make to yourself or your environment to enrich your biological experience. This can range from hardcore pseudoscience (like injecting younger peoples' [blood](https://www.fda.gov/news-events/press-announcements/statement-fda-commissioner-scott-gottlieb-md-and-director-fdas-center-biologics-evaluation-and-0) into your body - yikes), to holistic improvements such as changing your diet or meditating, to getting technological body modifications.

Biohacking is a hot topic for a few parties - most notably including Silicon Valley tech leaders (ex. Jack Dorsey) looking for ways to optimize their body or mind for performance, people frustrated with long FDA turnaround times for new drugs or medicine that are willing to experiment on themselves, outright scammers pushing understudied "miracle" vitamins, people who are really obsessed with matcha as a nootropic enhancer, and so on.

Many of the things you see reports of biohackers doing on the news are on the more extreme side of things. I fall into a growing, reasonably moderate category of biohacker, mostly driven by the increasing availability of personal technology in the fitness and mental health areas. At a basic level, the using metrics from a Fitbit or Apple Watch to monitor your health on a day-to-day basis is biohacking too. Maybe you're a novice biohacker without even knowing it!

## Disclaimer

You'll note the words "implant," "student," and "dinner table" are way too close together in the xNT's "Implant Procedure" section, and it behooves me to mention that a. I am not a medical or body modification professional and b. just because I was dumb enough to put a chip in my hand in a particular way (and lucky enough to face little consequences), I am not recommending you perform any or all components of any procedure I am detailing, in whole or in part.

## About the xNT

My xNT implant enables my body to send and receive information over Near Field Communication (NFC) on the high frequency band, 13.56MHz. The massive capabilities of the human brain can now be dwarfed by my body's ability to store... virtual business cards... for up to 10 years or 100,000 write cycles, whichever comes last. As with all NFC cards, they do not have batteries onboard, and when placed near a reader they use magnetic induction to power themselves & send/receive data.

#### Implant Procedure

This particular chip is 2mm wide by 10mm long and can be thought of as a very long grain of rice. Getting the xNT into your body is pretty straightforward, and they come preloaded into a large sterile injector alongside some packaged sterile & sterilization equipment. While whoever is doing the procedure should be knowledgable in working with flesh (ex. piercing or other body modification professional), it's not a surgical procedure and doesn't strictly require a medical professional.

However, the xNT does need to go into a fleshy non-gripping area of your body, with some space between it and any bones, metal, or anything hard to help protect it from breakage. Generally, a good option is the fesh between your thumb and index finger on the top side of your hand. If you place your hand palm-down and trace ~8mm towards the center of your hand from your thumb's knuckle, that's where I put my xNT.

I'll save the gristly details of how the exact needlework goes - there are plenty of tutorials and I'd rather not parrot anything incorrectly or need to update this later. My implant was done by a biology student friend at my freshly-cleaned dinner table while listening to Kanye West's [Stronger](https://www.youtube.com/watch?v=PsO6ZnUZI0g), surrounded by ex-Datto interns, and livestreamed to [Evan's](https://twitter.com/evanextreme) Twitter followers. I can't stress enough that you don't do this if you want to avoid an infection or unnecessary strife. Many thanks to my "doctor" of the day who shall remain unnamed - they did a great job - but it was a riskier move than necessary.

#### Safety Considerations

The biggest concern with putting a glass & metal bauble under my skin of course is durability. However, Dangerous Things has compiled a huge [FAQ](https://forum.dangerousthings.com/t/x-series-implantable-transponder-faq/28) from their research & reports from thousands of buyers. To go across the main points, the non-magnetic implants:

* Are generally regarded as durable and have survived extreme lab testing as well as active real-world use for years.
* Don't impede your ability to get an MRI due to the extremely low metal content.
* Don't interfere with TSA scanners - metal detecting or millimeter wave.
* Won't be accidentally erased by handling magnets or magnetic equipment.

The biggest immediate negative would be the chance of getting an infection during the implanting, which can be somewhat controlled for by working carefully with a professional. Which I didn't do, because I was being a bit of a dumbass.

#### Security Considerations

It's important to understand that the xNT is not a protected, cryptography-capable implant. While it has some built in write protection to minimize the chance of a bad write, its plaintext ID & contents can be read by any NFC reader. If you put your phone or some other NFC reader on my hand, you have just stolen my workstation's user password. Fortunately for me, you've not stolen my full disk encryption password, and changing my user password in exactly one place is quite simple. Either way, if you're that physically close to me a [$5 wrench](https://xkcd.com/538/) is going to serve you better than stealthily reading my xNT.

I would hesitate to use the same technology to bypass more important, less-well-guarded access controls in my life. For example, xNT chips can also be used for contactless NFC-based smart door locks, which would be similarly easy to skim and wouldn't have any other protections, are much harder to change, and so on. Unless you had additional traditional locks, which negates the convenience significantly (as opposed to slightly, in the case of an entered-once-on-boot FDE password).

#### In Daily Life

The implant procedure hurt about as much as a bee sting, and you can easily grit your teeth through it. My hand swole and bruised for about five days (approx 50 sq. cm of light bruising between the knuckle of my middle finger and the underside of the thumb, likely due to some imprecision with the procedure) and was a bit sore. The implant was usable same-day for me as well.

After healing, I hardly notice that my xNT is present unless I'm using it or showing it off. You can feel it under my skin if I clench my hand and you run your finger over it, but I don't feel it otherwise. I very rarely get a throb from it (once every 6 months maximum, and they've very minor/passing) and the entry point of the needle is hardly visible. I've been travelling nationally & internationally with my xNT and have never been flagged for additional screening due to my hand lighting up. I rack and derack servers, hike, hold on to stuff firmly, and it's never given me any trouble or shown any sign of breakage. The one main concern I haven't tested is MRIs, but I have solace in the faith of those before me that it won't be a problem.

The one daily use caveat of note is that the read range on the implant is very small, and the orientation matters a lot for getting good reads/writes to the chip, so you need to twist your hand in awkward ways sometimes to get a good read. It took some learning to get used to using with my workstation's reader (a "keyboard wedge" [KBR1](https://dangerousthings.com/product/kbr1/) also from Dangerous Things), but after a couple weeks I was all set.

Also, if I need to get the xNT removed in whole (for upgrades) or in parts (due to breakage), it'll be a minor surgical procedure. I assume that technology will leave my chip behind someday - but for now, NFC isn't going anywhere fast.

#### Summary

So, instead of signing in with a password, camera, or fingerprint (most of which would be similarly convenient): I tap my now-stabbed hand against a little rectangular box, it beeps, and I get logged in instantly. Was it ~$100 well-spent? Absolutely yes - I feel like Hackerman every time I unlock my computer.

The xNT was admittedly more of a "why not" decision than a "why." I can't really sit here and expect to tell you that it's some incredible achievement to sign in to my computer like this - it's very cool, but the value of that *specific* implant is somewhat limited. That said, having had the xNT implant and time to get to know the risks myself, I can say that I'm interested in getting a proper in-vivo cryptographic chip to become a "true" physical factor for identification & authentication. Consider the xNT my biohacking training wheels before doing something much more useful.

## About the Muse 2

On to something that is going to be more familiar to people - regular, wearable technology like the [Muse 2](https://amzn.to/2LMaJfK). This will read more like a review of the Muse 2 rather than "inserting chips in your hand 101."

In short, Muse's technology uses a number of sensors including EEG, heart rate, and others to help track a number of bodily metrics while you meditate (linking back to an app on your phone), in order to help you better understand and connect with your meditative sessions. Overall, I will say that I feel positively about the Muse, and enjoy using it for my meditative sessions, though it has some rough edges.

While the Muse *can* be the sole source of your meditation information, I strongly recommend coupling it with reading material about meditation to help understand its benefits and create goals that will really help you. A recommendation given to me - which I now recommend to you as well - is [The Mindful Geek](https://amzn.to/3bOMet1) by [Michael W. Taft](https://deconstructingyourself.com/michael-w-taft). It is practical, thorough, and well-cited. So my focus on the Muse is from a tracking and organizational standpoint, and I don't think it would be as effective *without* some background information and reading material.

#### The Good

Overall, the Muse has been fairly consistent, easy-to-wear even with headphones (though I think earbuds are better for this), and has some interesting options for tracking and designing your meditation sessions. It's been especially helpful to have the availity to review my meditation activity and engagement over time, and most metrics (while a little noisy) feel accurate.

The core functionality is fairly standard and surprisingly non-gimmicky, and getting audio feedback across a number of different meditation strategies takes some getting used to, but is ultimately helpful when guiding yourself. These meditations include:

* Mind meditation, which provides a quiet soundscape, rewarding you with silence & birdsong when you are being extra calm.
* Heart meditation, which synchronizes a drum with your heartbeat so you can focus better on your heart rate.
* Body meditation, which provides similar functionality to the mind meditation, but focusing on stillness.
* Breath meditation, which provides quiet, regular sounds to help you focus on breathing deeply.

The mind, heart, and body exercises are where the Muse really shines (and provides interesting extra feedback for the user), but I appreciated having breathing meditation being included nonetheless. There is also guided meditation available within the application, but we'll chat more about that in a second...

#### The Meh

If you're going to force me to pay for more than a handful of prerecorded guided meditation sessions, they need to be things I can't find elsewhere. Yes, those specific sessions are native to Muse. But I'm not seeing the value proposition here when the Muse doesn't provide feedback into the session. It would be a really interesting lift to make "intelligent" guided meditation sessions which respond to user activity and metrics. Some key examples of this could be:

* If the meditator is growing restless, a little callout to help them remain focused could be useful.
* If the meditator has sunk all the way into a deep calm, start skipping forward past repeating synonyms for "slowly relax" which would have otherwise run for 30 minutes.
* If the meditator is rising too quickly from a resting/calm state at the end of the meditation, slow things back down.

Etc. It's nice to buy in to one meditation platform, but Muse isn't so nice for me to justify it yet. And for $250 down, it would have been nice to at least see some rotating guided meditations to show people what they could be getting out of the platform + honoring the money down of device owners.

#### The Bad

As of writing this post, the Muse app feels unpolished and a bit rough around the edges. Hopefully there's some redesign coming soon for it, but right now the app specifically feels more like a hackathon project got funding rather than premium wearable tech.

This includes somewhat "duh" stuff like having to have your phone screen on for the duration of the meditation session, which leads to little inconveniences like "when I put down my phone, I instinctively lock the screen" interrupting my meditation 60% of the time I sit down to do it. The UI is not very intuitive, and every little thing having a tutorial video (yes, video) on by default is not a good user experience. It's wearable tech - not a moon rover.

#### Summary

I've definitely received the full value of the Muse 2 headband, but not for the reasons I'd initially expected. It *does* help me engage with meditation in a more approachable and fruitful way, but The Mindful Geek was better at giving me reasons to. The biggest benefit by far has been having a way to track meditation success, metrics, and more over time. Also, having many major forms of meditation in one place feels like a fairly cohesive meditation platform, so everything I need to *stay* engaged is in one place.

## About the Foci

The Foci is a new device to me as of last week, which clips on to your waistband and claims to monitor your breathing patterns with "AI" to ascertain whether or not you're focused.

It's *still* in "training mode" for me, and as such, has generated $0 of value for the $70 spent on it so far. I'll update this post when this is out of training mode, hopefully in the next few days, and I can see how well it detects differences in coding vs shitposting on Slack.

I'm a little worried the Foci might be too imprecise to actually help me stay focused & track my focus over time, but we'll see. The "it's very AI, based on years of research" documentation screams quackery to me, but I'm holding on to hope.

## Tidying Up

I'm looking forward to doing some more serious biohacking in the future - as my biohacking so far has been a success - and I'm excited for biohacking equipment to be appearing in people's daily lives. The more we know about ourselves and our bodies, the more informed decisions we can make to take care of ourselves, physically and mentally. I welcome discussion on this topic, and would be happy to chat about it by my normal methods of communication, which you can find on my [About](https://chris.partridge.tech/about/) page!

And of course, thank you for reading. It means a lot to me, since it would have been much easier for you to see how long this was and decide not to bother. <3