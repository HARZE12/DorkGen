const REQUIRED_ENV = ['GOOGLE_API_KEY', 'GOOGLE_CSE_ID'];

async function handler(req, res) {
  const missing = REQUIRED_ENV.filter((name) => !process.env[name]);
  if (missing.length > 0) {
    res.status(503).json({
      error: 'not_configured',
      message: `Server is missing environment variables: ${missing.join(', ')}.`,
    });
    return;
  }

  const { q, start } = req.method === 'GET' ? req.query : req.body || {};
  if (!q || typeof q !== 'string') {
    res.status(400).json({ error: 'missing_query', message: 'Provide a q parameter.' });
    return;
  }

  const params = new URLSearchParams({
    key: process.env.GOOGLE_API_KEY,
    cx: process.env.GOOGLE_CSE_ID,
    q,
  });
  const startValue = Number(start);
  if (Number.isInteger(startValue) && startValue >= 1 && startValue <= 91) {
    params.set('start', String(startValue));
  }

  try {
    const upstream = await fetch(`https://www.googleapis.com/customsearch/v1?${params.toString()}`);
    const data = await upstream.json().catch(() => ({}));
    if (!upstream.ok) {
      res.status(upstream.status).json({
        error: 'upstream_error',
        message: data.error?.message || 'Google Custom Search API returned an error.',
      });
      return;
    }
    res.status(200).json({
      items: (data.items || []).map((item) => ({
        title: item.title,
        link: item.link,
        snippet: item.snippet,
      })),
      total: data.searchInformation?.totalResults || '0',
      remainingEstimate: null,
    });
  } catch {
    res.status(502).json({ error: 'fetch_failed', message: 'Could not reach Google API.' });
  }
}

module.exports = handler;
