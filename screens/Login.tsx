import React from 'react';
import { Screen } from '../App';
import { IMAGES } from '../constants';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export const Login: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background">
        {/* Hero Header */}
        <div className="relative w-full h-[320px] bg-background overflow-hidden rounded-b-[2.5rem] shadow-2xl z-0">
            <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: `url('${IMAGES.bg_night_cockpit}')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 w-full px-6 pb-12 flex flex-col justify-end h-full">
                <div className="flex items-center gap-2 mb-2 opacity-90">
                    <span className="material-symbols-outlined text-primary text-3xl animate-pulse">flight_takeoff</span>
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">PPL Training Companion</span>
                </div>
                <h1 className="text-4xl font-bold text-white leading-tight drop-shadow-lg">
                    Cleared for<br/><span className="text-primary">Takeoff</span>
                </h1>
                <p className="text-gray-400 mt-2 text-sm font-light">Your journey to the skies begins here.</p>
            </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col px-6 -mt-6 z-10 relative pb-8">
            {/* Toggle */}
            <div className="bg-surface p-1.5 rounded-xl shadow-lg border border-gray-800 flex mb-8">
                <label className="flex-1 cursor-pointer">
                    <input type="radio" name="auth-mode" value="login" className="peer sr-only" defaultChecked />
                    <div className="w-full py-3 rounded-lg text-sm font-medium text-center transition-all duration-300 peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-md text-gray-400 hover:text-gray-200">
                        Login
                    </div>
                </label>
                <label className="flex-1 cursor-pointer">
                    <input type="radio" name="auth-mode" value="signup" className="peer sr-only" />
                    <div className="w-full py-3 rounded-lg text-sm font-medium text-center transition-all duration-300 peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-md text-gray-400 hover:text-gray-200">
                        Sign Up
                    </div>
                </label>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-5 w-full max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); onNavigate(Screen.CourseOverview); }}>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">Email / Username</label>
                    <div className="relative group">
                        <div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center pointer-events-none">
                            <span className="material-symbols-outlined text-gray-500 group-focus-within:text-primary transition-colors">mail</span>
                        </div>
                        <input type="email" className="w-full h-14 bg-surface text-white placeholder-gray-600 border border-gray-700 rounded-xl pl-11 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm" placeholder="pilot@example.com" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">Password</label>
                    <div className="relative group">
                        <div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center pointer-events-none">
                            <span className="material-symbols-outlined text-gray-500 group-focus-within:text-primary transition-colors">lock</span>
                        </div>
                        <input type="password" className="w-full h-14 bg-surface text-white placeholder-gray-600 border border-gray-700 rounded-xl pl-11 pr-12 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm" placeholder="••••••••" />
                        <button type="button" className="absolute right-0 top-0 bottom-0 w-12 flex items-center justify-center text-gray-500 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                        </button>
                    </div>
                </div>

                <div className="flex justify-end -mt-1">
                    <a href="#" className="text-sm font-medium text-primary hover:text-blue-400 transition-colors">Forgot Password?</a>
                </div>

                <button type="submit" className="group relative w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-glow transition-all active:scale-[0.98] mt-2 overflow-hidden">
                    <div className="relative flex items-center justify-center gap-3">
                        <span className="text-lg">Taxi to Runway</span>
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                </button>
            </form>

            <div className="relative my-8 w-full max-w-md mx-auto">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-800"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase tracking-wider font-semibold">
                    <span className="bg-background px-3 text-gray-500">Or continue with</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto mb-4">
                <button className="flex items-center justify-center gap-3 bg-surface border border-gray-700 hover:bg-gray-800 text-white py-3.5 rounded-xl transition-all shadow-sm">
                    <span className="material-symbols-outlined">favorite</span>
                    <span className="font-medium">Apple</span>
                </button>
                <button className="flex items-center justify-center gap-3 bg-surface border border-gray-700 hover:bg-gray-800 text-white py-3.5 rounded-xl transition-all shadow-sm">
                    <span className="material-symbols-outlined">circle</span>
                    <span className="font-medium">Google</span>
                </button>
            </div>
        </div>
    </div>
  );
};