import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export const InfoBanner = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="bg-accent/5 border-accent/20 mb-6">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-accent">How to Use These Dorks for Security Testing</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="h-auto p-1 text-accent hover:text-accent"
              >
                <svg 
                  className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </div>
            
            {isExpanded && (
              <div className="text-xs text-muted-foreground space-y-3 pt-2 animate-slide-in">
                <div>
                  <p className="font-semibold text-foreground mb-1">✅ What These Dorks Find:</p>
                  <ul className="space-y-1 ml-4 list-disc">
                    <li><strong>SQL Injection:</strong> Pages with parameters like ?id=, ?product=, ?category= that may be vulnerable</li>
                    <li><strong>XSS Targets:</strong> Search forms, comment sections, feedback forms where you can inject scripts</li>
                    <li><strong>File Upload:</strong> Upload forms to test for unrestricted file upload vulnerabilities</li>
                    <li><strong>Authentication:</strong> Login pages, admin panels, password reset forms for testing</li>
                    <li><strong>LFI/RFI:</strong> Pages with file include parameters like ?file=, ?include=, ?path=</li>
                    <li><strong>IDOR:</strong> Invoice, order, and profile pages with IDs to test access controls</li>
                    <li><strong>Open Redirect:</strong> Pages with redirect parameters like ?url=, ?return=</li>
                  </ul>
                </div>

                <div className="pt-2 border-t border-accent/20">
                  <p className="font-semibold text-foreground mb-1">🔧 How to Use:</p>
                  <ol className="space-y-1 ml-4 list-decimal">
                    <li>Enter target domain (must have permission to test)</li>
                    <li>Generate dork queries for specific vulnerability types</li>
                    <li><strong>Copy the query</strong> and paste it directly into Google search</li>
                    <li>Browse results to find potential test targets</li>
                    <li>Test endpoints using Burp Suite, OWASP ZAP, or manual testing</li>
                  </ol>
                </div>

                <div className="pt-2 border-t border-accent/20">
                  <p className="font-semibold text-destructive mb-1">⚠️ Why Direct Search Button May Not Work:</p>
                  <p className="mb-1">Google blocks automated search requests. To bypass:</p>
                  <ol className="space-y-1 ml-4 list-decimal">
                    <li><strong>Use Copy button</strong> instead - paste query into Google manually</li>
                    <li>Use Google search operators directly in browser</li>
                    <li>For bulk scanning, use tools like: <code className="bg-muted px-1 py-0.5 rounded text-primary">gau</code>, <code className="bg-muted px-1 py-0.5 rounded text-primary">waybackurls</code>, <code className="bg-muted px-1 py-0.5 rounded text-primary">gospider</code></li>
                  </ol>
                </div>

                <div className="pt-2 border-t border-destructive/20 bg-destructive/5 p-2 rounded">
                  <p className="font-semibold text-destructive mb-1">⚖️ Legal Notice:</p>
                  <p>Only test systems you own or have explicit written permission to test. Unauthorized testing is illegal and punishable by law. These tools are for educational and authorized security research only.</p>
                </div>
              </div>
            )}
            
            {!isExpanded && (
              <p className="text-xs text-muted-foreground">
                Click to learn how to find SQL injection, XSS, file upload, and other vulnerability testing targets. 
                <span className="text-accent font-semibold"> Why Google blocks automated searches explained inside.</span>
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
