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
      { id: '1', subject: 'Renungan', subjectType: 'religion', room: 'kelas xi4', startTime: '06.30', endTime: '06.50' },
      { id: '2', subject: 'Jam Ke 0 : Literasi', subjectType: 'jam_walas', room: 'kelas xi4', startTime: '06.50', endTime: '07.35' },
      { id: '3', subject: 'PP', subjectType: 'history', room: 'kelas xi4', startTime: '07.35', endTime: '08.15' },
      { id: '4', subject: 'PP', subjectType: 'history', room: 'kelas xi4', startTime: '08.15', endTime: '08.55' },
      { id: '5', subject: 'Native', subjectType: 'language', room: 'kelas xi4', startTime: '08.55', endTime: '09.35' },
      { id: '6', subject: 'Istirahat 1', subjectType: 'break', room: 'dimana aja', startTime: '09.35', endTime: '10.05' },
      { id: '7', subject: 'PJOK', subjectType: 'sports', room: 'aula lagi kyknya janlup ambil nilai', startTime: '10.05', endTime: '10.45' },
      { id: '8', subject: 'PJOK', subjectType: 'sports', room: 'aula lagi kyknya janlup ambil nilai', startTime: '10.45', endTime: '11.25' },
      { id: '9', subject: 'PJOK', subjectType: 'sports', room: 'aula lagi kyknya janlup ambil nilai', startTime: '11.25', endTime: '12.05' },
      { id: '10', subject: 'Mandarin', subjectType: 'language', room: 'yall know the drill', startTime: '12.05', endTime: '12.45' },
      { id: '11', subject: 'Istirahat 2', subjectType: 'break', room: 'dimana aja', startTime: '12.45', endTime: '13.15' },
      { id: '12', subject: 'Matematika wajib', subjectType: 'math', room: 'kelas xi4', startTime: '13.15', endTime: '13.55' },
      { id: '13', subject: 'Bahasa Sunda', subjectType: 'language', room: 'kelas xi4', startTime: '13.55', endTime: '14.35' },
      { id: '14', subject: 'Bahasa Inggris', subjectType: 'language', room: 'kelas xi4', startTime: '14.35', endTime: '15.20' },
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