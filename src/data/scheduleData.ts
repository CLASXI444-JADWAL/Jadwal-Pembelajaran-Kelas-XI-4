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
    day: 'Kamis',
    dayShort: '',
    items: [
      { id: '1', subject: 'Renungan', subjectType: 'religion', room: 'Kelas XI4', startTime: '06.30', endTime: '06.50' },
      { id: '2', subject: 'Bahasa Indonesia', subjectType: 'language', room: 'Kelas XI4', startTime: '06.50', endTime: '07.20' },
      { id: '3', subject: 'Bahasa Indonesia', subjectType: 'language', room: 'Kelas XI4', startTime: '07.20', endTime: '07.50' },
      { id: '4', subject: 'Mat Wajib', subjectType: 'math', room: 'Kelas XI4', startTime: '07.50', endTime: '08.20' },
      { id: '5', subject: 'Lab Inggris', subjectType: 'language', room: 'Kelas XI4', startTime: '08.20', endTime: '08.50' },
      { id: '6', subject: 'Lab Inggris', subjectType: 'language', room: 'Kelas XI4', startTime: '08.50', endTime: '09.20' },
      { id: '7', subject: 'Isti 1', subjectType: 'break', room: 'Kelas Masing2', startTime: '09.20', endTime: '09.50' },
      { id: '8', subject: 'Mat Wajib', subjectType: 'math', room: 'Kelas Masing2', startTime: '09.50', endTime: '10.25' },
      { id: '9', subject: 'mapil 1', subjectType: 'science', room: 'Kelas Masing2', startTime: '10.25', endTime: '10.55' },
      { id: '10', subject: 'mapil 1', subjectType: 'science', room: 'Kelas Masing2', startTime: '10.55', endTime: '11.25' },
      { id: '11', subject: 'mapil 1', subjectType: 'science', room: 'Bebas', startTime: '11.25', endTime: '11.55' },
      { id: '12', subject: 'Sejarah Wajib', subjectType: 'history', room: 'Kelas XI4', startTime: '11.55', endTime: '12.30' },
      { id: '13', subject: 'Isti 2', subjectType: 'break', room: 'Kelas XI4', startTime: '12.30', endTime: '13.00' },
      
    ]
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