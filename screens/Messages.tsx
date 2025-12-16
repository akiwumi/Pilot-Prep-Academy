import React from 'react';
import { Screen } from '../App';
import { IMAGES } from '../constants';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export const Messages: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-background overflow-hidden relative">
        {/* Mobile View: Show Master List only, Detail view overlays or navigates */}
        {/* For this demo, we'll implement a stacked approach or just one view for simplicity as requested by "screens that look like this" */}
        {/* We will split the view vertically to show both or just simulate the requested layout */}
        
        {/* Split View Container */}
        <div className="flex flex-col h-full">
            {/* Top Half: Inbox List (simulating scrollable area) */}
            <div className="flex-1 flex flex-col min-h-0 bg-background border-b border-slate-200">
                <div className="flex items-center bg-background p-4 pb-2 justify-between shrink-0 z-10">
                    <h2 className="text-slate-900 text-2xl font-bold leading-tight tracking-[-0.015em] flex-1">Messages</h2>
                    <div className="flex items-center justify-end">
                        <button className="flex items-center justify-center rounded-full h-10 w-10 bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>edit_square</span>
                        </button>
                    </div>
                </div>

                <div className="px-4 py-3 shrink-0">
                    <div className="flex w-full items-stretch rounded-xl h-12 bg-surface shadow-sm">
                        <div className="text-text-secondary flex items-center justify-center pl-4 pr-2">
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>search</span>
                        </div>
                        <input className="flex w-full flex-1 bg-transparent text-slate-900 focus:outline-none placeholder:text-text-secondary px-2 text-base font-normal" placeholder="Search schools..." />
                    </div>
                </div>

                <div className="px-4 pb-2 flex gap-3 overflow-x-auto no-scrollbar shrink-0">
                    <button className="px-4 py-1.5 rounded-full bg-primary text-white text-sm font-medium whitespace-nowrap">All</button>
                    <button className="px-4 py-1.5 rounded-full bg-surface text-text-secondary hover:text-slate-900 transition-colors text-sm font-medium whitespace-nowrap border border-slate-200">Unread</button>
                    <button className="px-4 py-1.5 rounded-full bg-surface text-text-secondary hover:text-slate-900 transition-colors text-sm font-medium whitespace-nowrap border border-slate-200">Archived</button>
                </div>

                <div className="flex-1 overflow-y-auto pb-4">
                    {[
                        { name: "SkyHigh Aviation", msg: "Yes, we have a slot open at 2 PM on Saturday.", time: "10:42 AM", img: IMAGES.logos.school1, unread: false, online: true },
                        { name: "Eagle Wings Academy", msg: "Your medical certificate is required for the solo flight next week.", time: "Yesterday", img: IMAGES.logos.school2, unread: true, online: false },
                        { name: "Horizon Flight Center", msg: "Great job on the cross-wind landing practice!", time: "Tue", img: IMAGES.logos.school3, unread: false, online: false },
                        { name: "AeroLearn Institute", msg: "The study materials for PPL Module 3 are now available.", time: "Oct 12", img: IMAGES.logos.school4, unread: false, online: false }
                    ].map((chat, i) => (
                        <div key={i} className={`group relative cursor-pointer hover:bg-surface/50 transition-colors ${chat.unread ? 'bg-primary/5' : ''}`}>
                            {chat.unread && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>}
                            <div className="flex items-center gap-4 px-4 py-4 justify-between border-b border-slate-200/70">
                                <div className="flex items-center gap-4 flex-1 min-w-0">
                                    <div className="relative shrink-0">
                                        <div className="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 border-2 border-slate-200" style={{ backgroundImage: `url("${chat.img}")` }}></div>
                                        {chat.online && <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-background"></div>}
                                    </div>
                                    <div className="flex flex-col justify-center flex-1 min-w-0">
                                        <div className="flex justify-between items-baseline mb-0.5">
                                            <p className={`text-slate-900 text-base truncate ${chat.unread ? 'font-bold' : 'font-semibold'}`}>{chat.name}</p>
                                            <p className={`text-xs whitespace-nowrap ml-2 ${chat.unread ? 'text-primary font-bold' : 'text-text-secondary'}`}>{chat.time}</p>
                                        </div>
                                        <p className={`text-sm line-clamp-1 ${chat.unread ? 'text-slate-900 font-medium' : 'text-text-secondary'}`}>{chat.msg}</p>
                                    </div>
                                </div>
                                {chat.unread && <div className="shrink-0 h-3 w-3 rounded-full bg-primary shadow-lg shadow-primary/50"></div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Half: Chat Detail (Usually separate screen, but stacking here to match "all in one" visual request) */}
            <div className="flex-1 flex flex-col min-h-0 bg-background relative border-t border-slate-200">
                <div className="flex items-center gap-3 bg-surface/95 backdrop-blur-md p-3 border-b border-slate-200 shrink-0 z-20">
                    <button className="text-text-secondary hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <div className="flex items-center gap-3 flex-1 overflow-hidden">
                        <div className="relative">
                            <div className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 border border-slate-200" style={{ backgroundImage: `url("${IMAGES.logos.school_small_1}")` }}></div>
                            <div className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full border-2 border-background"></div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-slate-900 text-base font-bold leading-none truncate">SkyHigh Aviation</h3>
                            <span className="text-primary text-xs font-medium leading-tight mt-1">Online</span>
                        </div>
                    </div>
                    <div className="flex gap-2 text-primary">
                        <button className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-surface-highlight transition-colors">
                            <span className="material-symbols-outlined">call</span>
                        </button>
                        <button className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-surface-highlight transition-colors">
                            <span className="material-symbols-outlined">info</span>
                        </button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-background scroll-smooth pb-20">
                    <div className="flex justify-center">
                        <span className="text-xs font-medium text-text-secondary bg-surface-highlight px-3 py-1 rounded-full border border-slate-200">Today, 10:23 AM</span>
                    </div>
                    
                    <div className="flex gap-3 max-w-[85%]">
                        <div className="shrink-0 self-end">
                            <div className="bg-center bg-no-repeat bg-cover rounded-full h-8 w-8" style={{ backgroundImage: `url("${IMAGES.logos.school_small_2}")` }}></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="bg-surface px-4 py-3 rounded-2xl rounded-bl-none">
                                <p className="text-slate-900 text-sm leading-relaxed">Hi Alex! Thanks for reaching out about the discovery flight.</p>
                            </div>
                            <span className="text-[10px] text-text-secondary ml-1">10:23 AM</span>
                        </div>
                    </div>

                    <div className="flex gap-3 max-w-[85%] ml-auto flex-row-reverse">
                        <div className="flex flex-col gap-1 items-end">
                            <div className="bg-primary px-4 py-3 rounded-2xl rounded-br-none shadow-md shadow-primary/20">
                                <p className="text-white text-sm leading-relaxed">Hey! Yes, I was wondering if you have availability for a C172 this weekend?</p>
                            </div>
                            <div className="flex items-center gap-1 mr-1">
                                <span className="text-[10px] text-text-secondary">10:25 AM</span>
                                <span className="material-symbols-outlined text-primary text-[12px]">done_all</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 max-w-[85%]">
                        <div className="shrink-0 self-end">
                            <div className="bg-center bg-no-repeat bg-cover rounded-full h-8 w-8" style={{ backgroundImage: `url("${IMAGES.logos.school_small_3}")` }}></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="bg-surface px-4 py-3 rounded-2xl rounded-bl-none">
                                <p className="text-slate-900 text-sm leading-relaxed">Yes, we have a slot open at 2 PM on Saturday. The weather looks clear for VFR flight.</p>
                            </div>
                            <span className="text-[10px] text-text-secondary ml-1">10:42 AM</span>
                        </div>
                    </div>
                    
                    <div className="flex gap-3 max-w-[85%]">
                        <div className="shrink-0 self-end">
                            <div className="bg-center bg-no-repeat bg-cover rounded-full h-8 w-8" style={{ backgroundImage: `url("${IMAGES.logos.school_small_3}")` }}></div>
                        </div>
                        <div className="bg-surface px-4 py-3 rounded-2xl rounded-bl-none shadow-sm w-16 flex items-center justify-center gap-1">
                            <div className="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce delay-100"></div>
                            <div className="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce delay-200"></div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 w-full p-3 bg-background border-t border-slate-200 z-30 pb-24">
                    <div className="flex items-end gap-2">
                        <button className="p-3 text-text-secondary hover:text-primary transition-colors rounded-full hover:bg-surface shrink-0">
                            <span className="material-symbols-outlined">add_circle</span>
                        </button>
                        <div className="flex-1 bg-surface rounded-2xl min-h-[48px] px-4 py-3 flex items-center">
                            <input className="w-full bg-transparent border-none focus:ring-0 p-0 text-slate-900 placeholder:text-text-secondary text-sm resize-none" placeholder="Type a message..." />
                            <button className="ml-2 text-text-secondary hover:text-primary transition-colors">
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>image</span>
                            </button>
                        </div>
                        <button className="p-3 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg shadow-primary/30 transition-all active:scale-95 shrink-0 flex items-center justify-center">
                            <span className="material-symbols-outlined -ml-0.5 mt-0.5" style={{ fontSize: '20px' }}>send</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};