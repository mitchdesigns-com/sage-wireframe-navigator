export async function fetchServer(pageURL: string, lang: string) {
  // const token = process.env.NEXT_PUBLIC_API_TOKEN
  const separator = pageURL.includes('?') ? '&' : '?'

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/${pageURL}${separator}locale=${lang}`,
    {
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // helpful in Next.js to avoid caching issues
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch Props')
  }

  const json = await res.json()
  return { data: json.data }
}

export async function fetchSEO(pageURL: string, lang: string) {
  const token = process.env.NEXT_PUBLIC_API_TOKEN
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/${pageURL}?locale${lang}&populate[Seo][populate]=*`,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Add Bearer token here
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
