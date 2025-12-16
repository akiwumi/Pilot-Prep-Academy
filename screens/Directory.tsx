import React from 'react';
import { Screen } from '../App';
import { IMAGES } from '../constants';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export const Directory: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-background border-b border-gray-800">
        <div className="flex items-center px-4 py-3 justify-between">
          <div className="text-white flex size-10 shrink-0 items-center justify-center cursor-pointer hover:bg-gray-800 rounded-full transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Flight Schools</h2>
          <div className="flex w-10 items-center justify-end cursor-pointer text-primary hover:text-primary-dark transition-colors">
            <span className="material-symbols-outlined text-[24px]">tune</span>
          </div>
        </div>
        
        <div className="px-4 pb-3 flex flex-col gap-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400 text-[20px]">location_on</span>
            </div>
            <select className="block w-full pl-10 pr-10 py-2.5 text-base border-gray-700 bg-surface rounded-lg focus:ring-primary focus:border-primary text-white appearance-none cursor-pointer shadow-sm">
              <option>Florida (South)</option>
              <option>Florida (Central)</option>
              <option>California (SoCal)</option>
              <option>Texas (North)</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400">expand_more</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-gray-700 text-sm font-medium whitespace-nowrap shadow-sm hover:border-primary/50 transition-colors">
              <span>Favorites Only</span>
              <span className="material-symbols-outlined text-[16px] text-pink-500 fill-[1]">favorite</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-white border border-primary text-sm font-medium whitespace-nowrap shadow-sm">
              <span>Part 141</span>
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-gray-700 text-sm font-medium whitespace-nowrap shadow-sm hover:border-primary/50 transition-colors">
              <span>Rating</span>
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-gray-700 text-sm font-medium whitespace-nowrap shadow-sm hover:border-primary/50 transition-colors">
              <span>Distance</span>
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-4">
        <div className="relative flex w-full flex-1 items-stretch rounded-lg h-12 shadow-sm">
          <div className="text-slate-400 flex border-none bg-surface items-center justify-center pl-4 rounded-l-lg border-r-0">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-white focus:outline-0 focus:ring-0 border-none bg-surface focus:border-none h-full placeholder:text-slate-400 px-4 pl-2 text-base font-normal leading-normal" placeholder="Search schools, airports (e.g. KMYF)" />
        </div>
      </div>

      {/* Directory List */}
      <div className="flex flex-col gap-4 px-4">
        <div className="flex items-center justify-between">
          <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider px-1">Featured Schools</h3>
          <span className="text-xs text-slate-400">12 results</span>
        </div>

        {/* Card 1 */}
        <div onClick={() => onNavigate(Screen.Messages)} className="flex flex-col sm:flex-row items-stretch justify-between gap-4 rounded-xl bg-surface p-4 shadow-sm border border-gray-800 relative cursor-pointer hover:border-gray-700 transition-colors">
          <div className="flex flex-[2_2_0px] flex-col justify-between gap-3">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                <span className="text-slate-300 text-sm font-semibold leading-normal">4.8 <span className="font-normal text-slate-400">(120)</span></span>
              </div>
              <p className="text-white text-lg font-bold leading-tight pr-8 sm:pr-0">Blue Skies Aviation</p>
              <div className="flex items-start gap-1 text-slate-400 mt-0.5">
                <span className="material-symbols-outlined text-[16px] mt-0.5">pin_drop</span>
                <p className="text-sm font-normal leading-normal">Orlando Executive (KORL) • 5mi</p>
              </div>
              <div className="flex gap-1.5 mt-1 flex-wrap">
                <span className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1 text-xs font-medium text-slate-300 ring-1 ring-inset ring-slate-500/10">Cessna 172</span>
                <span className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1 text-xs font-medium text-slate-300 ring-1 ring-inset ring-slate-500/10">Piper PA-28</span>
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <button className="flex flex-1 items-center justify-center overflow-hidden rounded-lg h-9 px-3 bg-primary text-white gap-2 text-sm font-medium leading-normal hover:bg-primary-dark transition-colors">
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span className="truncate">Contact</span>
              </button>
              <button className="flex items-center justify-center overflow-hidden rounded-lg h-9 w-9 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </button>
              <button className="flex items-center justify-center overflow-hidden rounded-lg h-9 w-9 bg-gray-700 text-pink-500 hover:bg-gray-600 transition-colors">
                <span className="material-symbols-outlined text-[20px] fill-current">favorite</span>
              </button>
            </div>
          </div>
          <div className="w-full sm:w-1/3 min-h-[140px] bg-center bg-no-repeat bg-cover rounded-lg sm:flex-1 relative overflow-hidden group" style={{ backgroundImage: `url("${IMAGES.plane_cessna}")` }}>
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded">PART 141</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col sm:flex-row items-stretch justify-between gap-4 rounded-xl bg-surface p-4 shadow-sm border border-gray-800 relative">
          <div className="flex flex-[2_2_0px] flex-col justify-between gap-3">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                <span className="text-slate-300 text-sm font-semibold leading-normal">4.5 <span className="font-normal text-slate-400">(85)</span></span>
              </div>
              <p className="text-white text-lg font-bold leading-tight pr-8 sm:pr-0">Gulf Coast Flight Academy</p>
              <div className="flex items-start gap-1 text-slate-400 mt-0.5">
                <span className="material-symbols-outlined text-[16px] mt-0.5">pin_drop</span>
                <p className="text-sm font-normal leading-normal">Tampa Intl (KTPA) • 12mi</p>
              </div>
              <div className="flex gap-1.5 mt-1 flex-wrap">
                <span className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1 text-xs font-medium text-slate-300 ring-1 ring-inset ring-slate-500/10">Glass Cockpit</span>
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <button className="flex flex-1 items-center justify-center overflow-hidden rounded-lg h-9 px-3 bg-primary/20 text-primary gap-2 text-sm font-medium leading-normal hover:bg-primary/30 transition-colors">
                <span className="material-symbols-outlined text-[18px]">info</span>
                <span className="truncate">Details</span>
              </button>
              <button className="flex items-center justify-center overflow-hidden rounded-lg h-9 w-9 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </button>
              <button className="flex items-center justify-center overflow-hidden rounded-lg h-9 w-9 bg-gray-700 text-slate-400 hover:text-pink-500 hover:bg-gray-600 transition-colors">
                <span className="material-symbols-outlined text-[20px]">favorite_border</span>
              </button>
            </div>
          </div>
          <div className="w-full sm:w-1/3 min-h-[140px] bg-center bg-no-repeat bg-cover rounded-lg sm:flex-1 relative overflow-hidden" style={{ backgroundImage: `url("${IMAGES.plane_interior}")` }}>
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded">PART 141</div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col sm:flex-row items-stretch justify-between gap-4 rounded-xl bg-surface p-4 shadow-sm border border-gray-800 relative">
          <div className="flex flex-[2_2_0px] flex-col justify-between gap-3">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                <span className="text-slate-300 text-sm font-semibold leading-normal">4.9 <span className="font-normal text-slate-400">(210)</span></span>
              </div>
              <p className="text-white text-lg font-bold leading-tight pr-8 sm:pr-0">Sun State Aviation</p>
              <div className="flex items-start gap-1 text-slate-400 mt-0.5">
                <span className="material-symbols-outlined text-[16px] mt-0.5">pin_drop</span>
                <p className="text-sm font-normal leading-normal">Kissimmee Gateway (KISM) • 8mi</p>
              </div>
              <div className="flex gap-1.5 mt-1 flex-wrap">
                <span className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1 text-xs font-medium text-slate-300 ring-1 ring-inset ring-slate-500/10">Cirrus SR20</span>
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <button className="flex flex-1 items-center justify-center overflow-hidden rounded-lg h-9 px-3 bg-primary text-white gap-2 text-sm font-medium leading-normal hover:bg-primary-dark transition-colors">
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span className="truncate">Contact</span>
              </button>
              <button className="flex items-center justify-center overflow-hidden rounded-lg h-9 w-9 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </button>
              <button className="flex items-center justify-center overflow-hidden rounded-lg h-9 w-9 bg-gray-700 text-slate-400 hover:text-pink-500 hover:bg-gray-600 transition-colors">
                <span className="material-symbols-outlined text-[20px]">favorite_border</span>
              </button>
            </div>
          </div>
          <div className="w-full sm:w-1/3 min-h-[140px] bg-center bg-no-repeat bg-cover rounded-lg sm:flex-1 relative overflow-hidden" style={{ backgroundImage: `url("${IMAGES.plane_yellow}")` }}>
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded">PART 61</div>
          </div>
        </div>
      </div>
    </div>
  );
};