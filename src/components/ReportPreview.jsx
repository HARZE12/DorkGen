import React, { useState, useEffect } from 'react';
import { copyText } from '../utils/clipboard';
import { downloadFile, targetSlug } from '../utils/export';

export const ReportPreview = ({ report, domain, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const handleCopy = async () => {
    const ok = await copyText(report.txt);
    setCopied(ok);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-md w-full max-w-3xl max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-border">
          <div>
            <h2 className="text-sm font-semibold text-foreground">Report preview</h2>
            <p className="text-xs text-muted-foreground font-mono">{domain}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="h-8 px-3 text-xs font-medium rounded border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-150 cursor-pointer"
            >
              {copied ? 'Copied' : 'Copy report'}
            </button>
            <button
              onClick={() => downloadFile(`dorkgen-report-${targetSlug(domain)}.md`, report.md, 'text/markdown')}
              className="h-8 px-3 text-xs font-medium rounded border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-150 cursor-pointer"
            >
              Download .md
            </button>
            <button
              onClick={() => downloadFile(`dorkgen-report-${targetSlug(domain)}.txt`, report.txt, 'text/plain')}
              className="h-8 px-3 text-xs font-medium rounded bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-150 cursor-pointer"
            >
              Download .txt
            </button>
            <button
              onClick={onClose}
              aria-label="Close report"
              className="w-8 h-8 flex items-center justify-center rounded text-muted-foreground hover:text-foreground transition-colors duration-150 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <pre className="flex-1 overflow-auto p-4 text-xs font-mono text-foreground whitespace-pre-wrap break-all">
          {report.txt}
        </pre>
      </div>
    </div>
  );
};
