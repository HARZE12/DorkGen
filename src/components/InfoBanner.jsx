import React, { useState } from 'react';

export const InfoBanner = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-border rounded-md mb-6 bg-card">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/50 transition-colors duration-150 cursor-pointer"
      >
        <div className="flex items-center gap-2.5">
          <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-medium text-foreground">How to use these dorks</span>
        </div>
        <svg
          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 pt-1 border-t border-border animate-slide-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
            <div>
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">What these dorks find</p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                {[
                  ['SQL Injection', 'Parameters like ?id=, ?product=, ?category='],
                  ['XSS Targets', 'Search forms, comment sections, feedback inputs'],
                  ['File Upload', 'Upload forms for unrestricted file upload testing'],
                  ['Authentication', 'Login pages, admin panels, password reset flows'],
                  ['LFI / RFI', 'Include parameters like ?file=, ?include=, ?path='],
                  ['IDOR', 'Invoice, order, profile pages with enumerable IDs'],
                  ['Open Redirect', 'Redirect parameters like ?url=, ?return='],
                  ['Sensitive Files', 'Leaked PDFs, docs, configuration files'],
                  ['Cloud Storage', 'S3 buckets, AWS, Azure endpoints, Git keys'],
                  ['IoT Devices', 'Cameras and connected smart devices'],
                  ['Code Repositories', 'Exposed source code or API keys'],
                  ['Company Research', 'News, contact info, social profiles'],
                ].map(([label, desc]) => (
                  <li key={label} className="flex gap-2">
                    <span className="text-primary font-mono shrink-0">—</span>
                    <span><span className="text-foreground font-medium">{label}:</span> {desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Steps</p>
                <ol className="space-y-1.5 text-xs text-muted-foreground">
                  {[
                    'Enter a target domain you have permission to test',
                    'Generate dork queries for the vulnerability type',
                    'Copy the query and paste it into Google search',
                    'Browse results to identify potential test targets',
                    'Test with Burp Suite, OWASP ZAP, or manual methods',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary font-mono shrink-0">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">Why the search button may not work</p>
                <p className="text-xs text-muted-foreground">
                  Google blocks automated requests. Use Copy and paste manually instead.
                  For bulk scanning:{' '}
                  <code className="font-mono bg-muted px-1 py-0.5 rounded">gau</code>,{' '}
                  <code className="font-mono bg-muted px-1 py-0.5 rounded">waybackurls</code>,{' '}
                  <code className="font-mono bg-muted px-1 py-0.5 rounded">gospider</code>.
                </p>
              </div>

              <div className="border border-destructive/30 rounded bg-destructive/5 px-3 py-2.5">
                <p className="text-xs font-semibold text-destructive mb-1">Legal</p>
                <p className="text-xs text-muted-foreground">
                  Only test systems you own or have explicit written permission to test. Unauthorized testing is illegal.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
