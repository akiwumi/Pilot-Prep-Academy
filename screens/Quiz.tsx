import React from 'react';
import { Screen } from '../App';
import type { QuizQuestion, QuizResultData } from '../data';

interface Props {
  onNavigate: (screen: Screen) => void;
  questions: QuizQuestion[];
  onComplete: (result: QuizResultData) => void;
}

export const Quiz: React.FC<Props> = ({ onNavigate, questions, onComplete }) => {
  const total = questions.length;
  const [index, setIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<Array<number | null>>(() => questions.map(() => null));

  const q = questions[index];
  const selected = answers[index];
  const progressPct = Math.round(((index + 1) / total) * 100);

  const selectChoice = (choiceIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = choiceIndex;
      return next;
    });
  };

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(total - 1, i + 1));

  const finish = () => {
    const correct = answers.reduce((sum, ans, i) => sum + (ans === questions[i].correctIndex ? 1 : 0), 0);
    const incorrect = total - correct;
    const percentage = total === 0 ? 0 : Math.round((correct / total) * 100);
    const result: QuizResultData = { total, correct, incorrect, percentage, answers, questions };
    onComplete(result);
  };

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background text-white font-display">
        <header className="flex items-center justify-between px-4 py-3 shrink-0 border-b border-gray-800">
            <button 
                onClick={() => onNavigate(Screen.CourseOverview)}
                className="flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-surface transition-colors text-gray-400"
            >
                <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <h1 className="text-base font-bold tracking-tight text-center flex-1">Demo Quiz</h1>
            <div className="flex items-center gap-1 text-primary font-medium text-sm w-12 justify-end">
                <span className="text-xs font-bold">{progressPct}%</span>
            </div>
        </header>

        <main className="flex-1 overflow-y-auto p-5 pb-32">
            <div className="max-w-md mx-auto flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-end">
                        <span className="text-sm font-medium text-gray-400">Question {index + 1} of {total}</span>
                        <span className="text-xs font-bold text-primary">{q.topic}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-surface overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${progressPct}%` }} />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    {q.figure && (
                        <div className="relative w-full h-48 rounded-xl overflow-hidden bg-surface border border-gray-700">
                            <img src={q.figure.src} alt={q.figure.label} className="w-full h-full object-cover opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-medium">{q.figure.label}</div>
                        </div>
                    )}
                    <div className="py-2">
                        <h2 className="text-xl font-medium leading-relaxed">
                            {q.prompt}
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    {q.choices.map((choice, choiceIndex) => {
                        const isSelected = selected === choiceIndex;
                        return (
                            <button
                                key={choice}
                                type="button"
                                onClick={() => selectChoice(choiceIndex)}
                                className={`group relative flex w-full items-center gap-4 rounded-xl p-4 transition-all border ${
                                    isSelected
                                        ? 'border-2 border-primary bg-primary/10 hover:bg-primary/20'
                                        : 'border-gray-700 bg-surface hover:border-primary/50 hover:bg-[#232d3f]'
                                }`}
                            >
                                <div className="flex items-center justify-center">
                                    <span className={`size-5 rounded-full border-2 ${isSelected ? 'border-primary bg-primary/20' : 'border-gray-500'}`} />
                                </div>
                                <div className="flex grow flex-col items-start text-left">
                                    <span className={`text-sm font-bold mb-0.5 ${isSelected ? 'text-primary' : 'text-gray-400'}`}>
                                        Option {String.fromCharCode(65 + choiceIndex)}
                                    </span>
                                    <span className="text-base font-medium text-white">{choice}</span>
                                </div>
                                {isSelected && (
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary">
                                        <span className="material-symbols-outlined">check_circle</span>
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </main>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t border-gray-800 backdrop-blur-xl bg-opacity-90">
            <div className="max-w-md mx-auto flex gap-4">
                <button
                    onClick={goPrev}
                    disabled={index === 0}
                    className="flex-1 h-12 flex items-center justify-center gap-2 rounded-xl border border-gray-600 bg-transparent text-white text-base font-bold hover:bg-surface transition-colors active:scale-[0.98] disabled:opacity-40 disabled:hover:bg-transparent"
                >
                    <span className="material-symbols-outlined text-xl">arrow_back</span>
                    <span>Previous</span>
                </button>
                {index < total - 1 ? (
                    <button
                        onClick={goNext}
                        disabled={selected === null}
                        className="flex-1 h-12 flex items-center justify-center gap-2 rounded-xl bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all active:scale-[0.98] disabled:opacity-60"
                    >
                        <span>Next</span>
                        <span className="material-symbols-outlined text-xl">arrow_forward</span>
                    </button>
                ) : (
                    <button
                        onClick={finish}
                        disabled={selected === null}
                        className="flex-1 h-12 flex items-center justify-center gap-2 rounded-xl bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all active:scale-[0.98] disabled:opacity-60"
                    >
                        <span>Finish</span>
                        <span className="material-symbols-outlined text-xl">check</span>
                    </button>
                )}
            </div>
            <div className="h-4"></div>
        </div>
    </div>
  );
};