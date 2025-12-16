import React from 'react';
import { Screen } from '../App';
import { IMAGES } from '../constants';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export const CourseOverview: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col pb-24 bg-background">
        <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-gray-800/50">
            <div className="flex items-center p-4 justify-between">
                <button className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-800 transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div className="flex flex-col items-center">
                    <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">PPL Course</h2>
                    <span className="text-slate-400 text-xs font-medium">Pilot in Command: Alex D.</span>
                </div>
                <button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-800 transition-colors text-white">
                    <span className="material-symbols-outlined">settings</span>
                </button>
            </div>
        </div>

        <div className="flex-1 overflow-y-auto">
            <div className="px-4 py-6">
                <div className="flex gap-4">
                    <div className="flex flex-1 flex-col gap-2 rounded-2xl border border-gray-800 bg-surface p-4 items-center text-center shadow-sm">
                        <div className="relative size-20">
                            <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                <path className="text-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                                <path className="text-primary drop-shadow-[0_0_4px_rgba(19,91,236,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="35, 100" strokeLinecap="round" strokeWidth="3"></path>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                                <span className="text-xl font-bold text-white">35%</span>
                            </div>
                        </div>
                        <div className="mt-1">
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Progress</p>
                            <p className="text-slate-500 text-[10px] mt-0.5 font-medium">14 of 40 Modules</p>
                        </div>
                    </div>
                    <div
                        onClick={() => onNavigate(Screen.Logbook)}
                        className="flex flex-1 flex-col justify-between rounded-2xl border border-gray-800 bg-surface p-4 shadow-sm relative overflow-hidden cursor-pointer hover:border-gray-700 transition-colors"
                    >
                        <div className="flex items-center justify-between w-full mb-2">
                            <div className="flex items-center justify-center size-10 rounded-full bg-blue-500/10 text-blue-500">
                                <span className="material-symbols-outlined text-xl">flight_takeoff</span>
                            </div>
                            <span className="text-[10px] font-bold text-slate-500 bg-gray-800 px-2 py-1 rounded-full">Logbook</span>
                        </div>
                        <div>
                            <div className="flex items-end gap-1 mb-1">
                                <p className="text-white text-2xl font-bold leading-none">12.5</p>
                                <p className="text-slate-500 text-xs font-medium mb-0.5">/ 40 hrs</p>
                            </div>
                            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Flight Time</p>
                            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-[31%] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-6 pb-2 pt-2 flex items-center justify-between">
                <h3 className="text-white text-lg font-bold leading-tight tracking-tight">Your Flight Path</h3>
                <span className="text-primary text-sm font-medium cursor-pointer">View Map</span>
            </div>

            <div className="relative px-4 pb-24">
                <div className="absolute left-9 top-6 bottom-6 w-0.5 bg-gray-800 rounded-full"></div>
                <div className="flex flex-col gap-5">
                    {/* Completed */}
                    <div className="relative pl-14 group">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 size-10 rounded-full bg-green-500 text-white flex items-center justify-center z-10 shadow-lg border-4 border-background">
                            <span className="material-symbols-outlined text-[20px]">check</span>
                        </div>
                        <div onClick={() => onNavigate(Screen.QuizResult)} className="w-full rounded-2xl bg-surface border border-gray-800 p-4 shadow-sm hover:border-green-500/50 transition-colors cursor-pointer">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="text-green-400 text-xs font-bold uppercase tracking-wide">Completed</p>
                                        <span className="text-[10px] text-slate-400 font-medium">• 5/5 Sections</span>
                                    </div>
                                    <h4 className="text-white text-base font-bold">Ground School Basics</h4>
                                </div>
                                <div className="size-6 rounded-full bg-green-500/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-green-500 text-sm">school</span>
                                </div>
                            </div>
                            <p className="text-slate-400 text-sm mb-3">Meteorology, Air Law, Navigation basics covered.</p>
                            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-full rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* In Progress */}
                    <div className="relative pl-14 group">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 size-10 rounded-full bg-primary text-white flex items-center justify-center z-10 shadow-[0_0_15px_rgba(19,91,236,0.4)] border-4 border-background">
                            <span className="material-symbols-outlined text-[20px] fill-current">play_arrow</span>
                        </div>
                        <div onClick={() => onNavigate(Screen.Quiz)} className="w-full rounded-2xl bg-surface border-2 border-primary shadow-[0_4px_20px_-12px_rgba(19,91,236,0.5)] p-4 cursor-pointer relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                            <div className="flex justify-between items-start mb-2 relative z-10">
                                <div>
                                    <p className="text-primary text-xs font-bold uppercase tracking-wide mb-1 flex items-center gap-1">
                                        <span className="animate-pulse size-1.5 rounded-full bg-primary block"></span>
                                        In Progress
                                    </p>
                                    <h4 className="text-white text-base font-bold">Pre-Solo Maneuvers</h4>
                                </div>
                                <span className="text-primary font-bold text-sm bg-primary/10 px-2 py-0.5 rounded-md">80%</span>
                            </div>
                            <p className="text-slate-400 text-sm mb-4 relative z-10">Stalls, steep turns, and landing practice.</p>
                            <div className="relative z-10">
                                <div className="flex justify-between text-[10px] font-medium text-slate-400 mb-1.5 uppercase tracking-wide">
                                    <span>Section 4 of 5</span>
                                    <span className="text-white">Next: Stall Recovery</span>
                                </div>
                                <div className="flex gap-1.5 h-2 w-full">
                                    <div className="h-full flex-1 bg-primary rounded-full"></div>
                                    <div className="h-full flex-1 bg-primary rounded-full"></div>
                                    <div className="h-full flex-1 bg-primary rounded-full"></div>
                                    <div className="h-full flex-1 bg-primary rounded-full"></div>
                                    <div className="h-full flex-1 bg-gray-700 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Locked 1 */}
                    <div className="relative pl-14 opacity-70">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 size-10 rounded-full bg-gray-800 text-slate-500 flex items-center justify-center z-10 border-4 border-background">
                            <span className="material-symbols-outlined text-[20px]">lock</span>
                        </div>
                        <div className="w-full rounded-2xl bg-[#131b2b] border border-gray-800 p-4">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wide">Locked</p>
                                        <span className="text-[10px] text-slate-400 font-medium">• 0/6 Sections</span>
                                    </div>
                                    <h4 className="text-slate-300 text-base font-bold">First Solo Flight</h4>
                                </div>
                            </div>
                            <p className="text-slate-500 text-sm mb-3">Complete previous modules to unlock.</p>
                            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-transparent w-0"></div>
                            </div>
                        </div>
                    </div>

                    {/* Locked 2 */}
                    <div className="relative pl-14 opacity-70">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 size-10 rounded-full bg-gray-800 text-slate-500 flex items-center justify-center z-10 border-4 border-background">
                            <span className="material-symbols-outlined text-[20px]">lock</span>
                        </div>
                        <div className="w-full rounded-2xl bg-[#131b2b] border border-gray-800 p-4">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wide">Locked</p>
                                        <span className="text-[10px] text-slate-400 font-medium">• 0/8 Sections</span>
                                    </div>
                                    <h4 className="text-slate-300 text-base font-bold">Cross Country Nav</h4>
                                </div>
                            </div>
                            <p className="text-slate-500 text-sm mb-3">Long distance flight planning.</p>
                            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-transparent w-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-24 right-4 z-50">
            <button 
                onClick={() => onNavigate(Screen.Quiz)}
                className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-full shadow-lg shadow-blue-600/30 transition-all active:scale-95 group"
            >
                <span className="material-symbols-outlined group-hover:animate-pulse">play_arrow</span>
                <span className="font-bold text-sm tracking-wide">Resume Lesson</span>
            </button>
        </div>
    </div>
  );
};