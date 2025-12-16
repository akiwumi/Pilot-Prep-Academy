import React from 'react';
import { Screen } from '../App';
import { IMAGES } from '../constants';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export const LearningLibrary: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="bg-background text-white font-display overflow-x-hidden pb-24">
        <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-gray-800 transition-colors">
            <div className="flex items-center p-4 justify-between">
                <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] flex-1">Learning Library</h2>
                <div className="flex items-center gap-2 cursor-pointer text-[#92a4c9] hover:text-primary transition-colors">
                    <span className="text-sm font-bold leading-normal tracking-[0.015em]">My Downloads</span>
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>download_done</span>
                </div>
            </div>
        </div>

        <div className="px-4 py-3">
            <div className="relative group">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <span className="material-symbols-outlined text-[#92a4c9]">search</span>
                </div>
                <input type="search" className="block w-full rounded-xl border-none bg-surface py-3.5 pl-12 pr-4 text-white shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-[#92a4c9] focus:ring-2 focus:ring-inset focus:ring-primary sm:text-base sm:leading-6 transition-shadow" placeholder="Search articles, documents, videos..." />
            </div>
        </div>

        <div className="flex gap-3 px-4 py-1 overflow-x-auto no-scrollbar">
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-5 shadow-lg shadow-primary/20">
                <p className="text-white text-sm font-medium leading-normal">All</p>
            </button>
            <button 
                onClick={() => onNavigate(Screen.VideoTutorials)}
                className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface border border-transparent px-5 hover:border-gray-600 transition-colors"
            >
                <p className="text-white text-sm font-medium leading-normal">Videos</p>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface border border-transparent px-5 hover:border-gray-600 transition-colors">
                <p className="text-white text-sm font-medium leading-normal">Documents</p>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface border border-transparent px-5 hover:border-gray-600 transition-colors">
                <p className="text-white text-sm font-medium leading-normal">Articles</p>
            </button>
        </div>

        <div className="pt-6">
            <div className="flex items-center justify-between px-4 pb-3">
                <h2 className="text-[20px] font-bold leading-tight tracking-[-0.015em]">Continue Learning</h2>
                <button className="text-primary text-sm font-medium">View All</button>
            </div>
            <div className="px-4">
                <div onClick={() => onNavigate(Screen.VideoTutorials)} className="flex flex-col items-stretch justify-start rounded-xl shadow-sm bg-surface overflow-hidden group cursor-pointer border border-gray-800 hover:border-gray-700 transition-colors">
                    <div className="w-full relative bg-center bg-no-repeat aspect-video bg-cover" style={{ backgroundImage: `url("${IMAGES.thumbnails.video_1}")` }}>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                                <span className="material-symbols-outlined" style={{ fontSize: '32px', fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700">
                            <div className="h-full bg-primary w-[65%]"></div>
                        </div>
                    </div>
                    <div className="flex w-full grow flex-col items-stretch justify-center gap-1 py-4 px-4">
                        <div className="flex justify-between items-start">
                            <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-1">Aerodynamics 101: Lift & Drag</p>
                        </div>
                        <div className="flex items-end gap-3 justify-between mt-2">
                            <div className="flex flex-col">
                                <p className="text-[#92a4c9] text-sm font-normal leading-normal flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">videocam</span> Video
                                </p>
                                <p className="text-primary text-xs font-bold mt-1">12:04 remaining</p>
                            </div>
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary hover:bg-primary-dark text-white text-sm font-medium leading-normal transition-colors shadow-lg shadow-blue-900/20">
                                <span className="truncate">Resume</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="pt-8">
            <h2 className="text-[20px] font-bold leading-tight tracking-[-0.015em] px-4 pb-4">Browse Categories</h2>
            <div className="grid grid-cols-2 gap-4 px-4">
                {[
                    { icon: 'cloud', title: 'Weather', count: 12, color: 'blue' },
                    { icon: 'air', title: 'Aerodynamics', count: 8, color: 'orange' },
                    { icon: 'map', title: 'Navigation', count: 15, color: 'emerald' },
                    { icon: 'gavel', title: 'Regulations', count: 20, color: 'purple' }
                ].map((cat) => (
                    <div key={cat.title} className="bg-surface p-4 rounded-xl shadow-sm flex flex-col gap-3 active:scale-95 transition-transform cursor-pointer border border-gray-800 hover:border-gray-700">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-${cat.color}-400 bg-${cat.color}-500/10`}>
                            <span className="material-symbols-outlined">{cat.icon}</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-base text-white">{cat.title}</h3>
                            <p className="text-xs text-[#92a4c9] font-medium mt-1">{cat.count} Resources</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="pt-8">
            <h2 className="text-[20px] font-bold leading-tight tracking-[-0.015em] px-4 pb-2">New Arrivals</h2>
            <div className="flex flex-col">
                <div className="flex items-center gap-4 p-4 border-b border-gray-800 active:bg-white/5 cursor-pointer">
                    <div className="w-12 h-12 shrink-0 rounded-lg bg-gray-800 flex items-center justify-center text-red-500">
                        <span className="material-symbols-outlined">picture_as_pdf</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="text-base font-bold text-white truncate">Updated Sectional Charts Guide</h4>
                        <p className="text-sm text-[#92a4c9] flex items-center gap-1 mt-0.5">
                            <span>PDF</span> • <span>2.4 MB</span> • <span>Yesterday</span>
                        </p>
                    </div>
                    <div className="shrink-0 text-gray-600">
                        <span className="material-symbols-outlined">download</span>
                    </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 border-b border-gray-800 active:bg-white/5 cursor-pointer">
                    <div className="w-12 h-12 shrink-0 rounded-lg bg-gray-800 flex items-center justify-center text-blue-500">
                        <span className="material-symbols-outlined">play_circle</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="text-base font-bold text-white truncate">Crosswind Landings: Advanced</h4>
                        <p className="text-sm text-[#92a4c9] flex items-center gap-1 mt-0.5">
                            <span>Video</span> • <span>15 mins</span> • <span>3 days ago</span>
                        </p>
                    </div>
                    <div className="shrink-0 text-gray-600">
                        <span className="material-symbols-outlined">chevron_right</span>
                    </div>
                </div>

                <div className="flex items-center gap-4 p-4 border-b border-gray-800 active:bg-white/5 cursor-pointer">
                    <div className="w-12 h-12 shrink-0 rounded-lg bg-gray-800 flex items-center justify-center text-slate-400">
                        <span className="material-symbols-outlined">article</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="text-base font-bold text-white truncate">Human Factors in Night Flying</h4>
                        <p className="text-sm text-[#92a4c9] flex items-center gap-1 mt-0.5">
                            <span>Article</span> • <span>5 min read</span> • <span>Last week</span>
                        </p>
                    </div>
                    <div className="shrink-0 text-green-500">
                        <span className="material-symbols-outlined">check_circle</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};