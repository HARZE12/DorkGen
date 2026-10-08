import { SEVERITY_ORDER, SEVERITY_STYLES, severityBreakdown, groupBySeverity } from '../data/severity';

const formatDate = (date) => {
  const pad = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
};

const buildHeader = (results, domain, date, width) => {
  const breakdown = severityBreakdown(results);
  const counts = SEVERITY_ORDER.map((s) => `${s}: ${breakdown[s]}`).join(', ');
  const title = 'DorkGen Security Recon Report';
  const lines = [
    { text: ` ${title}`, center: false },
    { text: ` Target: ${domain}`, center: false },
    { text: ` Date:   ${formatDate(date)}`, center: false },
    { text: ` Total:  ${results.length} queries (${counts})`, center: false },
  ];
  const bar = '='.repeat(width);
  return { bar, lines };
};

export function buildReport(results, domain, format = 'txt', date = new Date()) {
  const groups = groupBySeverity(results);
  const width = 60;
  const { bar, lines } = buildHeader(results, domain, date, width);
  const out = [];

  if (format === 'md') {
    out.push(`# DorkGen Security Recon Report`, '');
    out.push(`- **Target:** ${domain}`);
    out.push(`- **Date:** ${formatDate(date)}`);
    const breakdown = severityBreakdown(results);
    out.push(`- **Total:** ${results.length} queries`);
    out.push(
      `- **Breakdown:** ${SEVERITY_ORDER.map((s) => `${s} ${breakdown[s]}`).join(' | ')}`
    );
    out.push('');
    groups.forEach((group) => {
      out.push(`## [${group.severity.toUpperCase()}]`, '');
      group.categories.forEach((bucket) => {
        out.push(`### ${bucket.category}`, '');
        bucket.items.forEach((item, index) => {
          out.push(`${index + 1}. **${item.title}**`);
          out.push('');
          out.push('```');
          out.push(item.query);
          out.push('```');
          out.push('');
        });
      });
    });
    return out.join('\n').trimEnd() + '\n';
  }

  out.push(bar);
  lines.forEach((line) => out.push(line.text));
  out.push(bar);
  groups.forEach((group) => {
    out.push('');
    out.push(SEVERITY_STYLES[group.severity].report);
    group.categories.forEach((bucket) => {
      out.push('');
      out.push(`[${group.severity.toUpperCase()}] ${bucket.category}`);
      out.push('');
      bucket.items.forEach((item, index) => {
        out.push(`  ${index + 1}. ${item.title}`);
        out.push(`     ${item.query}`);
        out.push('');
      });
    });
  });
  return out.join('\n');
}
