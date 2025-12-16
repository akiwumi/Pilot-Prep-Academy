import { IMAGES } from './constants';

export type RegionId = 'us' | 'eu' | 'uk' | 'ca';
export type LocalityId =
  | 'us-fl-south'
  | 'us-fl-central'
  | 'us-ca-socal'
  | 'us-tx-north'
  | 'eu-all'
  | 'uk-all'
  | 'ca-all';

export type QuizQuestion = {
  id: string;
  topic: string;
  prompt: string;
  choices: string[];
  correctIndex: number;
  explanation?: string;
  figure?: {
    src: string;
    label: string;
  };
};

export type QuizResultData = {
  total: number;
  correct: number;
  incorrect: number;
  percentage: number;
  answers: Array<number | null>;
  questions: QuizQuestion[];
};

export type Region = {
  id: RegionId;
  name: string;
  standard: string;
  flag: string;
  localities: Array<{
    id: LocalityId;
    label: string;
  }>;
};

export const REGIONS: Region[] = [
  {
    id: 'us',
    name: 'United States',
    standard: 'FAA Standards',
    flag: IMAGES.flags.usa,
    localities: [
      { id: 'us-fl-south', label: 'Florida (South)' },
      { id: 'us-fl-central', label: 'Florida (Central)' },
      { id: 'us-ca-socal', label: 'California (SoCal)' },
      { id: 'us-tx-north', label: 'Texas (North)' },
    ],
  },
  {
    id: 'eu',
    name: 'Europe',
    standard: 'EASA Standards',
    flag: IMAGES.flags.eu,
    localities: [{ id: 'eu-all', label: 'Europe (All)' }],
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    standard: 'CAA Standards',
    flag: IMAGES.flags.uk,
    localities: [{ id: 'uk-all', label: 'United Kingdom (All)' }],
  },
  {
    id: 'ca',
    name: 'Canada',
    standard: 'Transport Canada',
    flag: IMAGES.flags.ca,
    localities: [{ id: 'ca-all', label: 'Canada (All)' }],
  },
];

export const DEFAULT_REGION_ID: RegionId = 'us';
export const DEFAULT_LOCALITY_ID: LocalityId = 'us-fl-south';

export const DEMO_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    topic: 'Regulations',
    prompt: 'What is the minimum VFR visibility in Class G airspace below 10,000 ft MSL (day)?',
    choices: ['1 statute mile', '3 statute miles', '5 statute miles', '10 statute miles'],
    correctIndex: 0,
    explanation: 'For Class G below 10,000 ft MSL during the day, minimum visibility is 1 SM (with cloud clearances varying by altitude).',
  },
  {
    id: 'q2',
    topic: 'Aerodynamics',
    prompt: 'An increase in angle of attack beyond the critical angle will result in:',
    choices: ['Increased lift and decreased drag', 'A stall (loss of lift)', 'Increased thrust', 'Higher air density'],
    correctIndex: 1,
    explanation: 'Beyond the critical AoA, airflow separates significantly and lift decreases—this is a stall.',
  },
  {
    id: 'q3',
    topic: 'Weather',
    prompt: 'Which cloud type is most commonly associated with thunderstorms?',
    choices: ['Stratus', 'Cumulonimbus', 'Cirrus', 'Altostratus'],
    correctIndex: 1,
    explanation: 'Cumulonimbus clouds are convective and associated with thunderstorms, turbulence, hail, and lightning.',
    figure: { src: IMAGES.thumbnails.quiz_fig, label: 'Figure 3.1' },
  },
  {
    id: 'q4',
    topic: 'Navigation',
    prompt: 'The magnetic heading is corrected for which errors to obtain true heading?',
    choices: ['Deviation only', 'Variation only', 'Variation and deviation', 'Altitude and temperature'],
    correctIndex: 2,
    explanation: 'True vs magnetic differs by variation; compass vs magnetic differs by deviation. Both corrections are used across the chain.',
  },
  {
    id: 'q5',
    topic: 'Airspace',
    prompt: 'In Class C airspace, what is required to operate VFR?',
    choices: ['Two-way radio only', 'Transponder only', 'Two-way radio and transponder', 'IFR clearance'],
    correctIndex: 2,
    explanation: 'Class C requires two-way radio communications with ATC and an operating transponder with Mode C (or ADS-B Out where required).',
  },
  {
    id: 'q6',
    topic: 'Systems',
    prompt: 'What is the primary purpose of a carburetor heat system?',
    choices: ['Increase engine power', 'Prevent carburetor icing', 'Reduce fuel flow', 'Lower cylinder head temperature'],
    correctIndex: 1,
    explanation: 'Carb heat routes warmer air to prevent or remove carb ice; it often causes a temporary RPM drop due to less dense air.',
  },
  {
    id: 'q7',
    topic: 'Performance',
    prompt: 'As density altitude increases, aircraft takeoff performance generally:',
    choices: ['Improves', 'Degrades', 'Stays the same', 'Depends only on runway slope'],
    correctIndex: 1,
    explanation: 'Higher density altitude reduces engine power, prop/wing efficiency, and climb performance.',
  },
  {
    id: 'q8',
    topic: 'Flight Planning',
    prompt: 'The most effective first step when encountering deteriorating weather en route is to:',
    choices: ['Continue and hope it clears', 'Climb into the clouds', 'Turn around or divert early', 'Descend to maintain VFR'],
    correctIndex: 2,
    explanation: 'A conservative, early divert/turn-around decision prevents VFR into IMC scenarios.',
  },
  {
    id: 'q9',
    topic: 'Communications',
    prompt: 'If you are unsure of an ATC instruction, you should:',
    choices: ['Comply anyway', 'Say “standby” and ignore it', 'Ask ATC to repeat or clarify', 'Switch frequencies'],
    correctIndex: 2,
    explanation: 'Always request clarification or a repeat—safe comms beats guessing.',
  },
  {
    id: 'q10',
    topic: 'Safety',
    prompt: 'The acronym IMSAFE is used to evaluate:',
    choices: ['Aircraft equipment', 'Pilot fitness for flight', 'Weather hazards', 'Runway conditions'],
    correctIndex: 1,
    explanation: 'IMSAFE: Illness, Medication, Stress, Alcohol, Fatigue, Emotion/Eating (common variant). It’s a pilot self-assessment tool.',
  },
];


