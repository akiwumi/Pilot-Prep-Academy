import React from 'react';
import { Screen } from '../App';
import { IMAGES } from '../constants';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export const Quiz: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background text-white font-display">
        <header className="flex items-center justify-between px-4 py-3 shrink-0 border-b border-gray-800">
            <button 
                onClick={() => onNavigate(Screen.CourseOverview)}
                className="flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-surface transition-colors text-gray-400"
            >
                <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <h1 className="text-base font-bold tracking-tight text-center flex-1">Meteorology</h1>
            <div className="flex items-center gap-1 text-primary font-medium text-sm w-12 justify-end">
                <span className="material-symbols-outlined text-lg">timer</span>
                <span>14:20</span>
            </div>
        </header>

        <main className="flex-1 overflow-y-auto p-5 pb-32">
            <div className="max-w-md mx-auto flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-end">
                        <span className="text-sm font-medium text-gray-400">Question 3 of 10</span>
                        <span className="text-xs font-bold text-primary">30%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-surface overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '30%' }}></div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="relative w-full h-48 rounded-xl overflow-hidden bg-surface border border-gray-700">
                        <img src={IMAGES.thumbnails.quiz_fig} alt="Sky view" className="w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-medium">Figure 3.1</div>
                    </div>
                    <div className="py-2">
                        <h2 className="text-xl font-medium leading-relaxed">
                            What is the minimum visibility required for VFR flight in Class G airspace below 10,000ft MSL?
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <label className="group relative flex cursor-pointer items-center gap-4 rounded-xl border-2 border-primary bg-primary/10 p-4 transition-all hover:bg-primary/20">
                        <div className="flex items-center justify-center">
                            <input type="radio" name="question3" className="peer h-5 w-5 border-2 border-primary bg-transparent text-primary focus:ring-primary focus:ring-offset-0 dark:focus:ring-offset-background" defaultChecked />
                        </div>
                        <div className="flex grow flex-col">
                            <span className="text-sm font-bold text-primary mb-0.5">Option A</span>
                            <span className="text-base font-medium text-white">5 km</span>
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary opacity-100">
                            <span className="material-symbols-outlined">check_circle</span>
                        </div>
                    </label>

                    {['Option B: 8 km', 'Option C: 1.5 km', 'Option D: 3 km'].map((opt, i) => {
                        const [label, val] = opt.split(': ');
                        return (
                            <label key={i} className="group relative flex cursor-pointer items-center gap-4 rounded-xl border border-gray-700 bg-surface p-4 transition-all hover:border-primary/50 hover:bg-[#232d3f]">
                                <div className="flex items-center justify-center">
                                    <input type="radio" name="question3" className="peer h-5 w-5 border-2 border-gray-500 bg-transparent text-primary focus:ring-primary focus:ring-offset-0 dark:focus:ring-offset-background" />
                                </div>
                                <div className="flex grow flex-col">
                                    <span className="text-sm font-bold text-gray-400 mb-0.5">{label}</span>
                                    <span className="text-base font-medium text-white">{val}</span>
                                </div>
                            </label>
                        );
                    })}
                </div>
            </div>
        </main>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t border-gray-800 backdrop-blur-xl bg-opacity-90">
            <div className="max-w-md mx-auto flex gap-4">
                <button className="flex-1 h-12 flex items-center justify-center gap-2 rounded-xl border border-gray-600 bg-transparent text-white text-base font-bold hover:bg-surface transition-colors active:scale-[0.98]">
                    <span className="material-symbols-outlined text-xl">arrow_back</span>
                    <span>Previous</span>
                </button>
                <button 
                    onClick={() => onNavigate(Screen.QuizResult)}
                    className="flex-1 h-12 flex items-center justify-center gap-2 rounded-xl bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all active:scale-[0.98]"
                >
                    <span>Next</span>
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </button>
            </div>
            <div className="h-4"></div>
        </div>
    </div>
  );
};