type GradeComponent = 'Tugas' | 'UTS' | 'UAS' | 'Proyek' | 'Kuis';
type SemesterType = 'Ganjil' | 'Genap';

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

interface DataKelas {
  id: number;
  kdmk: string;
  nmMatkul: string;
  nmJurusan: string;
  semester: SemesterType;
  ruangKls: string,
  thnAjar: number;
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

