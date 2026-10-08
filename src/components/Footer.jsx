import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>DorkGen</p>
            <p className="text-xs text-muted-foreground max-w-sm">
              For authorized security research only. Always obtain written permission before testing any system.
            </p>
          </div>
          <p className="text-xs text-muted-foreground font-mono shrink-0">© 2025 DorkGen</p>
        </div>
      </div>
    </footer>
  );
};
