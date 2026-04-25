import React from 'react';

export const Header = () => {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-primary flex items-center justify-center">
              <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <span className="text-base font-semibold text-foreground tracking-tight" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              DorkGen
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="hidden sm:block text-xs text-muted-foreground font-mono">
              780+ templates
            </span>
            <a
              href="https://github.com/HARZE12"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              <img
                src="https://github.com/HARZE12.png"
                alt="HARZE12"
                className="w-7 h-7 rounded-full border border-border"
              />
              <span className="hidden md:block text-sm font-medium">HARZE12</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
