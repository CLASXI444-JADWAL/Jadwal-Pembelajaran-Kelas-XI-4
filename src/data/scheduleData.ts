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
      { id: '2', subject: 'Assesment Matematika Lanjut', subjectType: 'science', room: 'Kelas Assesment Masing Masing', startTime: '06.50', endTime: '07.35' },
      { id: '3', subject: 'PAK', subjectType: 'religion', room: 'Kelas XI-4', startTime: '07.35', endTime: '08.00' },
      { id: '4', subject: 'Lab Bahasa Inggris', subjectType: 'language', room: 'Lab B.ing', startTime: '08.00', endTime: '08.25' },
      { id: '5', subject: 'PAK', subjectType: 'religion', room: 'Kelas XI-4', startTime: '08.25', endTime: '08.50' },
      { id: '6', subject: 'PAK', subjectType: 'religion', room: 'Kelas XI-4', startTime: '08.50', endTime: '09.15' },
      { id: '7', subject: 'Matematika', subjectType: 'math', room: 'Kelas XI-4', startTime: '09.15', endTime: '09.40' },
      { id: '8', subject: 'Istirahat', subjectType: 'break', room: 'Diluar Kelas', startTime: '09.40', endTime: '10.10' },
      { id: '9', subject: 'Matematika', subjectType: 'math', room: 'Kelas XI-4', startTime: '10.10', endTime: '10.35' },
      { id: '10', subject: 'Mat 3 / Fis 1 / Sosio 1 / Sosio 2 / Eko 1 dan 2 / Geo 1', subjectType: 'science', room: 'Ruang Kelas Mata Pelajaran Pilihan Masing Masing', startTime: '10.35', endTime: '11.00' },
      { id: '11', subject: 'Mat 3 / Fis 1 / Sosio 1 / Sosio 2 / Eko 1 dan 2 / Geo 1', subjectType: 'science', room: 'Ruang Kelas Mata Pelajaran Pilihan Masing Masing', startTime: '11.00', endTime: '11.30' },
      { id: '12', subject: 'Mat 3 / Fis 1 / Sosio 1 / Sosio 2 / Eko 1 dan 2 / Geo 1', subjectType: 'science', room: 'Ruang Kelas Mata Pelajaran Pilihan Masing Masing', startTime: '11.30', endTime: '12.00' },
      { id: '13', subject: 'Sejarah', subjectType: 'history', room: 'Kelas XI-4', startTime: '12.00', endTime: '12.30' },
      { id: '14', subject: 'Istirahat', subjectType: 'break', room: 'Diluar Kelas', startTime: '12.30', endTime: '13.00' },
      { id: '15', subject: 'PENGISIAN PDL', subjectType: 'jam_walas', room: 'Kelas XI-4', startTime: '13.00', endTime: '15.20' },
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