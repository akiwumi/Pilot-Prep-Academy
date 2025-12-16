import React from 'react';
import { Screen } from '../App';
import { IMAGES } from '../constants';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export const VideoTutorials: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="bg-background text-white font-display overflow-x-hidden pb-24">
        <div className="flex items-center px-4 py-3 justify-between sticky top-0 z-50 bg-background/95 backdrop-blur-md">
            <button onClick={() => onNavigate(Screen.LearningLibrary)} className="text-white flex size-12 shrink-0 items-center justify-start cursor-pointer">
                <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Video Tutorials</h2>
            <div className="flex w-12 items-center justify-end">
                <button className="flex size-12 cursor-pointer items-center justify-end overflow-hidden rounded-lg bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
                    <span className="material-symbols-outlined text-[24px]">notifications</span>
                </button>
            </div>
        </div>

        <div className="px-4 py-2">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-12 bg-surface shadow-sm">
                <div className="text-[#93a2b7] flex items-center justify-center pl-4 pr-2">
                    <span className="material-symbols-outlined text-[20px]">search</span>
                </div>
                <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-transparent focus:border-none h-full placeholder:text-[#93a2b7] px-2 text-base font-normal leading-normal" placeholder="Search maneuvers, theory..." />
            </div>
        </div>

        <div className="flex w-full overflow-x-auto no-scrollbar px-4 py-3 gap-2">
            <button className="flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-white shadow-sm shrink-0">
                All Topics
            </button>
            {['Pre-flight', 'Maneuvers', 'Meteorology', 'Comms'].map((topic) => (
                <button key={topic} className="flex h-9 items-center justify-center rounded-full bg-surface border border-[#2a3441] px-4 text-sm font-medium text-white shadow-sm shrink-0 whitespace-nowrap">
                    {topic}
                </button>
            ))}
        </div>

        <div className="flex flex-col pb-2">
            <h2 className="text-white tracking-tight text-[22px] font-bold leading-tight px-4 pb-3 pt-4">Continue Learning</h2>
            <div className="flex w-full overflow-x-auto no-scrollbar px-4 pb-4 gap-4">
                {[
                    { title: "Crosswind Landing", sub: "Module 3 • 8m left", time: "12:30", img: IMAGES.thumbnails.video_2, progress: 70 },
                    { title: "Pre-flight Checklist", sub: "Module 1 • 6m left", time: "08:45", img: IMAGES.thumbnails.video_3, progress: 30 },
                    { title: "Weather Theory", sub: "Module 4 • 2m left", time: "15:20", img: IMAGES.thumbnails.video_4, progress: 90 }
                ].map((card, i) => (
                    <div key={i} className="flex flex-col gap-2 w-60 shrink-0 cursor-pointer group">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-surface">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url("${card.img}")` }}></div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
                                <div className="h-full bg-primary" style={{ width: `${card.progress}%` }}></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-white text-[48px] drop-shadow-lg">play_circle</span>
                            </div>
                            <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/60 text-white text-[10px] font-bold">{card.time}</div>
                        </div>
                        <div>
                            <h3 className="text-white text-base font-semibold leading-tight truncate">{card.title}</h3>
                            <p className="text-[#93a2b7] text-xs font-normal mt-1">{card.sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="flex flex-col">
            <div className="flex items-center justify-between px-4 pb-3 pt-2">
                <h2 className="text-white tracking-tight text-[22px] font-bold leading-tight">Recommended for You</h2>
                <button className="text-primary text-sm font-semibold">View All</button>
            </div>
            <div className="flex flex-col px-4 gap-4">
                {[
                    { title: "Mastering the Traffic Pattern Entry", sub: "Maneuvers • Phase 2", time: "14:15", img: IMAGES.thumbnails.vid_rec_1, downloaded: false },
                    { title: "Understanding VFR Minimums", sub: "Regulations • Phase 1", time: "18:40", img: IMAGES.thumbnails.vid_rec_2, downloaded: false },
                    { title: "Radio Comms: Class D Airspace", sub: "Communications • Phase 2", time: "10:05", img: IMAGES.thumbnails.vid_rec_3, downloaded: true },
                    { title: "Stall Recovery Techniques", sub: "Safety • Phase 1", time: "06:20", img: IMAGES.thumbnails.vid_rec_4, downloaded: false }
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start bg-surface p-3 rounded-xl shadow-sm hover:bg-[#252e3e] transition-colors cursor-pointer">
                        <div className="relative w-32 shrink-0 aspect-video rounded-lg overflow-hidden bg-gray-700">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${item.img}")` }}></div>
                            <div className="absolute bottom-1 right-1 px-1 py-0.5 rounded bg-black/70 text-white text-[9px] font-bold">{item.time}</div>
                        </div>
                        <div className="flex flex-col flex-1 min-w-0 gap-1">
                            <div className="flex justify-between items-start">
                                <h3 className="text-white text-sm font-bold leading-tight line-clamp-2">{item.title}</h3>
                                <button className="text-[#93a2b7] hover:text-primary">
                                    <span className="material-symbols-outlined text-[20px]">bookmark</span>
                                </button>
                            </div>
                            <p className="text-[#93a2b7] text-xs mt-0.5">{item.sub}</p>
                            <div className="flex items-center gap-3 mt-auto pt-2">
                                <div className={`flex items-center gap-1 ${item.downloaded ? 'text-primary' : 'text-[#93a2b7]'}`}>
                                    <span className={`material-symbols-outlined text-[16px] ${item.downloaded ? 'fill-current' : ''}`}>
                                        {item.downloaded ? 'offline_pin' : 'download'}
                                    </span>
                                    <span className="text-[10px] font-medium">{item.downloaded ? 'Downloaded' : 'Download'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};