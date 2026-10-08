const GOOGLE_SEARCH_URL = 'https://www.google.com/search?q=';
const BING_SEARCH_URL = 'https://www.bing.com/search?q=';
const YAHOO_SEARCH_URL = 'https://search.yahoo.com/search?p=';

export const openTabProviderGoogle = {
  id: 'open-tab-google',
  label: 'Open in tab (Google, paced)',
  description: 'Opens one Google search at a time in a new tab. Slow pacing avoids triggering Google unusual-traffic limits.',
  open(query) {
    return window.open(GOOGLE_SEARCH_URL + encodeURIComponent(query), '_blank', 'noopener,noreferrer');
  },
};

export const openTabProviderBing = {
  id: 'open-tab-bing',
  label: 'Open in tab (Bing, paced)',
  description: 'Opens one Bing search at a time in a new tab with slow pacing.',
  open(query) {
    return window.open(BING_SEARCH_URL + encodeURIComponent(query), '_blank', 'noopener,noreferrer');
  },
};

export const openTabProviderYahoo = {
  id: 'open-tab-yahoo',
  label: 'Open in tab (Yahoo, paced)',
  description: 'Opens one Yahoo search at a time in a new tab with slow pacing.',
  open(query) {
    return window.open(YAHOO_SEARCH_URL + encodeURIComponent(query), '_blank', 'noopener,noreferrer');
  },
};

export const openTabProvider = openTabProviderGoogle; // default for backward compatibility

export const apiProvider = {
  id: 'official-api',
  label: 'Official API (serverless proxy)',
  description: 'Fetches results through the app\'s own /api/search proxy. Requires GOOGLE_API_KEY and GOOGLE_CSE_ID environment variables on the server.',
  async fetch(query, start = 1) {
    const response = await fetch(
      `/api/search?q=${encodeURIComponent(query)}&start=${encodeURIComponent(start)}`
    );
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error(data.message || data.error || `Request failed (${response.status})`);
      error.code = data.error || 'request_failed';
      error.status = response.status;
      throw error;
    }
    return data;
  },
};

export const providers = {
  [openTabProviderGoogle.id]: openTabProviderGoogle,
  [openTabProviderBing.id]: openTabProviderBing,
  [openTabProviderYahoo.id]: openTabProviderYahoo,
  [apiProvider.id]: apiProvider,
};
