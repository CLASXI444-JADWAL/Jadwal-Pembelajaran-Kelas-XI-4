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
    day: 'Rabu',
    dayShort: '',
    items: [
      { id: '1', subject: 'Renungan Pagi', subjectType: 'religion', room: 'Kelas XI-4', startTime: '06.30', endTime: '06.50' },
      { id: '2', subject: 'Mat 1 / Mat 2 / Inf 1 / Inf 2 / Kim 1 / Sej 1', subjectType: 'language', room: 'Kelas XI-4', startTime: '06.50', endTime: '07.35' },
      { id: '3', subject: 'Mat 1 / Mat 2 / Inf 1 / Inf 2 / Kim 1 / Sej 1', subjectType: 'language', room: 'Kelas XI-4', startTime: '07.35', endTime: '08.20' },
      { id: '4', subject: 'Mat 1 / Mat 2 / Inf 1 / Inf 2 / Kim 1 / Sej 1', subjectType: 'math', room: 'Kelas XI-4', startTime: '08.20', endTime: '09.05' },
      { id: '5', subject: 'Istirahat 1', subjectType: 'language', room: 'Bebas dimana aj yg penting ga kluar sekol', startTime: '09.05', endTime: '09.35' },
      { id: '6', subject: 'Mat 3 / Fis 1 / Sos 1 / Sos 2 / Eko 1&2 / Geo 1', subjectType: 'religion', room: 'bebas', startTime: '09.35', endTime: '10.20' },
      { id: '7', subject: 'Mat 3 / Fis 1 / Sos 1 / Sos 2 / Eko 1&2 / Geo 1', subjectType: 'religion', room: 'bebas', startTime: '10.20', endTime: '11.05' },
      { id: '8', subject: 'Sos 3 / Sos 4 / Geo 2 / Inf 3 / Inf 4 / Bio 2', subjectType: 'science', room: 'bebas', startTime: '11.05', endTime: '11.50' },
      { id: '9', subject: 'Sos 3 / Sos 4 / Geo 2 / Inf 3 / Inf 4 / Bio 2', subjectType: 'science', room: 'bebas', startTime: '11.50', endTime: '12.35' },
      { id: '10', subject: 'Istirahat 2', subjectType: 'break', room: 'bebas dimana aja', startTime: '12.35', endTime: '13.05' },
      { id: '11', subject: 'Sejarah Wajib', subjectType: 'history', room: 'Kelas XI-4', startTime: '13.05', endTime: '13.50' },
      { id: '12', subject: 'PP', subjectType: 'history', room: 'Kelas XI-4', startTime: '13.50', endTime: '14.35' },
      { id: '13', subject: 'PP', subjectType: 'history', room: 'Kelas XI-4', startTime: '14.35', endTime: '15.20' },
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