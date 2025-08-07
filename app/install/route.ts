export async function GET(): Promise<Response> {
  const upstreamUrl = 'https://raw.githubusercontent.com/snorj/FundFlow/main/run.sh'

  try {
    const upstream = await fetch(upstreamUrl, { cache: 'no-store' })

    if (!upstream.ok) {
      const fallback = `#!/bin/bash\necho "Installer temporarily unavailable (HTTP ${upstream.status})" >&2\nexit 1\n`
      return new Response(fallback, {
        status: 502,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      })
    }

    const body = await upstream.text()
    return new Response(body, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 's-maxage=300, stale-while-revalidate=3600',
      },
    })
  } catch (error) {
    const fallback = '#!/bin/bash\necho "Installer temporarily unavailable (network error)" >&2\nexit 1\n'
    return new Response(fallback, {
      status: 502,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  }
}

