export function downloadFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

const csvEscape = (value) => `"${String(value).replace(/"/g, '""')}"`;

export function resultsToCSV(results) {
  const header = ['severity', 'category', 'title', 'query'];
  const rows = results.map((r) =>
    [r.severity, r.category, r.title, r.query].map(csvEscape).join(',')
  );
  return [header.join(','), ...rows].join('\r\n');
}

export function resultsToTxt(results) {
  return results.map((r) => r.query).join('\n');
}

export function targetSlug(domain) {
  return domain.replace(/[^a-zA-Z0-9.-]+/g, '_') || 'target';
}
