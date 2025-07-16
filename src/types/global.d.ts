type GradeComponent = 'Tugas' | 'UTS' | 'UAS' | 'Proyek' | 'Kuis';

interface Grade {
  component: GradeComponent;
  score: number;
}

interface Chapter {
  title: string;
  contribution: number;
}

interface Subject {
  name: string;
  chapters: Chapter[];
  grades: Grade[];
}

interface Student {
  id: string;
  name: string;
  nim: string;
  subjects: Subject[];
}

interface ClassRoom {
  id: number;
  nmMatkul: string;
  nmJurusan: string;
  semester: number;
  jmlhBab: number;
  jmlhMhs: number
}

interface ScheduleClass {
  id: string;
  nmKelas: string;
  jumlahSKS: number;
  jumlahMhs: number;
  timeFrom: string;
  timeTo: string
}

