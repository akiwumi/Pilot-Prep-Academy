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
import { Logbook } from './screens/Logbook';
import { BottomNav } from './components/BottomNav';
import { DEMO_QUIZ_QUESTIONS, DEFAULT_LOCALITY_ID, DEFAULT_REGION_ID, type LocalityId, type QuizResultData, type RegionId } from './data';

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
  Logbook = 'Logbook',
  Quiz = 'Quiz',
  QuizResult = 'QuizResult',
  Messages = 'Messages',
  Profile = 'Profile',
}

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.Welcome);
  const [previousScreen, setPreviousScreen] = useState<Screen>(Screen.Welcome);

  const [selectedRegionId, setSelectedRegionId] = useState<RegionId>(DEFAULT_REGION_ID);
  const [selectedLocalityId, setSelectedLocalityId] = useState<LocalityId>(DEFAULT_LOCALITY_ID);

  const [quizResult, setQuizResult] = useState<QuizResultData | null>(null);

  const navigate = (screen: Screen) => {
    setPreviousScreen(activeScreen);
    setActiveScreen(screen);
  };

  // Determine if bottom nav should be shown
  const showBottomNav = [
    Screen.CourseOverview,
    Screen.Logbook,
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
        return <Welcome onNavigate={navigate} />;
      case Screen.Login:
        return <Login onNavigate={navigate} />;
      case Screen.Walkthrough:
        return <Walkthrough onNavigate={navigate} />;
      case Screen.Setup:
        return <Setup onNavigate={navigate} />;
      case Screen.RegionSelect:
        return (
          <RegionSelect
            onNavigate={navigate}
            previousScreen={previousScreen}
            selectedRegionId={selectedRegionId}
            selectedLocalityId={selectedLocalityId}
            onSelectRegion={(regionId, localityId) => {
              setSelectedRegionId(regionId);
              setSelectedLocalityId(localityId);
            }}
          />
        );
      case Screen.OnboardingComplete:
        return <OnboardingComplete onNavigate={navigate} />;
      case Screen.CourseOverview:
        return <CourseOverview onNavigate={navigate} />;
      case Screen.Directory:
        return (
          <Directory
            onNavigate={navigate}
            selectedRegionId={selectedRegionId}
            selectedLocalityId={selectedLocalityId}
            onSelectLocality={(regionId, localityId) => {
              setSelectedRegionId(regionId);
              setSelectedLocalityId(localityId);
            }}
          />
        );
      case Screen.LearningLibrary:
        return <LearningLibrary onNavigate={navigate} />;
      case Screen.VideoTutorials:
        return <VideoTutorials onNavigate={navigate} />;
      case Screen.Logbook:
        return <Logbook onNavigate={navigate} />;
      case Screen.Quiz:
        return (
          <Quiz
            onNavigate={navigate}
            questions={DEMO_QUIZ_QUESTIONS}
            onComplete={(result) => {
              setQuizResult(result);
              navigate(Screen.QuizResult);
            }}
          />
        );
      case Screen.QuizResult:
        return (
          <QuizResult
            onNavigate={navigate}
            result={quizResult}
            onRetake={() => {
              setQuizResult(null);
              navigate(Screen.Quiz);
            }}
          />
        );
      case Screen.Messages:
        return <Messages onNavigate={navigate} />;
      case Screen.Profile:
        return (
          <Profile
            onNavigate={navigate}
            selectedRegionId={selectedRegionId}
            selectedLocalityId={selectedLocalityId}
          />
        );
      default:
        return <Welcome onNavigate={navigate} />;
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-background font-display text-white selection:bg-primary selection:text-white">
      <div className="w-full max-w-md h-full min-h-screen relative bg-background shadow-2xl flex flex-col">
        {renderScreen()}

        {/* Global "Home" nav button (Landing page) */}
        {activeScreen !== Screen.Welcome && (
          <button
            onClick={() => navigate(Screen.Welcome)}
            className="fixed top-4 right-4 z-[60] size-11 rounded-full bg-surface/90 backdrop-blur border border-white/10 shadow-lg flex items-center justify-center hover:bg-surface-highlight transition-colors"
            aria-label="Back to Landing Page"
            title="Back to Landing Page"
          >
            <span className="material-symbols-outlined text-[22px]">home</span>
          </button>
        )}

        {showBottomNav && (
          <BottomNav 
            activeScreen={activeScreen} 
            onNavigate={navigate} 
            variant={isDiscoveryMode ? 'directory' : 'course'}
          />
        )}
      </div>
    </div>
  );
}