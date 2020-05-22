# Chris's Homepage
[![mastered on github](https://img.shields.io/badge/master-github-black.svg)](https://github.com/partridge-tech/chris-blog)
[![mirrored on gitlab](https://img.shields.io/badge/mirror-gitlab-orange.svg)](https://gitlab.com/partridge-tech/chris-blog)

This is my one-page landing site. Over the years, its predecessors have gone from being hosted on a scavenged Lenovo ThinkCentre M55, a Dell PowerEdge 1950, to custom Xeon D-1541 based servers. However, selfhosting comes with certain drawbacks, including:
* Many single points of failure, including electrical power
* Accidents on the test servers that my site would run on
* A cat that swats at loose fibre optic cables
* Inconveniences like keeping servers updated or not having credentials of `root:root` >:(

Tired of these drawbacks, I moved to GitHub Pages... which immediately had a *meh* month for uptime because the universe wants to punish my existence. So I moved again to serverless tech. These days it's hosted on 200+ POPs around the world thanks to the magic of [Cloudflare Workers](https://workers.cloudflare.com/) and $5/mo.

### Reasoning

I was using Cloudflare anyway because most of the domains I run are in there, since I need ingress controls and load balancing for all of my stuff to work on the two home internet connections I have. So I can't actually selfhost a site anymore *without* Cloudflare or getting a VPS, which costs about $3/mo from my favorite providers. $2/mo more to have the sickest load speed time ever *and* never have to maintain a server was a no brainer.

### How

I didn't have to change much of anything. Create a bucket in Cloudflare and copy a few keys, initialize the repository with the `workers-site` folder, do some minor configuration in `wrangler.toml`, dump some of the keys in `wrangler.toml`, dump the rest in GitHub Secrets, and create a quick/dirty GitHub Actions workflow in `.github/workflows/`. Oh, and move my static content to `public/` because this is not a generated site a la Jekyll, it's just raw HTML from a time before I was a software developer. Call it an hour of learning curve and fifteen minutes of work.

Since I'm paranoid about downtime, I also added `event.passThroughOnException();` to the Workers script, added a dummy `.gitlab-ci.yml` "build" job for GitLab Pages, and set up a lazily-auto-updating repository - so if for whatever reason the Cloudflare KV is down, content will be served from a backup source. Took maybe another 15 minutes of work + no learning curve.

I might use Jekyll to make this site also a blog, and if I do, I'll write up how preposterously easy this was. The hardest part was admitting "maybe it'd be nice to not have to manually update an out-of-band server every once in a while." It really makes me think: what would happen to an engineering organization if you gave everyone one day per month (or per sprint, or one sprint per year, etc.) to exclusively do their own research? Food for thought.

### Benefits

Installing Rust took more effort than the rest of all of this. Whoever wrote `rustup` to modify `.profile` when there's a jolly good `.bashrc` around was apparently not an Ubuntu user.

Anyway, I will say the speed on this is not overhyped. I've only ever used Workers to publish static Jamstack content, so who knows if this is a viable platform for development outside of that, but *damn* if you want content available everywhere in the world this is the play.

Using Sucuri's [performance tester](https://performance.sucuri.net/domain/) for quick benchmarking, this site before Cloudflare Workers took upwards of 2.5 seconds to load across the world from its origin (NY, USA), and even struggled occasionally in the USA with load times up to 1 second. Now the *maximum* load time anywhere in the world is around 0.5 seconds, and USA load times are between 0.08 and 0.3 seconds. Any SEO expert can tell you that based on the response time alone, I'm going to be raking in serious eCommerce.

I'm sellout-ready by the way. I'll write an extra paragraph about how good Cloudflare is for $250/ea, @[Matthew Prince](https://twitter.com/eastdakota/) please make my day. But if you order too many I'm just going to write Cloudflare-derived fanfiction about an orange-plated cleric who made a pact with the sun to destroy any person who says that "back in [their] day, technology just worked."

### Detriments

Technically Cloudflare's DNS & CDN & Workers runners are a single point of failure, though the prior setup relied on two of those *plus* my test server, my power, my fibre optic being undamaged by cat claws, etc. Though as a Cloudflare customer for years, I can attest it has historically much better uptime than my regional power provider, and outclasses many production applications I've helped run.

Also I'm feeding money to an internet megacorporation, and all the people that go to my site are being spied on, because any provider that decrypts TLS sessions can technically do so but have thus far Been Quite Nice About It(tm).

Beyond that, *why* exactly I'm optimizing my personal site for viewership in Moscow as much as I'm optimizing it for viewership from my parents is a fucking mystery. Also it's $5/mo, as opposed to the lean $0.05 of power a Raspberry Pi would sip, if you didn't want to over-optimize your site. But I assume those people stopped reading long before we got here.