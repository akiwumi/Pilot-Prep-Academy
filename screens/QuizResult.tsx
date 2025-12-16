import React from 'react';
import { Screen } from '../App';
import { IMAGES } from '../constants';
import type { QuizResultData } from '../data';

interface Props {
  onNavigate: (screen: Screen) => void;
  result: QuizResultData | null;
  onRetake: () => void;
}

export const QuizResult: React.FC<Props> = ({ onNavigate, result, onRetake }) => {
  const total = result?.total ?? 10;
  const correct = result?.correct ?? 0;
  const incorrect = result?.incorrect ?? total - correct;
  const percentage = result?.percentage ?? 0;

  const radius = 110;
  const circumference = Math.round(2 * Math.PI * radius);
  const dashOffset = Math.round(circumference * (1 - percentage / 100));

  return (
    <div className="bg-background font-display text-slate-900 min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white">
        <div className="absolute top-0 left-0 w-full h-64 overflow-hidden pointer-events-none z-0 opacity-10">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url("${IMAGES.confetti}")` }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
        </div>

        <div className="sticky top-0 z-50 flex items-center bg-background p-4 pb-2 justify-between border-b border-slate-200/70">
            <div onClick={() => onNavigate(Screen.CourseOverview)} className="flex size-12 shrink-0 items-center justify-start text-slate-700 cursor-pointer hover:opacity-70 transition-opacity">
                <span className="material-symbols-outlined text-2xl">arrow_back</span>
            </div>
            <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">
                Demo Quiz Results
            </h2>
        </div>

        <main className="flex-1 flex flex-col items-center w-full px-4 pb-32 z-10">
            <div className="w-full flex flex-col items-center pt-8 pb-6">
                <h2 className="text-text-secondary tracking-wide text-sm font-medium uppercase mb-6">Quiz Complete</h2>
                <div className="relative flex items-center justify-center size-64">
                    <svg className="size-full transform -rotate-90">
                        <circle className="text-slate-200" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeWidth="16"></circle>
                        <circle
                            className="text-primary drop-shadow-[0_0_10px_rgba(225,29,72,0.25)]"
                            cx="128"
                            cy="128"
                            fill="transparent"
                            r={radius}
                            stroke="currentColor"
                            strokeDasharray={circumference}
                            strokeDashoffset={dashOffset}
                            strokeLinecap="round"
                            strokeWidth="16"
                        ></circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h1 className="text-6xl font-bold tracking-tighter text-slate-900">{percentage}%</h1>
                        <p className="text-sm font-medium text-text-secondary mt-1">Score</p>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-green-500/10 border border-green-500/20 px-6">
                        <span className="material-symbols-outlined text-green-400 text-lg fill-1">check_circle</span>
                        <p className="text-green-400 text-sm font-semibold leading-normal">
                            {percentage >= 80 ? 'Ready for Checkride' : percentage >= 70 ? 'Solid Progress' : 'Keep Training'}
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-md grid grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col gap-3 rounded-2xl p-5 bg-surface border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-blue-900/20 text-blue-400">
                            <span className="material-symbols-outlined text-xl">quiz</span>
                        </div>
                        <p className="text-text-secondary text-xs font-medium uppercase tracking-wide">Total Qs</p>
                    </div>
                    <p className="text-slate-900 text-3xl font-bold leading-none">{total}</p>
                </div>
                <div className="flex flex-col gap-3 rounded-2xl p-5 bg-surface border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-purple-900/20 text-purple-400">
                            <span className="material-symbols-outlined text-xl">timer</span>
                        </div>
                        <p className="text-text-secondary text-xs font-medium uppercase tracking-wide">Time</p>
                    </div>
                    <p className="text-slate-900 text-3xl font-bold leading-none">—</p>
                </div>
                <div className="flex flex-col gap-3 rounded-2xl p-5 bg-surface border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-green-900/20 text-green-400">
                            <span className="material-symbols-outlined text-xl">check</span>
                        </div>
                        <p className="text-text-secondary text-xs font-medium uppercase tracking-wide">Correct</p>
                    </div>
                    <p className="text-slate-900 text-3xl font-bold leading-none">{correct}</p>
                </div>
                <div className="flex flex-col gap-3 rounded-2xl p-5 bg-surface border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-red-900/20 text-red-400">
                            <span className="material-symbols-outlined text-xl">close</span>
                        </div>
                        <p className="text-text-secondary text-xs font-medium uppercase tracking-wide">Incorrect</p>
                    </div>
                    <p className="text-slate-900 text-3xl font-bold leading-none">{incorrect}</p>
                </div>
            </div>

            <button className="w-full max-w-md flex items-center justify-between p-4 rounded-2xl bg-surface border border-slate-200 hover:bg-surface-highlight transition-colors group shadow-sm mb-4">
                <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400">
                        <span className="material-symbols-outlined">visibility</span>
                    </div>
                    <div className="text-left">
                        <p className="text-slate-900 font-semibold">Review Incorrect Answers</p>
                        <p className="text-text-secondary text-xs">
                            {result ? `Analyze your ${incorrect} mistake${incorrect === 1 ? '' : 's'}` : 'Take the quiz to see results'}
                        </p>
                    </div>
                </div>
                <span className="material-symbols-outlined text-text-secondary group-hover:text-primary transition-colors">chevron_right</span>
            </button>
        </main>

        <div className="fixed bottom-0 left-0 w-full bg-background border-t border-slate-200 p-4 pb-8 backdrop-blur-lg bg-opacity-90">
            <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
                <button 
                    onClick={onRetake}
                    className="flex items-center justify-center gap-2 h-14 rounded-xl border border-slate-300 text-slate-900 font-semibold hover:bg-surface-highlight transition-colors"
                >
                    <span className="material-symbols-outlined text-xl">refresh</span>
                    Retake
                </button>
                <button 
                    onClick={() => onNavigate(Screen.CourseOverview)}
                    className="flex items-center justify-center gap-2 h-14 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
                >
                    Back to Course
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </button>
            </div>
        </div>
    </div>
  );
};