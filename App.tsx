import React, { useState } from 'react';
import { Welcome } from './screens/Welcome';
import { Login } from './screens/Login';
import { Walkthrough } from './screens/Walkthrough';
import { Setup } from './screens/Setup';
import { RegionSelect } from './screens/RegionSelect';
import { OnboardingComplete } from './screens/OnboardingComplete';
import { CourseOverview } from './screens/CourseOverview';
import { Directory } from './screens/Directory';
import { LearningLibrary } from './screens/LearningLibrary';
import { VideoTutorials } from './screens/VideoTutorials';
import { Quiz } from './screens/Quiz';
import { QuizResult } from './screens/QuizResult';
import { Messages } from './screens/Messages';
import { Profile } from './screens/Profile';
import { BottomNav } from './components/BottomNav';

export enum Screen {
  Welcome = 'Welcome',
  Login = 'Login',
  Walkthrough = 'Walkthrough',
  Setup = 'Setup',
  RegionSelect = 'RegionSelect',
  OnboardingComplete = 'OnboardingComplete',
  CourseOverview = 'CourseOverview',
  Directory = 'Directory',
  LearningLibrary = 'LearningLibrary',
  VideoTutorials = 'VideoTutorials',
  Quiz = 'Quiz',
  QuizResult = 'QuizResult',
  Messages = 'Messages',
  Profile = 'Profile',
}

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.Welcome);

  // Determine if bottom nav should be shown
  const showBottomNav = [
    Screen.CourseOverview,
    Screen.Directory,
    Screen.LearningLibrary,
    Screen.VideoTutorials,
    Screen.Messages,
    Screen.Profile
  ].includes(activeScreen);

  // Determine which bottom nav variant to show (Training vs Discovery)
  // Simplified: "Course" flow vs "Directory" flow
  const isDiscoveryMode = [Screen.Directory].includes(activeScreen);

  const renderScreen = () => {
    switch (activeScreen) {
      case Screen.Welcome:
        return <Welcome onNavigate={setActiveScreen} />;
      case Screen.Login:
        return <Login onNavigate={setActiveScreen} />;
      case Screen.Walkthrough:
        return <Walkthrough onNavigate={setActiveScreen} />;
      case Screen.Setup:
        return <Setup onNavigate={setActiveScreen} />;
      case Screen.RegionSelect:
        return <RegionSelect onNavigate={setActiveScreen} />;
      case Screen.OnboardingComplete:
        return <OnboardingComplete onNavigate={setActiveScreen} />;
      case Screen.CourseOverview:
        return <CourseOverview onNavigate={setActiveScreen} />;
      case Screen.Directory:
        return <Directory onNavigate={setActiveScreen} />;
      case Screen.LearningLibrary:
        return <LearningLibrary onNavigate={setActiveScreen} />;
      case Screen.VideoTutorials:
        return <VideoTutorials onNavigate={setActiveScreen} />;
      case Screen.Quiz:
        return <Quiz onNavigate={setActiveScreen} />;
      case Screen.QuizResult:
        return <QuizResult onNavigate={setActiveScreen} />;
      case Screen.Messages:
        return <Messages onNavigate={setActiveScreen} />;
      case Screen.Profile:
        return <Profile onNavigate={setActiveScreen} />;
      default:
        return <Welcome onNavigate={setActiveScreen} />;
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-background font-display text-white selection:bg-primary selection:text-white">
      <div className="w-full max-w-md h-full min-h-screen relative bg-background shadow-2xl flex flex-col">
        {renderScreen()}
        {showBottomNav && (
          <BottomNav 
            activeScreen={activeScreen} 
            onNavigate={setActiveScreen} 
            variant={isDiscoveryMode ? 'directory' : 'course'}
          />
        )}
      </div>
    </div>
  );
}