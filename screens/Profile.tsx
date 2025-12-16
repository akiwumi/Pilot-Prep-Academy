import React from 'react';
import { Screen } from '../App';
import { IMAGES } from '../constants';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export const Profile: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="bg-background font-display text-white min-h-screen flex flex-col pb-24 overflow-x-hidden transition-colors duration-200">
        <div className="flex items-center px-4 py-4 pt-12 lg:pt-6 sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-transparent">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full active:bg-white/10 cursor-pointer transition-colors" onClick={() => onNavigate(Screen.CourseOverview)}>
                <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>arrow_back</span>
            </div>
            <h2 className="text-lg font-bold leading-tight flex-1 text-center">Pilot Profile</h2>
            <div className="flex w-10 items-center justify-center">
                <button className="text-primary font-bold text-sm hover:text-blue-400 transition-colors">Edit</button>
            </div>
        </div>

        <div className="flex flex-col items-center pt-2 pb-6 px-4">
            <div className="relative group cursor-pointer">
                <div className="bg-center bg-no-repeat bg-cover rounded-full h-28 w-28 border-4 border-surface shadow-xl" style={{ backgroundImage: `url("${IMAGES.avatar_pilot}")` }}></div>
                <div className="absolute bottom-0 right-0 bg-primary rounded-full p-1.5 border-2 border-background shadow-sm">
                    <span className="material-symbols-outlined text-white block" style={{ fontSize: '16px' }}>photo_camera</span>
                </div>
            </div>
            <div className="mt-4 flex flex-col items-center text-center gap-1">
                <h1 className="text-2xl font-bold tracking-tight">Captain Maverick</h1>
                <div className="flex items-center gap-2">
                    <span className="bg-primary/20 text-primary text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">Student Pilot</span>
                    <span className="text-text-secondary text-sm">C172 Skyhawk</span>
                </div>
                <p className="text-text-secondary text-xs font-medium mt-1">License #8829103</p>
            </div>
        </div>

        <div className="px-4 flex flex-col gap-6 w-full max-w-lg mx-auto">
            <div className="bg-surface rounded-2xl p-5 shadow-sm border border-white/5">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg">Flight Hours</h3>
                    <span className="text-xs font-medium text-text-secondary">15 / 40 Req.</span>
                </div>
                <div className="flex flex-row items-center gap-6">
                    <div className="relative size-32 shrink-0 flex items-center justify-center">
                        <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                            <path className="text-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                            <path className="text-primary drop-shadow-[0_0_4px_rgba(19,91,236,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="38, 100" strokeLinecap="round" strokeWidth="3"></path>
                        </svg>
                        <div className="absolute flex flex-col items-center">
                            <span className="text-2xl font-bold">38%</span>
                            <span className="text-[10px] uppercase font-bold text-text-secondary">Complete</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 flex-1">
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between text-sm">
                                <span className="text-text-secondary">Dual</span>
                                <span className="font-bold">10.0 hrs</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-400 w-[25%]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between text-sm">
                                <span className="text-text-secondary">Solo</span>
                                <span className="font-bold">5.0 hrs</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-green-400 w-[12%]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between text-sm">
                                <span className="text-text-secondary">Ground</span>
                                <span className="font-bold">22 hrs</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-400 w-[55%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <div className="bg-surface p-4 rounded-xl flex flex-col items-center justify-center gap-1 shadow-sm border border-white/5">
                    <span className="material-symbols-outlined text-primary mb-1" style={{ fontSize: '24px' }}>person</span>
                    <span className="text-2xl font-bold leading-none">5.0</span>
                    <span className="text-[11px] font-medium text-text-secondary text-center">Solo Hours</span>
                </div>
                <div className="bg-surface p-4 rounded-xl flex flex-col items-center justify-center gap-1 shadow-sm border border-white/5">
                    <span className="material-symbols-outlined text-primary mb-1" style={{ fontSize: '24px' }}>flight_land</span>
                    <span className="text-2xl font-bold leading-none">42</span>
                    <span className="text-[11px] font-medium text-text-secondary text-center">Landings</span>
                </div>
                <div className="bg-surface p-4 rounded-xl flex flex-col items-center justify-center gap-1 shadow-sm border border-white/5">
                    <span className="material-symbols-outlined text-primary mb-1" style={{ fontSize: '24px' }}>assignment_turned_in</span>
                    <span className="text-2xl font-bold leading-none">2/3</span>
                    <span className="text-[11px] font-medium text-text-secondary text-center">Exams</span>
                </div>
            </div>

            <div className="bg-surface rounded-2xl p-5 shadow-sm border border-white/5">
                <div className="flex items-center gap-4 mb-5">
                    <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>verified_user</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-lg leading-tight">PPL Certificate</h3>
                        <p className="text-xs text-text-secondary mt-0.5">Ready for download</p>
                    </div>
                    <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">Earned</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl text-sm font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20">
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>visibility</span>
                        View
                    </button>
                    <div className="flex gap-3">
                        <button aria-label="Download Certificate" className="flex-1 flex items-center justify-center bg-gray-700 text-slate-200 rounded-xl hover:bg-gray-600 transition-colors">
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>download</span>
                        </button>
                        <button aria-label="Share Certificate" className="flex-1 flex items-center justify-center bg-gray-700 text-slate-200 rounded-xl hover:bg-gray-600 transition-colors">
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>share</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-surface rounded-2xl p-5 shadow-sm border border-white/5">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-base">Last 30 Days</h3>
                    <span className="text-sm font-medium text-green-500">+2.5 hrs</span>
                </div>
                <div className="h-24 w-full flex items-end gap-2">
                    <div className="w-full bg-primary/20 h-[30%] rounded-t-md hover:bg-primary/30 transition-all cursor-pointer relative group"></div>
                    <div className="w-full bg-primary/20 h-[60%] rounded-t-md hover:bg-primary/30 transition-all cursor-pointer relative group"></div>
                    <div className="w-full bg-primary/20 h-[20%] rounded-t-md hover:bg-primary/30 transition-all cursor-pointer relative group"></div>
                    <div className="w-full bg-primary h-[85%] rounded-t-md shadow-[0_0_10px_rgba(19,91,236,0.3)] relative group"></div>
                    <div className="w-full bg-primary/20 h-[45%] rounded-t-md hover:bg-primary/30 transition-all cursor-pointer relative group"></div>
                </div>
                <div className="flex justify-between text-xs text-text-secondary mt-2 px-1">
                    <span>W1</span>
                    <span>W2</span>
                    <span>W3</span>
                    <span className="font-bold text-primary">W4</span>
                    <span>W5</span>
                </div>
            </div>

            <div className="flex flex-col gap-2 mt-2">
                <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider px-2">Account</h3>
                <div className="bg-surface rounded-xl overflow-hidden shadow-sm border border-white/5 divide-y divide-white/5">
                    <button className="w-full flex items-center gap-4 p-4 hover:bg-white/5 transition-colors text-left">
                        <div className="size-8 rounded-full bg-gray-700 flex items-center justify-center text-slate-300">
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>badge</span>
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-sm">Personal Information</p>
                            <p className="text-xs text-text-secondary">Email, Phone, Medical Class</p>
                        </div>
                        <span className="material-symbols-outlined text-text-secondary" style={{ fontSize: '20px' }}>chevron_right</span>
                    </button>
                    <button className="w-full flex items-center gap-4 p-4 hover:bg-white/5 transition-colors text-left">
                        <div className="size-8 rounded-full bg-gray-700 flex items-center justify-center text-slate-300">
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>book</span>
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-sm">Logbook Sync</p>
                            <p className="text-xs text-text-secondary">Last synced: 2 hours ago</p>
                        </div>
                        <span className="material-symbols-outlined text-text-secondary" style={{ fontSize: '20px' }}>chevron_right</span>
                    </button>
                    <button className="w-full flex items-center gap-4 p-4 hover:bg-white/5 transition-colors text-left">
                        <div className="size-8 rounded-full bg-gray-700 flex items-center justify-center text-slate-300">
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>tune</span>
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-sm">App Preferences</p>
                            <p className="text-xs text-text-secondary">Theme, Units (Knots)</p>
                        </div>
                        <span className="material-symbols-outlined text-text-secondary" style={{ fontSize: '20px' }}>chevron_right</span>
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className="bg-surface rounded-xl overflow-hidden shadow-sm border border-white/5 divide-y divide-white/5">
                    <button className="w-full flex items-center gap-4 p-4 hover:bg-white/5 transition-colors text-left">
                        <div className="size-8 rounded-full bg-gray-700 flex items-center justify-center text-slate-300">
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>card_membership</span>
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-sm">Subscription</p>
                            <p className="text-xs text-green-500 font-bold">Pro Active</p>
                        </div>
                        <span className="material-symbols-outlined text-text-secondary" style={{ fontSize: '20px' }}>chevron_right</span>
                    </button>
                    <button className="w-full flex items-center gap-4 p-4 hover:bg-white/5 transition-colors text-left">
                        <div className="size-8 rounded-full bg-gray-700 flex items-center justify-center text-slate-300">
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>help</span>
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-sm">Help & Support</p>
                        </div>
                        <span className="material-symbols-outlined text-text-secondary" style={{ fontSize: '20px' }}>chevron_right</span>
                    </button>
                </div>
            </div>

            <button onClick={() => onNavigate(Screen.Login)} className="mt-4 mb-8 w-full p-4 rounded-xl text-red-500 font-bold text-sm bg-red-500/10 hover:bg-red-500/20 transition-colors">
                Log Out
            </button>
            <p className="text-center text-xs text-text-secondary opacity-50 mb-8">Version 1.0.2</p>
        </div>
    </div>
  );
};