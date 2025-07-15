"use client"
import Copyright from "@mui/icons-material/Copyright";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ClassCard from "@/components/MainComponents/ListData/ClassCard";
import TeachCard from "@/components/MainComponents/ListData/TeachCard";
import StatCard, { StatCardProps } from "@/components/MainComponents/Charts/StatCard";

const data: StatCardProps[] = [
  {
    title: 'Total Kelas',
    value: '14k',
    interval: 'Last 30 days',
    trend: 'up',
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
      360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
  },
  {
    title: 'Jumlah Total Mahasiwa',
    value: '325',
    interval: 'Last 30 days',
    trend: 'down',
    data: [
      1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820,
      780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
    ],
  },
  {
    title: 'Jumlah Tugas',
    value: '200k',
    interval: 'Last 30 days',
    trend: 'neutral',
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
      520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
];

const scheduleClass: ScheduleClass[] = [
  {
    id: 'cls-101',
    nmKelas: 'Kelas A - Algoritma',
    jumlahSKS: 3,
    jumlahMhs: 15,
    timeFrom: "10.00",
    timeTo: "12.00"
  },
  {
    id: 'cls-102',
    nmKelas: 'Kelas B - Basis Data SQL',
    jumlahSKS: 3,
    jumlahMhs: 20,
    timeFrom: "14.10",
    timeTo: "16.00"
  }
]

const classes: ClassRoom[] = [
  {
    id: 'cls-101',
    name: 'Kelas A - Algoritma',
    students: Array.from({ length: 18 }, (_, i) => ({
      id: `A-S${i + 1}`,
      name: `Student A${i + 1}`,
      subjects: [
        {
          name: 'Algoritma dan Pemrograman',
          chapters: [
            { title: 'Pendahuluan', contribution: 10 },
            { title: 'Struktur Data Dasar', contribution: 20 },
            { title: 'Pemrograman Modular', contribution: 20 },
            { title: 'Rekursi', contribution: 25 },
            { title: 'Algoritma Sorting', contribution: 25 },
          ],
          grades: [
            { component: 'Tugas', score: Math.random() * 100 },
            { component: 'UTS', score: Math.random() * 100 },
            { component: 'UAS', score: Math.random() * 100 },
            { component: 'Proyek', score: Math.random() * 100 },
            { component: 'Kuis', score: Math.random() * 100 },
          ],
        },
      ],
    })),
  },
  {
    id: 'cls-102',
    name: 'Kelas B - Basis Data',
    students: Array.from({ length: 20 }, (_, i) => ({
      id: `B-S${i + 1}`,
      name: `Student B${i + 1}`,
      subjects: [
        {
          name: 'Basis Data',
          chapters: [
            { title: 'Konsep Dasar DBMS', contribution: 15 },
            { title: 'ERD & Relasi', contribution: 20 },
            { title: 'Normalisasi', contribution: 20 },
            { title: 'SQL Query', contribution: 25 },
            { title: 'Index dan View', contribution: 20 },
          ],
          grades: [
            { component: 'Tugas', score: Math.random() * 100 },
            { component: 'UTS', score: Math.random() * 100 },
            { component: 'UAS', score: Math.random() * 100 },
            { component: 'Proyek', score: Math.random() * 100 },
            { component: 'Kuis', score: Math.random() * 100 },
          ],
        },
      ],
    })),
  },
  {
    id: 'cls-103',
    name: 'Kelas C - Jaringan Komputer',
    students: Array.from({ length: 16 }, (_, i) => ({
      id: `C-S${i + 1}`,
      name: `Student C${i + 1}`,
      subjects: [
        {
          name: 'Jaringan Komputer',
          chapters: [
            { title: 'Model OSI', contribution: 20 },
            { title: 'IP Addressing', contribution: 20 },
            { title: 'Routing & Switching', contribution: 20 },
            { title: 'Keamanan Jaringan', contribution: 20 },
            { title: 'Praktik Jaringan', contribution: 20 },
          ],
          grades: [
            { component: 'Tugas', score: Math.random() * 100 },
            { component: 'UTS', score: Math.random() * 100 },
            { component: 'UAS', score: Math.random() * 100 },
            { component: 'Proyek', score: Math.random() * 100 },
            { component: 'Kuis', score: Math.random() * 100 },
          ],
        },
      ],
    })),
  },
];


export default function Home() {
  return (
    <div>
      <Box sx={{ width: '100%', maxWidth: { sm: '100%'} }}>
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
          Informasi Anda
        </Typography>
        <Grid
          container
          spacing={2}
          columns={12}
          sx={{ mb: (theme) => theme.spacing(2) }}
        >
          {data.map((card, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
              <StatCard {...card} />
            </Grid>
          ))}
          
        </Grid>
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
          Daftar Kelas yang Anda Ampu
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ mb: (theme) => theme.spacing(2) }}
        >
          {classes.map((data, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
              <ClassCard nmKelas={data.name} jmlhMhs={data.students.length} nmJurusan={data.id} />
            </Grid>
          ))}
        </Grid>
        
        <Typography component="h2" variant="h6" sx={{ my: 2 }}>
          Jadwal Mengajar Anda untuk Hari Ini
        </Typography>
        {
          scheduleClass.map((data, idx) => (
            <TeachCard {...data} key={idx}/>
          ))
        }

      </Box>
    </div>
  );
}
