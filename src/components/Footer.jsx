import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-md mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">DorkGen</h3>
            <p className="text-sm text-muted-foreground">
              Advanced Google Dorking tool for security researchers and penetration testers.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Disclaimer</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              This tool is for educational and ethical security research purposes only. Always obtain proper authorization before testing any systems.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Legal Notice</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Users are responsible for compliance with applicable laws. Unauthorized access to computer systems is illegal.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground font-mono">
              © 2025 DorkGen. Use responsibly.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Powered by</span>
              <span className="text-xs font-semibold text-primary">Advanced Search Techniques</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
