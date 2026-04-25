import React, { useState } from 'react';

export const DorkCard = ({ title, description, generateDork, domain, category }) => {
  const [copied, setCopied] = useState(false);
  const [dorkQuery, setDorkQuery] = useState('');

  const handleGenerate = () => {
    setDorkQuery(generateDork(domain));
  };

  const copyText = (text) => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); })
        .catch(() => copyFallback(text));
    } else {
      copyFallback(text);
    }
  };

  const copyFallback = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.focus();
    el.select();
    try {
      if (document.execCommand('copy')) { setCopied(true); setTimeout(() => setCopied(false), 2000); }
    } finally {
      document.body.removeChild(el);
    }
  };

  const handleSearchGoogle = () => {
    if (dorkQuery) window.open(`https://www.google.com/search?q=${encodeURIComponent(dorkQuery)}`, '_blank');
  };

  return (
    <div className="border border-border rounded-md bg-card hover:border-primary/40 transition-colors duration-150 flex flex-col">
      <div className="p-4 flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-sm font-semibold text-foreground leading-snug" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
            {title}
          </h3>
          <span className="shrink-0 text-xs font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded border border-border">
            {category}
          </span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div className="px-4 pb-4">
        {!dorkQuery ? (
          <button
            onClick={handleGenerate}
            disabled={!domain}
            className="w-full h-9 flex items-center justify-center gap-1.5 text-xs font-medium rounded bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity duration-150 cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Generate
          </button>
        ) : (
          <div className="space-y-2">
            <pre className="bg-muted border border-border rounded p-2.5 text-xs font-mono text-foreground overflow-x-auto whitespace-pre-wrap break-all">
              {dorkQuery}
            </pre>
            <div className="flex gap-2">
              <button
                onClick={() => copyText(dorkQuery)}
                className="flex-1 h-8 flex items-center justify-center gap-1.5 text-xs font-medium rounded border border-border bg-transparent text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-150 cursor-pointer"
              >
                {copied ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy
                  </>
                )}
              </button>
              <button
                onClick={handleSearchGoogle}
                className="flex-1 h-8 flex items-center justify-center gap-1.5 text-xs font-medium rounded bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-150 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0118 0z" />
                </svg>
                Search
              </button>
            </div>
            <button
              onClick={() => setDorkQuery('')}
              className="w-full h-7 text-xs text-muted-foreground hover:text-foreground transition-colors duration-150 cursor-pointer"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
