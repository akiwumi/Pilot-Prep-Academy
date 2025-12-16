import React from 'react';
import { Screen } from '../App';
import { IMAGES } from '../constants';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export const OnboardingComplete: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none z-0"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20 z-10">
            <div className="relative w-full max-w-[320px] aspect-square mb-8 flex items-center justify-center">
                <div className="absolute inset-0 border border-primary/20 rounded-full scale-90 opacity-50 animate-pulse"></div>
                <div className="absolute inset-0 border border-primary/10 rounded-full scale-110 opacity-30"></div>
                <div className="bg-center bg-no-repeat bg-cover rounded-2xl w-full h-full shadow-2xl shadow-primary/20" style={{ backgroundImage: `url("${IMAGES.success_art}")` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-2xl"></div>
                </div>
                <div className="absolute -bottom-6 bg-primary text-white p-4 rounded-full shadow-lg border-4 border-background flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
            </div>

            <div className="flex flex-col items-center gap-3 text-center max-w-[320px] mt-4">
                <h1 className="text-3xl font-bold tracking-tight text-white">All Systems Go</h1>
                <p className="text-gray-400 text-base leading-relaxed">
                    Your student pilot profile is set up. Your journey to the Private Pilot License starts now. Let’s get you in the air.
                </p>
            </div>
        </div>

        <div className="flex flex-col w-full px-6 pb-8 pt-4 gap-3 bg-gradient-to-t from-background to-transparent z-20">
            <button 
                onClick={() => onNavigate(Screen.CourseOverview)}
                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/25 transition-transform active:scale-[0.98]"
            >
                <span className="truncate">Start Your First Lesson</span>
                <span className="material-symbols-outlined ml-2 text-xl">flight_takeoff</span>
            </button>
            <button 
                onClick={() => onNavigate(Screen.Directory)}
                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-gray-300 text-sm font-semibold leading-normal tracking-[0.015em] hover:bg-gray-800 transition-colors"
            >
                <span className="truncate">Explore Directory</span>
            </button>
        </div>
        <div className="h-1 bg-transparent"></div>
    </div>
  );
};