import React from 'react';
import { Screen } from '../App';
import { IMAGES } from '../constants';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export const RegionSelect: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background text-white">
        <div className="sticky top-0 z-20 flex items-center bg-background/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-800">
            <button 
                onClick={() => onNavigate(Screen.Setup)}
                className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
                <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Select Region</h2>
        </div>

        <div className="flex-1 flex flex-col px-4 pb-32">
            <div className="pt-6 pb-2">
                <h2 className="tracking-tight text-[28px] font-bold leading-tight text-left">Where are you flying?</h2>
            </div>
            <div className="pb-6">
                <p className="text-gray-400 text-base font-normal leading-normal">
                    We’ll customize your regulations, schools, and study materials based on your location.
                </p>
            </div>

            <div className="pb-6">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-12 shadow-sm">
                    <div className="text-[#92a4c9] flex bg-surface items-center justify-center pl-4 rounded-l-xl border-none">
                        <span className="material-symbols-outlined text-[24px]">search</span>
                    </div>
                    <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl rounded-l-none text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 bg-surface placeholder:text-[#92a4c9] px-4 pl-2 text-base font-normal leading-normal h-full transition-all" placeholder="Search country or state..." />
                </div>
            </div>

            <div className="mb-8">
                <button className="group flex items-center gap-4 w-full bg-surface p-4 rounded-xl border border-transparent shadow-sm active:scale-[0.98] transition-all hover:bg-surface-highlight">
                    <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10 group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[24px]">my_location</span>
                    </div>
                    <div className="flex-1 text-left">
                        <p className="text-white text-base font-medium leading-normal truncate">Use Current Location</p>
                    </div>
                    <div className="shrink-0 text-gray-500">
                        <span className="material-symbols-outlined text-[24px]">chevron_right</span>
                    </div>
                </button>
            </div>

            <div className="mb-2">
                <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider px-1 mb-3">Popular Regions</h3>
                <div className="flex flex-col gap-3">
                    <div className="relative flex items-center justify-between gap-4 bg-surface px-4 py-3 rounded-xl border-2 border-primary shadow-sm cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-gray-700">
                                <img src={IMAGES.flags.usa} alt="USA Flag" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-white text-base font-semibold leading-tight">United States</p>
                                <span className="text-primary text-xs font-bold bg-primary/10 px-2 py-0.5 rounded-full w-fit mt-1">FAA Standards</span>
                            </div>
                        </div>
                        <div className="shrink-0 text-primary">
                            <span className="material-symbols-outlined text-[24px] fill-current">check_circle</span>
                        </div>
                    </div>

                    {[
                        { name: 'Europe', sub: 'EASA Standards', flag: IMAGES.flags.eu },
                        { name: 'United Kingdom', sub: 'CAA Standards', flag: IMAGES.flags.uk },
                        { name: 'Canada', sub: 'Transport Canada', flag: IMAGES.flags.ca }
                    ].map((region) => (
                        <div key={region.name} className="flex items-center justify-between gap-4 bg-surface px-4 py-3 rounded-xl border border-white/5 hover:border-white/10 active:bg-surface-highlight transition-colors cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-gray-700">
                                    <img src={region.flag} alt={`${region.name} Flag`} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-white text-base font-medium leading-tight">{region.name}</p>
                                    <span className="text-gray-400 text-xs font-normal mt-0.5">{region.sub}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 z-30 p-4 bg-gradient-to-t from-background via-background to-transparent pt-12">
            <button 
                onClick={() => onNavigate(Screen.OnboardingComplete)}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-lg h-14 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
                <span>Confirm Region</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
        </div>
    </div>
  );
};