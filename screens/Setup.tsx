import React from 'react';
import { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export const Setup: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background text-slate-900">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md border-b border-slate-200">
            <div className="flex items-center justify-between px-4 py-3">
                <button 
                    onClick={() => onNavigate(Screen.Walkthrough)}
                    className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-highlight transition-colors text-slate-700"
                >
                    <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
                </button>
                <h2 className="text-base font-bold uppercase tracking-wide">Setup</h2>
                <div className="w-10"></div>
            </div>
            <div className="flex flex-col gap-2 px-6 pb-4">
                <div className="flex gap-6 justify-between items-end">
                    <p className="text-text-secondary text-xs font-medium uppercase tracking-wider">Step 1 of 3</p>
                    <span className="text-primary text-xs font-bold">33%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-surface overflow-hidden">
                    <div className="h-full rounded-full bg-primary" style={{ width: '33%' }}></div>
                </div>
            </div>
        </div>

        <div className="flex-1 flex flex-col px-6 pb-32 pt-4">
            <div className="mb-8">
                <h1 className="text-[28px] font-bold leading-tight mb-3">Let's flight-plan your training</h1>
                <p className="text-text-secondary text-base font-normal leading-relaxed">
                    Welcome aboard, Captain. Tell us about your flight experience so we can calibrate your instruments.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">history_edu</span>
                    Current Experience
                </h3>
                <div className="flex flex-col gap-3">
                    <label className="relative group cursor-pointer">
                        <input type="radio" name="experience" className="peer sr-only" defaultChecked />
                        <div className="flex items-center justify-between p-4 rounded-xl border-2 border-primary bg-primary/10 transition-all duration-200">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/20 p-2 rounded-lg text-primary">
                                    <span className="material-symbols-outlined">flight_takeoff</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold">New Student</span>
                                    <span className="text-text-secondary text-sm">0 Hours logged</span>
                                </div>
                            </div>
                            <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                                <span className="material-symbols-outlined text-white text-sm font-bold">check</span>
                            </div>
                        </div>
                    </label>
                    <label className="relative group cursor-pointer">
                        <input type="radio" name="experience" className="peer sr-only" />
                        <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-surface hover:border-primary/30 transition-all duration-200 peer-checked:border-primary peer-checked:bg-primary/10">
                            <div className="flex items-center gap-3">
                                <div className="bg-surface-highlight p-2 rounded-lg text-text-secondary">
                                    <span className="material-symbols-outlined">timelapse</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold">Pre-Solo</span>
                                    <span className="text-text-secondary text-sm">1-15 Hours logged</span>
                                </div>
                            </div>
                            <div className="h-6 w-6 rounded-full border-2 border-slate-300 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-sm opacity-0 peer-checked:opacity-100">check</span>
                            </div>
                        </div>
                    </label>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">psychology</span>
                    Learning Style
                </h3>
                <div className="grid grid-cols-3 gap-3">
                    {['Visual', 'Hands-on', 'Reading'].map((style, i) => (
                        <label key={style} className="cursor-pointer group">
                            <input type="radio" name="learning_style" className="peer sr-only" defaultChecked={i === 0} />
                            <div className="flex flex-col items-center p-3 rounded-xl border border-slate-200 bg-surface peer-checked:border-primary peer-checked:bg-primary/10 transition-all h-full">
                                <span className="material-symbols-outlined text-3xl mb-2 text-text-secondary peer-checked:text-primary">
                                    {i === 0 ? 'play_circle' : i === 1 ? 'quiz' : 'menu_book'}
                                </span>
                                <span className="text-xs font-semibold text-center text-slate-700 peer-checked:text-primary">{style}</span>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <h3 className="text-sm font-bold mb-2 uppercase tracking-wide opacity-80">Home Airport</h3>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
                        <span className="material-symbols-outlined">flight</span>
                    </div>
                    <input type="text" className="bg-surface border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-primary/30 focus:border-primary block w-full pl-10 p-3 placeholder:text-text-secondary" placeholder="e.g. KJFK (Optional)" />
                </div>
            </div>
        </div>

        <div className="fixed bottom-0 w-full max-w-md bg-background border-t border-slate-200 p-4 pb-8 z-20">
            <div className="flex flex-col gap-3">
                <button 
                    onClick={() => onNavigate(Screen.RegionSelect)}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                    Generate My Plan
                    <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                </button>
                <button 
                    onClick={() => onNavigate(Screen.RegionSelect)}
                    className="w-full text-text-secondary hover:text-slate-900 text-sm font-medium py-2 transition-colors"
                >
                    Skip for now
                </button>
            </div>
        </div>
    </div>
  );
};