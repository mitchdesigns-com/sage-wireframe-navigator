import fallbacks from '@/data/fallback/index'

function getFallback(pageURL: string, lang: string) {
  const key = pageURL.split('?')[0]
  const fb = fallbacks[key]?.[lang] ?? fallbacks[key]?.['en'] ?? null
  if (fb) console.warn(`[fallback] serving cached data for ${key} [${lang}]`)
  return { data: fb }
}

export async function fetchServer(pageURL: string, lang: string) {
  const separator = pageURL.includes('?') ? '&' : '?'

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/${pageURL}${separator}locale=${lang}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 60 },
      }
    )
    const json = await res.json();
    if (!res.ok) {
      console.error(`Failed to fetch ${pageURL}: ${res.status} ${res.statusText}`);
      return getFallback(pageURL, lang);
    }

    return { data: json.data }
  } catch (error) {
    console.error(`Error fetching ${pageURL}:`, error);
    return getFallback(pageURL, lang);
  }
}

export async function fetchSEO(pageURL: string, lang: string) {
  const token = process.env.NEXT_PUBLIC_API_TOKEN
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/${pageURL}?locale${lang}&populate[Seo][populate]=*`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch Props')
  }

  const json = await res.json()

  return { data: json.data }
}
