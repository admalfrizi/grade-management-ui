type GradeComponent = 'Tugas' | 'UTS' | 'UAS' | 'Proyek' | 'Kuis';

interface Grade {
  component: GradeComponent;
  score: number;
}

interface Chapter {
  title: string;
  contribution: number; // % kontribusi terhadap nilai akhir
}

interface Subject {
  name: string;
  chapters: Chapter[];
  grades: Grade[];
}

interface Student {
  id: string;
  name: string;
  subjects: Subject[];
}

interface ClassRoom {
  id: string;
  name: string;
  students: Student[];
}

interface ScheduleClass {
  id: string;
  nmKelas: string;
  jumlahSKS: number;
  jumlahMhs: number;
  timeFrom: string;
  timeTo: string
}

