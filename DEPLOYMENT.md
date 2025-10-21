# Deployment Guide

## Vercel Deployment

### Quick Deploy

1. Push to GitHub
2. Import in Vercel dashboard
3. Deploy automatically

### CLI Deploy

```bash
npm install -g vercel
vercel
```

## Configuration

The project is configured via `vercel.json`:

- Build command: `npm run build`
- Output directory: `build`
- Rewrites enabled for client-side routing

## Post-Deployment

Test all features and verify the build works correctly.
