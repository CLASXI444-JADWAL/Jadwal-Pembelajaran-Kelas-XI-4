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
      { id: '1', subject: 'Upacara Pelantikan Dewan Ambalan', subjectType: 'history', room: 'Lapangan SMA & SMP', startTime: '06.30', endTime: '08.15' },
      { id: '2', subject: 'Bahasa Inggris', subjectType: 'language', room: 'Kelas XI4', startTime: '08.15', endTime: '08.55' },
      { id: '3', subject: 'Bahasa Inggris', subjectType: 'language', room: 'Kelas XI4', startTime: '08.55', endTime: '09.35' },
      { id: '4', subject: 'Isti 1', subjectType: 'break', room: 'Bebas', startTime: '09.35', endTime: '10.05' },
      { id: '5', subject: 'PAK', subjectType: 'religion', room: 'Kelas XI4', startTime: '10.05', endTime: '10.45' },
      { id: '6', subject: 'PAK', subjectType: 'religion', room: 'Kelas XI4', startTime: '10.45', endTime: '11.25' },
      { id: '7', subject: 'SENI', subjectType: 'art', room: 'Kelas Masing2', startTime: '11.25', endTime: '12.05' },
      { id: '8', subject: 'SENI', subjectType: 'art', room: 'Kelas Masing2', startTime: '12.05', endTime: '12.45' },
      { id: '9', subject: 'Isti 2', subjectType: 'break', room: 'Bebas', startTime: '12.45', endTime: '13.15' },
      { id: '10', subject: 'mapil', subjectType: 'science', room: 'Kelas Masing2', startTime: '13.15', endTime: '13.55' },
      { id: '11', subject: 'mapil', subjectType: 'science', room: 'Kelas Masing2', startTime: '13.55', endTime: '14.35' },
      { id: '12', subject: 'mapil', subjectType: 'science', room: 'Kelas Masing2', startTime: '14.35', endTime: '15.20' },
      { id: '13', subject: 'Remedial PH Bahasa Inggris', subjectType: 'language', room: 'Akan diinfokan', startTime: '15.20', endTime: '16.05' },
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