import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export const DorkCard = ({ title, description, generateDork, domain, category }) => {
  const [copied, setCopied] = useState(false);
  const [dorkQuery, setDorkQuery] = useState('');

  const handleGenerate = () => {
    const query = generateDork(domain);
    setDorkQuery(query);
  };

  const handleCopy = () => {
    if (dorkQuery) {
      // Try modern Clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(dorkQuery)
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          })
          .catch(() => {
            // Fallback to older method
            copyTextFallback(dorkQuery);
          });
      } else {
        // Use fallback method directly
        copyTextFallback(dorkQuery);
      }
    }
  };

  const copyTextFallback = (text) => {
    // Create a temporary textarea element
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      // Use the older execCommand method
      const successful = document.execCommand('copy');
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    } finally {
      document.body.removeChild(textArea);
    }
  };

  const handleSearchGoogle = () => {
    if (dorkQuery) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(dorkQuery)}`, '_blank');
    }
  };

  return (
    <Card className="group hover:border-primary/50 transition-all duration-300 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <Badge variant="cyber" className="shrink-0">{category}</Badge>
        </div>
        <CardDescription className="text-muted-foreground mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {!dorkQuery ? (
          <Button 
            onClick={handleGenerate} 
            className="w-full"
            variant="cyber"
            disabled={!domain}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Generate Dork
          </Button>
        ) : (
          <div className="space-y-2">
            <div className="relative">
              <pre className="bg-muted/50 border border-primary/20 rounded-md p-3 text-xs font-mono text-primary overflow-x-auto">
                {dorkQuery}
              </pre>
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={handleCopy} 
                variant="outline"
                className="flex-1"
                size="sm"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy
                  </>
                )}
              </Button>
              <Button 
                onClick={handleSearchGoogle}
                variant="default"
                className="flex-1"
                size="sm"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </Button>
            </div>
            <Button 
              onClick={() => setDorkQuery('')}
              variant="ghost"
              className="w-full"
              size="sm"
            >
              Reset
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
