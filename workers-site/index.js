import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler'

/**
 * This is a downstream, modified version of the following repo:
 * https://github.com/cloudflare/worker-sites-template
 * 
 * Some changes of note are:
 * 1. This adds passThroughOnException() to all events, so if the Workers KV
 *    is down, data will be served from a backup source (GitLab Pages).
 * 2. DEBUG flag has been removed in favor of always-on verbose errors since:
 *      a. There is no sensitive content on this site. Not even an API.
 *      b. Cache purges are easier to execute in the Cloudflare Dashboard.
 * 3. The addition of defaultCacheControl() which loosely sets max-age values
 *    based on the content expected for a given fetch, which also feeds into...
 * 4. The addition of createResponseWithHeaders() which adds browser-side cache
 *    directives and security headers to 200 & 404 responses, setting some
 *    useless-to-us headers such as:
 *      a. XSS Protection, despite a general lack of JS on this site.
 *      b. Content Type Options, despite no dynamic/user-uploaded content.
 *      c. Frame Options, so you need to clone this repo instead of framing it.
 *    ... and a couple actually useful ones:
 *      d. Referrer Policy so only secure sites can know where you came from.
 *      e. Content Security Policy, to prevent external resources loading.
 *    Why? Because anything less than an A grade on https://securityheaders.io
 *    is sacrilege. ;)
 */

addEventListener('fetch', event => {
  event.passThroughOnException();
  try {
    event.respondWith(handleEvent(event))
  } catch (e) {
    return event.respondWith(
      new Response(e.message || e.toString(), {
        status: 500,
      }),
    )
  }
})

async function handleEvent(event) {
  let options = {}

  try {
    const page = await getAssetFromKV(event, options)
    const cache = setDefaultCacheControl(event.request.url.split(".").pop());
    return createResponseWithHeaders(page.body, page, cache)
  } catch (e) {
    // if an error is thrown try to serve the asset at 404.html
    try {
      let notFoundResponse = await getAssetFromKV(event, {
        mapRequestToAsset: req => new Request(
          `${new URL(req.url).origin}/404.html`,
          req
        ),
      })

      return createResponseWithHeaders(
        notFoundResponse.body, 
        { ...notFoundResponse, status: 404 },
        "max-age=5" // cache 404s for five seconds
      )
    } catch (e) {}

    return new Response(e.message || e.toString(), { status: 500 })
  }
}

function setDefaultCacheControl(extension) {
  switch(extension) {
    /* ONE YEAR CACHE
     * For: fonts
     * Changes: never
     */
    case "woff2":
      return "max-age=31536000"

    /* TWO WEEK CACHE
     * For: photos, videos, icons
     * Changes: unlikely
     */
    case "ico":
      return "max-age=1209600"
    case "jpg":
      return "max-age=1209600"
    case "png":
      return "max-age=1209600"

    /* FOUR DAY CACHE
     * For: css, manifests
     * Changes: likely but infrequent
     */
    case "css":
      return "max-age=345600"
    case "webmanifest":
      return "max-age=345600"

    /* FIVE MINUTE CACHE
     * For: no trailing extension, html, xml, txt, json, everything else
     * Changes: frequently/unknown
     */
    default:
      return "max-age=300"
  }
}

function createResponseWithHeaders(body, page, cache) {
  // make a header-mutable response
  const response = new Response(body, page)

  // performance headers
  response.headers.set("Cache-Control", cache);

  // security headers
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('Content-Security-Policy', 'default-src https://chris.partridge.tech:443')
  response.headers.set('Referrer-Policy', 'no-referrer-when-downgrade')

  return response
}