
export enum InternshipLevel {
  LEVEL_1 = 'Level 1',
  LEVEL_2 = 'Level 2',
  LEVEL_3 = 'Level 3'
}

export interface Task {
  id: string;
  level: InternshipLevel;
  title: string;
  description: string;
  type: 'html-css' | 'javascript' | 'framework' | 'responsive' | 'image-manip' | 'landing-page';
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
