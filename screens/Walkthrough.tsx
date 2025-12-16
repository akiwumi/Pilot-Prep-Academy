import React from 'react';
import { Screen } from '../App';
import { IMAGES } from '../constants';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export const Walkthrough: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background overflow-hidden">
      <div className="flex items-center p-6 pb-2 justify-end shrink-0 z-20">
        <button 
            onClick={() => onNavigate(Screen.Setup)}
            className="flex items-center justify-center rounded-full px-3 py-2 hover:bg-white/10 transition-colors cursor-pointer group"
        >
            <span className="text-text-secondary text-sm font-bold group-hover:text-primary transition-colors">Skip</span>
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center min-h-0 relative z-10">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 px-8 no-scrollbar items-center h-full pb-6 pt-2">
            {/* Card 1 */}
            <div className="snap-center shrink-0 w-full max-w-[340px] h-[70vh] max-h-[640px] flex flex-col rounded-2xl bg-surface shadow-[0_0_4px_rgba(0,0,0,0.3)] overflow-hidden relative">
                <div className="h-[55%] w-full bg-cover bg-center relative" style={{ backgroundImage: `url("${IMAGES.bg_sunset_cockpit}")` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
                </div>
                <div className="flex flex-col flex-1 p-8 pt-6 gap-4 text-center items-center">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-1 text-primary shadow-sm">
                        <span className="material-symbols-outlined text-[32px]">school</span>
                    </div>
                    <div>
                        <h2 className="text-white text-2xl font-bold leading-tight mb-3">Structured Learning</h2>
                        <p className="text-text-secondary text-base font-normal leading-relaxed">
                            Step-by-step guidance through the entire PPL syllabus, designed to keep you on track.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Card 2 */}
            <div className="snap-center shrink-0 w-full max-w-[340px] h-[70vh] max-h-[640px] flex flex-col rounded-2xl bg-surface shadow-[0_0_4px_rgba(0,0,0,0.3)] overflow-hidden relative">
                <div className="h-[55%] w-full bg-cover bg-center relative" style={{ backgroundImage: `url("${IMAGES.plane_interior}")` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
                </div>
                <div className="flex flex-col flex-1 p-8 pt-6 gap-4 text-center items-center">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-1 text-primary shadow-sm">
                        <span className="material-symbols-outlined text-[32px]">menu_book</span>
                    </div>
                    <div>
                        <h2 className="text-white text-2xl font-bold leading-tight mb-3">Pocket Library</h2>
                        <p className="text-text-secondary text-base font-normal leading-relaxed">
                            Instant access to regulations, aircraft manuals, and study guides right in your pocket.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full pb-10 pt-4 px-6 gap-8 shrink-0 z-20 bg-background">
        <div className="flex flex-row items-center justify-center gap-2.5">
            <div className="h-2 w-8 rounded-full bg-primary"></div>
            <div className="h-2 w-2 rounded-full bg-[#324467]"></div>
            <div className="h-2 w-2 rounded-full bg-[#324467]"></div>
        </div>
        <button 
            onClick={() => onNavigate(Screen.Setup)}
            className="flex w-full max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-6 bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all text-white text-base font-bold tracking-[0.015em] shadow-[0_4px_12px_rgba(19,91,236,0.3)]"
        >
            <span className="truncate">Next Step</span>
            <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};