export function getText(req) {
  const url = new URL(req.url, 'http://localhost')
  const value = url.searchParams.get('text') || ''
  return value.trim() || 'hai'
}

export function getEmojiStyle(req) {
  const url = new URL(req.url, 'http://localhost')
  const value = (url.searchParams.get('emoji') || 'twitter').toLowerCase()
  const styles = {
    twitter: 'twitter',
    iphone: 'apple',
    apple: 'apple',
    google: 'google',
    facebook: 'facebook',
    samsung: 'samsung',
    microsoft: 'microsoft'
  }
  return styles[value] || 'twitter'
}

export function setHeaders(res, contentType) {
  res.setHeader('Content-Type', contentType)
  res.setHeader('Cache-Control', 'no-store, max-age=0')
  res.setHeader('X-Storage-Policy', 'memory-only; deleted-after-response')
  res.setHeader('Access-Control-Allow-Origin', '*')
}

export function handleError(res, error) {
  console.error('[brat-api]', error)
  res.statusCode = 500
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify({ error: 'Gagal membuat output brat-canvas' }))
}
