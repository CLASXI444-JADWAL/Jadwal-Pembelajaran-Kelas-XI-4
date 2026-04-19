export type SubjectType = 
  | 'math' 
  | 'science' 
  | 'language' 
  | 'history' 
  | 'art' 
  | 'sports' 
  | 'religion' 
  | 'computer'
  | 'break'
  | 'jam_walas';

export interface ScheduleItem {
  id: string;
  subject: string;
  subjectType: SubjectType;
  teacher?: string;
  room: string;
  startTime: string;
  endTime: string;
}

export interface DaySchedule {
  day: string;
  dayShort: string;
  items: ScheduleItem[];
}

export const scheduleData: DaySchedule[] = [
  {
    day: 'Senin',
    dayShort: '',
    items: [
      { id: '1', subject: 'Senam Bersama', subjectType: 'religion', room: 'Kelas XI-4', startTime: '06.30', endTime: '08.20' },
      { id: '2', subject: 'Bahasa Inggris', subjectType: 'language', room: 'Kelas XI-4', startTime: '08.30', endTime: '09.15' },
      { id: '3', subject: 'Bahasa Inggris', subjectType: 'language', room: 'Kelas XI-4', startTime: '09.15', endTime: '09.50' },
      { id: '4', subject: 'Istirahat 1', subjectType: 'break', room: 'bebas dimana aj yg penting ga kluar sekol', startTime: '09.50', endTime: '10.20' },
      { id: '5', subject: 'PAK', subjectType: 'religion', room: 'Kelas XI-4', startTime: '10.20', endTime: '11.05' },
      { id: '6', subject: 'PAK', subjectType: 'religion', room: 'Kelas XI-4', startTime: '11.05', endTime: '11.50' },
      { id: '7', subject: 'Seni', subjectType: 'art', room: 'u know la', startTime: '11.50', endTime: '12.35' },
      { id: '8', subject: 'Seni', subjectType: 'art', room: 'u know la', startTime: '12.35', endTime: '12.50' },
      { id: '9', subject: 'Istirahat 2', subjectType: 'break', room: 'bebas dimana aj yg penting ga kluar sekol', startTime: '12.50', endTime: '13.20' },
      { id: '10', subject: 'Bio / Kim / Eko 3&4 / Sej / Fis 2 / Fis 3', subjectType: 'science', room: 'u know la', startTime: '13.20', endTime: '14.05' },
      { id: '11', subject: 'Bio / Kim / Eko 3&4 / Sej / Fis 2 / Fis 3', subjectType: 'science', room: 'u know la', startTime: '14.05', endTime: '14.50' },
      { id: '12', subject: 'Bio / Kim / Eko 3&4 / Sej / Fis 2 / Fis 3', subjectType: 'science', room: 'bebas', startTime: '14.50', endTime: '15.20' },
      
    ],
  },
];

export const subjectColors: Record<SubjectType, { bg: string; text: string; border: string }> = {
  math: { bg: 'bg-subject-math/20', text: 'text-subject-math', border: 'border-subject-math/40' },
  science: { bg: 'bg-subject-science/20', text: 'text-subject-science', border: 'border-subject-science/40' },
  language: { bg: 'bg-subject-language/20', text: 'text-subject-language', border: 'border-subject-language/40' },
  history: { bg: 'bg-subject-history/20', text: 'text-subject-history', border: 'border-subject-history/40' },
  art: { bg: 'bg-subject-art/20', text: 'text-subject-art', border: 'border-subject-art/40' },
  sports: { bg: 'bg-subject-sports/20', text: 'text-subject-sports', border: 'border-subject-sports/40' },
  religion: { bg: 'bg-subject-religion/20', text: 'text-subject-religion', border: 'border-subject-religion/40' },
  computer: { bg: 'bg-subject-computer/20', text: 'text-subject-computer', border: 'border-subject-computer/40' },
  break: { bg: 'bg-subject-break/20', text: 'text-subject-break', border: 'border-subject-break/40' },
  jam_walas: { bg: 'bg-subject-homeroom/20', text: 'text-subject-homeroom', border: 'border-subject-homeroom/40' },
};

export const subjectIcons: Record<SubjectType, string> = {
  math: '📐',
  science: '🔬',
  language: '📚',
  history: '🌍',
  art: '🎨',
  sports: '⚽',
  religion: '✝️',
  computer: '💻',
  break: '☕',
  jam_walas: '🕐',
};