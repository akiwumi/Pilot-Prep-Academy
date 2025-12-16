import React from 'react';
import { Screen } from '../App';

interface SideNavProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
  variant: 'course' | 'directory';
}

type NavItem = {
  screen: Screen;
  icon: string;
  label: string;
};

export const SideNav: React.FC<SideNavProps> = ({ activeScreen, onNavigate, variant }) => {
  const nav: NavItem[] =
    variant === 'directory'
      ? [
          { screen: Screen.Directory, icon: 'search', label: 'Directory' },
          { screen: Screen.RegionSelect, icon: 'map', label: 'Regions' },
          { screen: Screen.Profile, icon: 'person', label: 'Profile' },
        ]
      : [
          { screen: Screen.CourseOverview, icon: 'school', label: 'Course' },
          { screen: Screen.Logbook, icon: 'menu_book', label: 'Logbook' },
          { screen: Screen.LearningLibrary, icon: 'folder_open', label: 'Resources' },
          { screen: Screen.Messages, icon: 'chat', label: 'Messages' },
          { screen: Screen.Profile, icon: 'person', label: 'Profile' },
        ];

  return (
    <aside className="hidden md:flex md:flex-col md:gap-3 md:py-6 md:pl-6 md:pr-3">
      <div className="sticky top-6 flex flex-col gap-3">
        <div className="flex items-center gap-3 px-3 py-3 rounded-2xl bg-surface border border-slate-200 shadow-sm">
          <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined">flight_takeoff</span>
          </div>
          <div className="min-w-0">
            <p className="font-bold leading-tight truncate">Pilot Prep</p>
            <p className="text-xs text-text-secondary font-medium truncate">Training Dashboard</p>
          </div>
        </div>

        <nav className="flex flex-col gap-1 rounded-2xl bg-surface border border-slate-200 shadow-sm p-2">
          {nav.map((item) => {
            const active = activeScreen === item.screen;
            return (
              <button
                key={item.screen}
                onClick={() => onNavigate(item.screen)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-left ${
                  active ? 'bg-primary/10 text-primary' : 'text-slate-700 hover:bg-surface-highlight'
                }`}
              >
                <span className={`material-symbols-outlined text-[22px] ${active ? '' : 'unfilled'}`}>{item.icon}</span>
                <span className={`text-sm ${active ? 'font-bold' : 'font-semibold'}`}>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="rounded-2xl bg-surface border border-slate-200 shadow-sm p-3">
          <p className="text-xs font-bold uppercase tracking-wider text-text-secondary">Tip</p>
          <p className="text-sm text-slate-700 mt-1 leading-relaxed">
            Use the sidebar to move between Course, Logbook, Resources and Messages on desktop/tablet.
          </p>
        </div>
      </div>
    </aside>
  );
};


