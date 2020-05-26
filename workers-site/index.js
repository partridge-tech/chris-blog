import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler'

/**
 * This is a downstream, modified version of the following repo:
 * https://github.com/cloudflare/worker-sites-template
 * 
 * The only changes of note are:
 * 1. this adds passThroughOnException() to all events, so if the Workers KV
 *    is down, data will be served from a backup source (GitLab Pages).
 * 2. 404s are served from 404/, not 404.html, which is a bad practice but
 *    is broken on GitLab Pages anyway, per
 *    https://gitlab.com/gitlab-org/gitlab-pages/-/issues/183
 *    ...and I might fix this to be 404.html when it's resolved.
 * 
 * The DEBUG flag will do two things that help during development:
 * 1. we will skip caching on the edge, which makes it easier to
 *    debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404/ page.
 */
const DEBUG = false

addEventListener('fetch', event => {
  event.passThroughOnException();
  try {
    event.respondWith(handleEvent(event))
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      )
    }
    event.respondWith(new Response('Internal Error', { status: 500 }))
  }
})

async function handleEvent(event) {
  const url = new URL(event.request.url)
  let options = {}

  try {
    if (DEBUG) {
      // customize caching
      options.cacheControl = {
        bypassCache: true,
      }
    }
    return await getAssetFromKV(event, options)
  } catch (e) {
    // if an error is thrown try to serve the asset at 404/
    if (!DEBUG) {
      try {
        let notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404/`, req),
        })

        return new Response(notFoundResponse.body, { ...notFoundResponse, status: 404 })
      } catch (e) {}
    }

    return new Response(e.message || e.toString(), { status: 500 })
  }
}