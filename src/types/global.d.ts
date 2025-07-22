type GradeComponent = 'Tugas' | 'UTS' | 'UAS' | 'Proyek' | 'Kuis';
type SemesterType = 'Ganjil' | 'Genap';

interface InputBobotNilaiPerComponent {
  component: GradeComponent;
  vlBobotNilai?: number;
}

interface Chapter {
  babId: number;
  title: string;
  desc: string;
  bobotNilai: number;
  componentScore: InputBobotNilaiPerComponent[]
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
  jmlhMhs: number;
  listBab?: Chapter[];
}

interface ScheduleClass {
  id: string;
  nmKelas: string;
  jumlahSKS: number;
  jumlahMhs: number;
  timeFrom: string;
  timeTo: string
}

