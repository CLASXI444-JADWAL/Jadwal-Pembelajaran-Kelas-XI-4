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
    day: 'Selasa',
    dayShort: '',
    items: [
      { id: '1', subject: 'Upacara Pagi', subjectType: 'history', room: 'Kelas XI-4', startTime: '06.30', endTime: '08.00' },
      { id: '2', subject: 'PH Bhs. Inggris', subjectType: 'jam_walas', room: 'Kelas XI-4', startTime: '08.15', endTime: '09.00' },
      { id: '3', subject: 'Istirahat 1', subjectType: 'break', room: 'bebas dimana aj yg penting ga kluar sekol', startTime: '09.00', endTime: '09.30' },
      { id: '4', subject: 'Bahasa Indonesia', subjectType: 'language', room: 'Kelas XI-4', startTime: '09.30', endTime: '10.00' },
      { id: '5', subject: 'Bahasa Indonesia', subjectType: 'language', room: 'Kelas XI-4', startTime: '10.00', endTime: '10.30' },
      { id: '6', subject: 'Bahasa Mandarin', subjectType: 'language', room: 'Kelas XI-4', startTime: '10.30', endTime: '11.00' },
      { id: '7', subject: 'Bahasa Inggris', subjectType: 'language', room: 'Kelas XI-4', startTime: '11.00', endTime: '11.30' },
      { id: '8', subject: 'Istirahat 2', subjectType: 'break', room: 'bebas dimana aj yg penting ga kluar sekol', startTime: '12.00', endTime: '12.30' },
      { id: '9', subject: 'Classmeeting Adhigana', subjectType: 'jam_walas', room: 'bebas dimana aj yg penting ga kluar sekol', startTime: '12.00', endTime: '15.20' },
      
      
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