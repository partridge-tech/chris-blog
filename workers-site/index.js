import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler'

/**
 * This is a downstream, modified version of the following repo:
 * https://github.com/cloudflare/worker-sites-template
 * 
 * Some changes of note are:
 * 1. This adds passThroughOnException() to all events, so if the Workers KV
 *    is down, data will be served from a backup source (GitLab Pages).
 * 2. 404s are served from 404/, not 404.html, which is a bad practice but
 *    is broken on GitLab Pages anyway, per
 *    https://gitlab.com/gitlab-org/gitlab-pages/-/issues/183
 *    ...and I might fix this to be 404.html when it's resolved.
 * 3. DEBUG flag has been removed in favor of always-on verbose errors since:
 *      a. There is no sensitive content on this site. Not even an API.
 *      b. Cache purges are easier to execute in the Cloudflare Dashboard.
 * 4. The addition of createResponseWithHeaders() which adds security headers
 *    to 200 & 404 responses, setting some useless-to-us headers such as:
 *      a. XSS Protection, despite a total lack of JS on this site. Yes,
 *         not even the Cloudflare Rocket Loader is inserted here.
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
  const url = new URL(event.request.url)
  let options = {}

  try {
    const page = await getAssetFromKV(event, options)
    return createResponseWithHeaders(page.body, page)
  } catch (e) {
    // if an error is thrown try to serve the asset at 404/
    try {
      let notFoundResponse = await getAssetFromKV(event, {
        mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404/index.html`, req),
      })

      return createResponseWithHeaders(notFoundResponse.body, { ...notFoundResponse, status: 404 })
    } catch (e) {}

    return new Response(e.message || e.toString(), { status: 500 })
  }
}

function createResponseWithHeaders(pageBody, page) {
  const response = new Response(pageBody, page)

  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('Content-Security-Policy', 'default-src https://chris.partridge.tech:443')
  response.headers.set('Referrer-Policy', 'no-referrer-when-downgrade')

  return response
}