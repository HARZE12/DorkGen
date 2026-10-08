import React, { useState, useRef, useEffect } from 'react';
import { openTabProviderGoogle, openTabProviderBing, openTabProviderYahoo } from '../services/searchProvider';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const randomJitter = () => Math.floor(Math.random() * 6);

export const RunQueue = ({ results }) => {
  const [delay, setDelay] = useState(15);
  const [batchSize, setBatchSize] = useState(10);
  const [budget, setBudget] = useState(25);
  const [engineId, setEngineId] = useState('google');
  const [ui, setUi] = useState({
    status: 'idle',
    used: 0,
    batchUsed: 0,
    countdown: 0,
    ranCount: 0,
    message: '',
  });

  const getProvider = () => {
    if (engineId === 'bing') return openTabProviderBing;
    if (engineId === 'yahoo') return openTabProviderYahoo;
    return openTabProviderGoogle;
  };

  const engine = useRef({
    status: 'idle',
    used: 0,
    batchUsed: 0,
    countdown: 0,
    ranIds: new Set(),
    message: '',
    timer: null,
    interval: null,
    settings: { delay: 15, batchSize: 10, budget: 25 },
  });

  useEffect(() => {
    engine.current.settings = { delay, batchSize, budget };
  }, [delay, batchSize, budget]);

  useEffect(() => () => {
    const s = engine.current;
    if (s.timer) clearTimeout(s.timer);
    if (s.interval) clearInterval(s.interval);
  }, []);

  const sync = () => {
    const s = engine.current;
    setUi({
      status: s.status,
      used: s.used,
      batchUsed: s.batchUsed,
      countdown: s.countdown,
      ranCount: s.ranIds.size,
      message: s.message,
    });
  };

  const clearTimers = () => {
    const s = engine.current;
    if (s.timer) clearTimeout(s.timer);
    if (s.interval) clearInterval(s.interval);
    s.timer = null;
    s.interval = null;
    s.countdown = 0;
  };

  const openNext = () => {
    const s = engine.current;
    const { settings } = s;
    const pending = results.find((r) => !s.ranIds.has(r.id));

    if (!pending) {
      clearTimers();
      s.status = 'stopped';
      s.message = 'All queries in this list have been opened.';
      sync();
      return;
    }
    if (s.used >= settings.budget) {
      clearTimers();
      s.status = 'stopped';
      s.message = `Session budget of ${settings.budget} searches reached. Raise the budget or reset the session.`;
      sync();
      return;
    }

    getProvider().open(pending.query);
    s.ranIds.add(pending.id);
    s.used += 1;
    s.batchUsed += 1;

    if (s.used >= settings.budget) {
      clearTimers();
      s.status = 'stopped';
      s.message = `Session budget of ${settings.budget} searches used.`;
      sync();
      return;
    }
    if (s.batchUsed >= settings.batchSize) {
      clearTimers();
      s.status = 'paused';
      s.message = `Batch of ${settings.batchSize} complete. Review the tab, then press Continue.`;
      sync();
      return;
    }

    s.status = 'running';
    scheduleNext(settings.delay + randomJitter());
    sync();
  };

  const scheduleNext = (seconds) => {
    const s = engine.current;
    s.countdown = seconds;
    s.interval = setInterval(() => {
      const st = engine.current;
      st.countdown = Math.max(0, st.countdown - 1);
      sync();
    }, 1000);
    s.timer = setTimeout(() => {
      const st = engine.current;
      if (st.interval) clearInterval(st.interval);
      st.interval = null;
      st.timer = null;
      st.countdown = 0;
      openNext();
    }, seconds * 1000);
  };

  const start = () => {
    const s = engine.current;
    clearTimers();
    s.batchUsed = 0;
    s.status = 'running';
    s.message = '';
    openNext();
  };

  const stop = (reason) => {
    const s = engine.current;
    clearTimers();
    s.status = 'stopped';
    s.message = reason;
    sync();
  };

  const reset = () => {
    const s = engine.current;
    clearTimers();
    s.status = 'idle';
    s.used = 0;
    s.batchUsed = 0;
    s.ranIds = new Set();
    s.message = '';
    sync();
  };

  const total = results.length;
  const pending = total - ui.ranCount;
  const running = ui.status === 'running';

  return (
    <div className="border border-border rounded-md bg-card p-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Run queue (paced)</p>
          <p className="text-xs text-muted-foreground mt-1 max-w-2xl">
            Opens one search at a time with a delay so the pacing stays human. Slow pacing avoids
            triggering Google unusual-traffic limits. Nothing runs in the background and no queries
            are repeated.
          </p>
        </div>
        <span
          className={`text-xs font-mono px-2 py-1 rounded border ${
            running
              ? 'border-primary/40 text-primary bg-primary/10'
              : ui.status === 'paused'
                ? 'border-amber-400/40 text-amber-400 bg-amber-500/10'
                : 'border-border text-muted-foreground'
          }`}
        >
          {ui.status.toUpperCase()}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        <label className="text-xs text-muted-foreground space-y-1">
          <span>Delay between queries (10-30s)</span>
          <input
            type="number"
            min="10"
            max="30"
            value={delay}
            onChange={(e) => setDelay(clamp(Number(e.target.value) || 10, 10, 30))}
            className="w-full h-8 px-2 text-xs font-mono bg-muted border border-border rounded outline-none focus:border-primary/60 text-foreground"
          />
        </label>
        <label className="text-xs text-muted-foreground space-y-1">
          <span>Queries per batch</span>
          <input
            type="number"
            min="1"
            max="25"
            value={batchSize}
            onChange={(e) => setBatchSize(clamp(Number(e.target.value) || 1, 1, 25))}
            className="w-full h-8 px-2 text-xs font-mono bg-muted border border-border rounded outline-none focus:border-primary/60 text-foreground"
          />
        </label>
        <label className="text-xs text-muted-foreground space-y-1">
          <span>Session budget (max searches)</span>
          <input
            type="number"
            min="1"
            max="100"
            value={budget}
            onChange={(e) => setBudget(clamp(Number(e.target.value) || 1, 1, 100))}
            className="w-full h-8 px-2 text-xs font-mono bg-muted border border-border rounded outline-none focus:border-primary/60 text-foreground"
          />
        </label>
        <label className="text-xs text-muted-foreground space-y-1">
          <span>Search engine</span>
          <select
            value={engineId}
            onChange={(e) => { reset(); setEngineId(e.target.value); }}
            className="w-full h-8 px-2 text-xs font-mono bg-muted border border-border rounded outline-none focus:border-primary/60 text-foreground"
          >
            <option value="google">Google</option>
            <option value="bing">Bing</option>
            <option value="yahoo">Yahoo</option>
          </select>
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={start}
          disabled={pending === 0 || running}
          className="h-8 px-3 text-xs font-medium rounded bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity duration-150 cursor-pointer"
        >
          {ui.used > 0 || ui.ranCount > 0 ? 'Start / Resume' : 'Start queue'}
        </button>
        {ui.status === 'paused' && (
          <button
            onClick={start}
            className="h-8 px-3 text-xs font-medium rounded border border-primary/40 text-primary hover:bg-primary/10 transition-colors duration-150 cursor-pointer"
          >
            Continue
          </button>
        )}
        <button
          onClick={() => stop('Stopped by user. Remaining queries stay pending.')}
          disabled={ui.status === 'idle' || ui.status === 'stopped'}
          className="h-8 px-3 text-xs font-medium rounded border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          Stop
        </button>
        <button
          onClick={() => stop('Halted: the selected search engine may be showing an unusual-traffic page. Wait before retrying, use API mode, or export the queries.')}
          className="h-8 px-3 text-xs font-medium rounded border border-destructive/40 text-destructive hover:bg-destructive/10 transition-colors duration-150 cursor-pointer"
        >
          Halt (captcha hit)
        </button>
        <button
          onClick={reset}
          className="h-8 px-3 text-xs font-medium rounded text-muted-foreground hover:text-foreground transition-colors duration-150 cursor-pointer"
        >
          Reset session
        </button>
      </div>

      <div className="border-t border-border pt-3 space-y-1.5">
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs font-mono text-muted-foreground">
          <span>Pending: <span className="text-foreground">{pending}</span> / {total}</span>
          <span>Opened: <span className="text-foreground">{ui.ranCount}</span></span>
          <span>Session: <span className="text-foreground">{ui.used}</span> / {budget}</span>
          <span>Batch: <span className="text-foreground">{ui.batchUsed}</span> / {batchSize}</span>
          {running && ui.countdown > 0 && (
            <span className="text-primary">Next query in {ui.countdown}s</span>
          )}
        </div>
        <div className="h-1.5 bg-muted rounded overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${total ? (ui.ranCount / total) * 100 : 0}%` }}
          />
        </div>
        {ui.message && <p className="text-xs text-foreground">{ui.message}</p>}
      </div>
    </div>
  );
};
