import React, { useMemo, useState } from 'react';
import { Screen } from '../App';

type LogbookEntry = {
  id: string;
  date: string; // YYYY-MM-DD
  aircraft: string;
  route: string;
  hours: number;
  remarks?: string;
};

const seedEntries: LogbookEntry[] = [
  { id: 'e1', date: '2025-12-01', aircraft: 'C172', route: 'KORL → KISM', hours: 1.2, remarks: 'Pattern work, landings' },
  { id: 'e2', date: '2025-12-07', aircraft: 'C172', route: 'KISM → KORL', hours: 1.3, remarks: 'Steep turns, stalls' },
  { id: 'e3', date: '2025-12-14', aircraft: 'C172', route: 'Local', hours: 0.9, remarks: 'Slow flight' },
];

interface Props {
  onNavigate: (screen: Screen) => void;
}

export const Logbook: React.FC<Props> = ({ onNavigate }) => {
  const [entries, setEntries] = useState<LogbookEntry[]>(seedEntries);
  const [date, setDate] = useState<string>(() => new Date().toISOString().slice(0, 10));
  const [aircraft, setAircraft] = useState('C172');
  const [route, setRoute] = useState('');
  const [hours, setHours] = useState('1.0');
  const [remarks, setRemarks] = useState('');

  const totalHours = useMemo(() => entries.reduce((sum, e) => sum + e.hours, 0), [entries]);

  const addEntry = () => {
    const parsed = Number(hours);
    if (!date || !aircraft.trim() || !route.trim() || !Number.isFinite(parsed) || parsed <= 0) return;
    const newEntry: LogbookEntry = {
      id: `e-${Date.now()}`,
      date,
      aircraft: aircraft.trim(),
      route: route.trim(),
      hours: Math.round(parsed * 10) / 10,
      remarks: remarks.trim() || undefined,
    };
    setEntries((prev) => [newEntry, ...prev]);
    setRoute('');
    setHours('1.0');
    setRemarks('');
  };

  return (
    <div className="bg-background font-display text-white min-h-screen flex flex-col pb-24">
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center px-4 py-4 justify-between">
          <button
            onClick={() => onNavigate(Screen.CourseOverview)}
            className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold leading-tight tracking-tight">Logbook</h2>
            <p className="text-xs text-text-secondary font-medium">{entries.length} entries • {totalHours.toFixed(1)} hrs</p>
          </div>
          <div className="w-10" />
        </div>
      </div>

      <div className="px-4 pt-5">
        <div className="rounded-2xl bg-surface border border-gray-800 p-4 shadow-sm">
          <h3 className="font-bold text-base mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">add</span>
            Add Flight
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <label className="flex flex-col gap-1">
              <span className="text-[11px] font-bold uppercase tracking-wide text-text-secondary">Date</span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-background/40 border border-gray-700 rounded-xl px-3 py-2 text-sm text-white focus:ring-primary focus:border-primary"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-[11px] font-bold uppercase tracking-wide text-text-secondary">Aircraft</span>
              <input
                value={aircraft}
                onChange={(e) => setAircraft(e.target.value)}
                placeholder="C172"
                className="bg-background/40 border border-gray-700 rounded-xl px-3 py-2 text-sm text-white focus:ring-primary focus:border-primary"
              />
            </label>
            <label className="flex flex-col gap-1 col-span-2">
              <span className="text-[11px] font-bold uppercase tracking-wide text-text-secondary">Route</span>
              <input
                value={route}
                onChange={(e) => setRoute(e.target.value)}
                placeholder="e.g. KORL → KISM"
                className="bg-background/40 border border-gray-700 rounded-xl px-3 py-2 text-sm text-white focus:ring-primary focus:border-primary"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-[11px] font-bold uppercase tracking-wide text-text-secondary">Hours</span>
              <input
                inputMode="decimal"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                placeholder="1.0"
                className="bg-background/40 border border-gray-700 rounded-xl px-3 py-2 text-sm text-white focus:ring-primary focus:border-primary"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-[11px] font-bold uppercase tracking-wide text-text-secondary">Remarks</span>
              <input
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Optional"
                className="bg-background/40 border border-gray-700 rounded-xl px-3 py-2 text-sm text-white focus:ring-primary focus:border-primary"
              />
            </label>
          </div>

          <button
            onClick={addEntry}
            className="mt-4 w-full h-12 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-colors active:scale-[0.98]"
          >
            Save Entry
          </button>
        </div>
      </div>

      <div className="px-4 pt-6 flex-1">
        <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider px-1 mb-3">Recent Flights</h3>
        <div className="flex flex-col gap-3">
          {entries.map((e) => (
            <div key={e.id} className="rounded-2xl bg-surface border border-gray-800 p-4 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-white font-semibold truncate">{e.route}</p>
                  <p className="text-xs text-text-secondary mt-0.5">{e.date} • {e.aircraft}</p>
                  {e.remarks && <p className="text-sm text-slate-300 mt-2">{e.remarks}</p>}
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-white font-bold text-lg">{e.hours.toFixed(1)}</p>
                  <p className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">hrs</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


