import React from 'react';
import { Screen } from '../App';

interface BottomNavProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
  variant: 'course' | 'directory';
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, onNavigate, variant }) => {
  const getIconClass = (screen: Screen) => {
    return activeScreen === screen ? 'text-primary' : 'text-text-secondary hover:text-slate-900 transition-colors';
  };

  const getLabelClass = (screen: Screen) => {
    return activeScreen === screen ? 'text-primary font-bold' : 'text-text-secondary font-medium';
  };

  const renderNavItem = (screen: Screen, icon: string, label: string, filled = false) => (
    <button 
      onClick={() => onNavigate(screen)}
      className={`flex flex-1 flex-col items-center justify-center gap-1 p-2 ${getIconClass(screen)}`}
    >
      <span className={`material-symbols-outlined text-[24px] ${activeScreen === screen || filled ? '' : 'unfilled'}`}>
        {icon}
      </span>
      <span className={`text-[10px] ${getLabelClass(screen)}`}>
        {label}
      </span>
    </button>
  );

  if (variant === 'directory') {
    return (
      <div className="fixed bottom-0 w-full max-w-md bg-surface border-t border-slate-200 pb-safe pt-2 px-2 z-40 flex justify-between h-[80px]">
        {renderNavItem(Screen.Directory, 'search', 'Directory')}
        {renderNavItem(Screen.RegionSelect, 'map', 'Map')}
        {/* Placeholder screens for demo flow */}
        <button className="flex flex-1 flex-col items-center justify-center gap-1 p-2 text-text-secondary hover:text-slate-900 transition-colors">
           <span className="material-symbols-outlined text-[24px] unfilled">bookmark</span>
           <span className="text-[10px] font-medium">Saved</span>
        </button>
        {renderNavItem(Screen.Profile, 'person', 'Profile')}
      </div>
    );
  }

  // Default 'course' variant
  return (
    <div className="fixed bottom-0 w-full max-w-md bg-surface/95 backdrop-blur-lg border-t border-slate-200 pb-safe pt-2 px-2 z-40 flex justify-between h-[80px]">
        {renderNavItem(Screen.CourseOverview, 'school', 'Course', true)}
        {renderNavItem(Screen.Logbook, 'menu_book', 'Logbook')}
        {renderNavItem(Screen.LearningLibrary, 'folder_open', 'Resources')}
        {renderNavItem(Screen.Profile, 'person', 'Profile')}
    </div>
  );
};