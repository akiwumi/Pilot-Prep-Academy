import React from 'react';
import { Screen } from '../App';
import { IMAGES } from '../constants';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export const Welcome: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-hidden bg-background">
      {/* Header Area */}
      <div className="h-4 w-full"></div>
      <div className="flex items-center justify-center py-6 px-4 z-20 relative">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/20 text-primary">
            <span className="material-symbols-outlined text-2xl">flight_takeoff</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">Pilot Prep</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-4 gap-4 z-10 relative">
        <div className="flex-1 w-full bg-cover bg-center flex flex-col items-stretch justify-end rounded-2xl overflow-hidden relative shadow-lg group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105" 
                 style={{ backgroundImage: `url("${IMAGES.bg_sunset_cockpit}")` }}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/60 to-transparent"></div>
            
            <div className="relative z-10 flex flex-col gap-6 p-6 pb-8">
                <div className="flex flex-col gap-2">
                    <h2 className="text-white text-3xl font-extrabold leading-tight tracking-tight">
                        Earn Your <span className="text-primary">Wings</span>
                    </h2>
                    <p className="text-slate-300 text-base font-medium leading-relaxed max-w-[320px]">
                        Master the Private Pilot License curriculum with interactive lessons, simulation guides, and progress tracking.
                    </p>
                </div>
                
                <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
                    <button 
                        onClick={() => onNavigate(Screen.Walkthrough)}
                        className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary hover:bg-primary-dark transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/25"
                    >
                        <span className="mr-2">Create Account</span>
                        <span className="material-symbols-outlined text-lg">person_add</span>
                    </button>
                    <button 
                        onClick={() => onNavigate(Screen.Login)}
                        className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-surface/60 hover:bg-surface-highlight backdrop-blur-sm border border-slate-200 transition-colors text-slate-900 text-base font-bold leading-normal tracking-[0.015em]"
                    >
                        <span className="mr-2">Log In</span>
                        <span className="material-symbols-outlined text-lg">login</span>
                    </button>
                </div>
            </div>
        </div>
      </div>

      <div className="flex flex-col px-4 pb-8 pt-2 justify-center items-center gap-4">
        <div className="flex gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
        </div>
      </div>
    </div>
  );
};