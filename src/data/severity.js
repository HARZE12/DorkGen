export const SEVERITY_ORDER = ['Critical', 'High', 'Medium', 'Low'];

export const CATEGORY_SEVERITY = {
  'SQL Injection': 'Critical',
  'File Upload': 'Critical',
  'Vulnerabilities': 'Critical',
  'Sensitive Information': 'High',
  'Authentication': 'High',
  'Admin Portals': 'High',
  'Files': 'High',
  'Cloud Storage': 'Medium',
  'Code Repositories': 'Medium',
  'Website Discovery': 'Medium',
  'IoT & Smart Devices': 'Medium',
  'XSS': 'Low',
  'Company Research': 'Low',
  'Social Media': 'Low',
};

export const SEVERITY_STYLES = {
  Critical: {
    heading: 'text-red-400',
    badge: 'border-red-400/40 bg-red-500/10 text-red-400',
    report: '--- CRITICAL ---',
  },
  High: {
    heading: 'text-orange-400',
    badge: 'border-orange-400/40 bg-orange-500/10 text-orange-400',
    report: '--- HIGH ---',
  },
  Medium: {
    heading: 'text-amber-400',
    badge: 'border-amber-400/40 bg-amber-500/10 text-amber-400',
    report: '--- MEDIUM ---',
  },
  Low: {
    heading: 'text-green-400',
    badge: 'border-green-400/40 bg-green-500/10 text-green-400',
    report: '--- LOW ---',
  },
};

export const DEFAULT_SEVERITY = 'Medium';

export function severityFor(category) {
  return CATEGORY_SEVERITY[category] || DEFAULT_SEVERITY;
}

export function severityRank(severity) {
  const index = SEVERITY_ORDER.indexOf(severity);
  return index === -1 ? SEVERITY_ORDER.length : index;
}

export function sortResults(results) {
  const categoryOrder = new Map();
  results.forEach((result) => {
    if (!categoryOrder.has(result.category)) {
      categoryOrder.set(result.category, categoryOrder.size);
    }
  });
  return [...results].sort(
    (a, b) =>
      severityRank(a.severity) - severityRank(b.severity) ||
      categoryOrder.get(a.category) - categoryOrder.get(b.category)
  );
}

export function severityBreakdown(results) {
  const counts = { Critical: 0, High: 0, Medium: 0, Low: 0 };
  results.forEach((result) => {
    counts[result.severity] = (counts[result.severity] || 0) + 1;
  });
  return counts;
}

export function groupBySeverity(results) {
  const groups = [];
  SEVERITY_ORDER.forEach((severity) => {
    const items = results.filter((r) => r.severity === severity);
    if (items.length === 0) return;
    const categories = [];
    items.forEach((item) => {
      let bucket = categories.find((c) => c.category === item.category);
      if (!bucket) {
        bucket = { category: item.category, items: [] };
        categories.push(bucket);
      }
      bucket.items.push(item);
    });
    groups.push({ severity, count: items.length, categories });
  });
  return groups;
}
