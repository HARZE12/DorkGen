import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DorkCard } from './components/DorkCard';
import { InfoBanner } from './components/InfoBanner';
import { dorkTemplates } from './data/dorkTemplates';

function App() {
  const [domain, setDomain] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [generateAllTrigger, setGenerateAllTrigger] = useState(0);

  const categories = useMemo(() => {
    return ['All', ...new Set(dorkTemplates.map(d => d.category))];
  }, []);

  const categoryCounts = useMemo(() => {
    const counts = { All: dorkTemplates.length };
    dorkTemplates.forEach(d => {
      counts[d.category] = (counts[d.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredDorks = useMemo(() => {
    let filtered = dorkTemplates;
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(d => d.category === selectedCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(d =>
        d.title.toLowerCase().includes(q) || d.description.toLowerCase().includes(q)
      );
    }
    return filtered;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section
        className="container mx-auto px-4 pt-16 pb-12"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(0 0% 30% / 0.25) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-4">Security Research Tool</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
            Google Dork Generator
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed mb-8 mx-auto max-w-lg">
            Generate targeted search queries to surface vulnerable endpoints, exposed files, and misconfigured systems. For authorized security research only.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Enter domain (e.g. example.com)"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="flex-1 h-11 px-4 text-sm font-mono bg-card border border-border rounded outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors duration-150 text-foreground placeholder:text-muted-foreground"
            />
            <button
              disabled={!domain}
              className="h-11 px-6 text-sm font-medium bg-primary text-primary-foreground rounded hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity duration-150 cursor-pointer shrink-0"
            >
              Set target
            </button>
          </div>

          {domain && (
            <p className="mt-3 text-xs font-mono text-muted-foreground animate-slide-in">
              Target: <span className="text-foreground">{domain}</span>
            </p>
          )}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Filters */}
      <section className="container mx-auto px-4 py-6">
        <InfoBanner />

        <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center justify-between mb-4">
          <div className="flex flex-wrap gap-1.5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`h-7 px-3 text-xs font-medium rounded border transition-colors duration-150 cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-transparent text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground'
                }`}
              >
                {cat}
                <span className={`font-mono ${selectedCategory === cat ? 'opacity-70' : 'opacity-50'}`}>
                  {categoryCounts[cat]}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 w-full lg:w-auto">
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 lg:w-56 h-8 px-3 text-xs bg-card border border-border rounded outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors duration-150 text-foreground placeholder:text-muted-foreground"
            />
            {domain && (
              <button
                onClick={() => setGenerateAllTrigger(t => t + 1)}
                className="shrink-0 h-8 px-3 text-xs font-medium rounded bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors duration-150 cursor-pointer"
              >
                Generate all
              </button>
            )}
          </div>
        </div>

        <p className="text-xs text-muted-foreground font-mono">
          {filteredDorks.length} template{filteredDorks.length !== 1 ? 's' : ''}
          {domain && <span className="ml-2 text-primary">— ready to generate</span>}
        </p>
      </section>

      {/* Cards */}
      <section className="container mx-auto px-4 pb-12 flex-1">
        {!domain && (
          <div className="border border-border rounded-md p-12 text-center">
            <p className="text-sm text-muted-foreground">Enter a target domain above to start generating queries.</p>
          </div>
        )}

        {domain && filteredDorks.length === 0 && (
          <div className="border border-border rounded-md p-12 text-center">
            <p className="text-sm text-muted-foreground">No templates match your search. Try adjusting the filters.</p>
          </div>
        )}

        {domain && filteredDorks.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredDorks.map((dork) => (
              <DorkCard
                key={dork.id}
                title={dork.title}
                description={dork.description}
                generateDork={dork.generateDork}
                domain={domain}
                category={dork.category}
                generateAllTrigger={generateAllTrigger}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default App;
