import React, { useState, useEffect, useMemo } from 'react';
import { SEVERITY_ORDER, SEVERITY_STYLES, severityBreakdown, groupBySeverity } from '../data/severity';
import { copyText } from '../utils/clipboard';
import { downloadFile, resultsToCSV, resultsToTxt, targetSlug } from '../utils/export';
import { buildReport } from '../utils/report';
import { apiProvider, openTabProviderGoogle, openTabProviderBing, openTabProviderYahoo } from '../services/searchProvider';
import { RunQueue } from './RunQueue';
import { ReportPreview } from './ReportPreview';

const PAGE_SIZE = 100;
const API_DAILY_LIMIT = 100;

const readApiUsage = () => {
  try {
    const raw = JSON.parse(localStorage.getItem('dorkgen_api_usage') || '{}');
    const today = new Date().toISOString().slice(0, 10);
    return raw.date === today ? raw.count || 0 : 0;
  } catch {
    return 0;
  }
};

const writeApiUsage = (count) => {
  try {
    const today = new Date().toISOString().slice(0, 10);
    localStorage.setItem('dorkgen_api_usage', JSON.stringify({ date: today, count }));
  } catch {
    /* storage unavailable */
  }
};

export const ResultsPanel = ({ results, domain, open, onToggle }) => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [toast, setToast] = useState('');
  const [showQueue, setShowQueue] = useState(false);
  const [report, setReport] = useState(null);
  const [apiState, setApiState] = useState({ loading: null, error: null, items: {}, used: readApiUsage() });
  const [engineId, setEngineId] = useState('google');

  const getSearchProvider = () => {
    if (engineId === 'bing') return openTabProviderBing;
    if (engineId === 'yahoo') return openTabProviderYahoo;
    return openTabProviderGoogle;
  };

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [results]);

  const groups = useMemo(() => groupBySeverity(results), [results]);
  const breakdown = useMemo(() => severityBreakdown(results), [results]);

  const flash = (message) => {
    setToast(message);
    setTimeout(() => setToast(''), 2000);
  };

  const handleCopy = async (text, message = 'Copied') => {
    const ok = await copyText(text);
    flash(ok ? message : 'Copy failed');
  };

  const handleGenerateReport = () => {
    setReport({
      txt: buildReport(results, domain, 'txt'),
      md: buildReport(results, domain, 'md'),
    });
  };

  const handleApiFetch = async (result) => {
    if (apiState.used >= API_DAILY_LIMIT) {
      flash('Local estimate: daily API budget reached');
      return;
    }
    setApiState((s) => ({ ...s, loading: result.id, error: null }));
    try {
      const data = await apiProvider.fetch(result.query);
      const used = apiState.used + 1;
      writeApiUsage(used);
      setApiState((s) => ({
        ...s,
        loading: null,
        used,
        items: { ...s.items, [result.id]: data.items || [] },
      }));
    } catch (error) {
      setApiState((s) => ({ ...s, loading: null, error: error.message }));
    }
  };

  if (!open) return null;

  let rendered = 0;
  const flat = [];

  groups.forEach((group) => {
    const visibleCategories = [];
    group.categories.forEach((bucket) => {
      const remaining = visibleCount - rendered;
      if (remaining <= 0) return;
      const visibleItems = bucket.items.slice(0, remaining);
      rendered += visibleItems.length;
      visibleCategories.push({ ...bucket, visibleItems });
    });
    if (visibleCategories.length > 0) flat.push({ ...group, categories: visibleCategories });
  });

  const hidden = results.length - rendered;
  const apiBudgetLeft = Math.max(0, API_DAILY_LIMIT - apiState.used);

  return (
    <section className="container mx-auto px-4 pb-6">
      <div className="border border-primary/30 rounded-md bg-card">
        <div className="px-4 py-3 border-b border-border flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-foreground" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              Results ({results.length})
            </h2>
            <p className="text-xs font-mono text-muted-foreground mt-0.5">
              {domain} —{' '}
              {SEVERITY_ORDER.map((s) => `${s}: ${breakdown[s]}`).join(' | ')}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleCopy(results.map((r) => r.query).join('\n'), 'All queries copied')}
              className="h-8 px-3 text-xs font-medium rounded border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-150 cursor-pointer"
            >
              Copy all
            </button>
            <button
              onClick={() => downloadFile(`dorkgen-queries-${targetSlug(domain)}.txt`, resultsToTxt(results), 'text/plain')}
              className="h-8 px-3 text-xs font-medium rounded border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-150 cursor-pointer"
            >
              Download .txt
            </button>
            <button
              onClick={() => downloadFile(`dorkgen-queries-${targetSlug(domain)}.csv`, resultsToCSV(results), 'text/csv')}
              className="h-8 px-3 text-xs font-medium rounded border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-150 cursor-pointer"
            >
              Download .csv
            </button>
            <button
              onClick={() => setShowQueue((v) => !v)}
              className={`h-8 px-3 text-xs font-medium rounded border transition-colors duration-150 cursor-pointer ${
                showQueue
                  ? 'border-primary/40 text-primary bg-primary/10'
                  : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground/30'
              }`}
            >
              Run queue
            </button>
            <select
              value={engineId}
              onChange={(e) => setEngineId(e.target.value)}
              className="shrink-0 h-8 px-2 text-xs font-mono rounded border border-border text-muted-foreground hover:text-foreground bg-transparent outline-none cursor-pointer"
              title="Per-query engine"
            >
              <option value="google">Google</option>
              <option value="bing">Bing</option>
              <option value="yahoo">Yahoo</option>
            </select>
            <button
              onClick={handleGenerateReport}
              className="h-8 px-3 text-xs font-medium rounded bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-150 cursor-pointer"
            >
              Generate report
            </button>
            <button
              onClick={onToggle}
              aria-label="Collapse results"
              className="w-8 h-8 flex items-center justify-center rounded text-muted-foreground hover:text-foreground transition-colors duration-150 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-4 pt-3 space-y-4">
          {toast && (
            <p className="text-xs font-mono text-primary animate-slide-in">{toast}</p>
          )}

          {showQueue && <RunQueue results={results} />}

          {apiState.error && (
            <p className="text-xs text-destructive">
              API mode: {apiState.error} (server needs GOOGLE_API_KEY / GOOGLE_CSE_ID env vars).
              Local API budget left today: {apiBudgetLeft}.
            </p>
          )}

          {flat.map((group) => (
            <div key={group.severity}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${SEVERITY_STYLES[group.severity].heading}`}>
                  [{group.severity.toUpperCase()}]
                </span>
                <span className="text-xs text-muted-foreground">{group.count} queries</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {group.categories.map((bucket) => (
                <div key={bucket.category} className="mb-3">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-foreground">{bucket.category}</span>
                    <button
                      onClick={() => handleCopy(bucket.items.map((i) => i.query).join('\n'), `${bucket.category} queries copied`)}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-150 cursor-pointer"
                    >
                      Copy category
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    {bucket.visibleItems.map((item) => (
                      <div key={item.id} className="border border-border rounded bg-muted/40 p-2.5">
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <p className="text-xs text-foreground font-medium">{item.title}</p>
                          <span className={`shrink-0 text-[10px] font-mono px-1.5 py-0.5 rounded border ${SEVERITY_STYLES[item.severity].badge}`}>
                            {item.severity}
                          </span>
                        </div>
                        <pre className="text-xs font-mono text-muted-foreground overflow-x-auto whitespace-pre-wrap break-all mb-2">
                          {item.query}
                        </pre>
                        <div className="flex flex-wrap items-center gap-2">
                          <button
                            onClick={() => handleCopy(item.query, 'Query copied')}
                            className="h-7 px-2.5 text-xs rounded border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-150 cursor-pointer"
                          >
                            Copy
                          </button>
                          <button
                            onClick={() => getSearchProvider().open(item.query)}
                            className="h-7 px-2.5 text-xs rounded border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-150 cursor-pointer"
                          >
                            Search
                          </button>
                          <button
                            onClick={() => handleApiFetch(item)}
                            disabled={apiState.loading === item.id || apiBudgetLeft === 0}
                            className="h-7 px-2.5 text-xs rounded border border-primary/30 text-primary hover:bg-primary/10 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-150 cursor-pointer"
                          >
                            {apiState.loading === item.id ? 'Fetching...' : 'Fetch results'}
                          </button>
                          {Array.isArray(apiState.items[item.id]) && (
                            <span className="text-[10px] font-mono text-muted-foreground">
                              {apiState.items[item.id].length} results via API
                            </span>
                          )}
                        </div>
                        {Array.isArray(apiState.items[item.id]) && apiState.items[item.id].length > 0 && (
                          <ul className="mt-2 space-y-1 border-t border-border pt-2">
                            {apiState.items[item.id].map((hit, i) => (
                              <li key={i} className="text-xs">
                                <a
                                  href={hit.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline"
                                >
                                  {hit.title}
                                </a>
                                {hit.snippet && (
                                  <p className="text-muted-foreground leading-relaxed">{hit.snippet}</p>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {hidden > 0 && (
            <div className="flex items-center justify-center gap-3 py-2">
              <span className="text-xs font-mono text-muted-foreground">{hidden} more hidden</span>
              <button
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="h-8 px-3 text-xs font-medium rounded border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-150 cursor-pointer"
              >
                Show {Math.min(PAGE_SIZE, hidden)} more
              </button>
            </div>
          )}
        </div>
      </div>

      {report && <ReportPreview report={report} domain={domain} onClose={() => setReport(null)} />}
    </section>
  );
};
