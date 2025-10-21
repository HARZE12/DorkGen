import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DorkCard } from './components/DorkCard';
import { InfoBanner } from './components/InfoBanner';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { ScrollArea } from './components/ui/scroll-area';
import { dorkTemplates } from './data/dorkTemplates';

function App() {
  const [domain, setDomain] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(dorkTemplates.map(d => d.category))];
    return cats;
  }, []);

  // Filter dorks based on category and search
  const filteredDorks = useMemo(() => {
    let filtered = dorkTemplates;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(d => d.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(d => 
        d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  const handleDomainSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(180 100% 50% / 0.05) 0%, transparent 50%)'
        }}></div>
        
        <div className="container mx-auto px-4 py-12 sm:py-16 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <Badge variant="cyber" className="text-xs sm:text-sm px-3 py-1">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Advanced Security Research Tool
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Google <span className="text-gradient glow-text">Dork</span> Generator
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Generate powerful Google dork queries to find vulnerable endpoints, forms, and pages. 
              Perfect for security researchers and penetration testers.
            </p>
            
            {/* Domain Input */}
            <form onSubmit={handleDomainSubmit} className="max-w-2xl mx-auto mt-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Enter Domain or Name  ..."
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="h-12 text-base font-mono"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="h-12 px-8"
                  disabled={!domain}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Generate Dorks
                </Button>
              </div>
            </form>
            
            {domain && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 animate-slide-in">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span className="text-sm font-mono text-accent">Target: {domain}</span>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Filters Section */}
      <section className="container mx-auto px-4 py-8">
        <InfoBanner />
        
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className="transition-all"
              >
                {cat}
              </Button>
            ))}
          </div>
          
          <div className="w-full lg:w-64">
            <Input
              type="text"
              placeholder="Search dork types..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10"
            />
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <span>Showing {filteredDorks.length} dork templates</span>
          {domain && (
            <span className="text-primary">Ready to generate queries</span>
          )}
        </div>
      </section>
      
      {/* Dork Cards Grid */}
      <section className="container mx-auto px-4 pb-12 flex-1">
        {!domain && (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-muted/50 flex items-center justify-center">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Enter a domain to get started</h3>
            <p className="text-muted-foreground">Enter a target domain above to generate Google dork queries</p>
          </div>
        )}
        
        {domain && filteredDorks.length === 0 && (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-muted/50 flex items-center justify-center">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">No results found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
        
        {domain && filteredDorks.length > 0 && (
          <ScrollArea className="h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredDorks.map((dork) => (
                <DorkCard
                  key={dork.id}
                  title={dork.title}
                  description={dork.description}
                  generateDork={dork.generateDork}
                  domain={domain}
                  category={dork.category}
                />
              ))}
            </div>
          </ScrollArea>
        )}
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
