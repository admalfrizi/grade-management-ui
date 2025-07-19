"use client"
import Copyright from "@mui/icons-material/Copyright";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ClassCard from "@/components/MainComponents/ListData/ClassCard";
import TeachCard from "@/components/MainComponents/ListData/TeachCard";
import StatCard, { InfoCardProps } from "@/components/MainComponents/Charts/StatCard";
import { classes, scheduleClass } from "@/data/classData";
import Link from "next/link";
import { ROUTES } from "@/lib/route";
import { useClassStore } from "@/store/useClassStore";

export const data: InfoCardProps[] = [
  {
    nmInfo: 'Total Kelas',
    vlInfo: '3',
  },
  {
    nmInfo: 'Jumlah Total Mahasiwa',
    vlInfo: '120'
  },
  {
    nmInfo: 'Jumlah Tugas',
    vlInfo: '3'
  },
  {
    nmInfo: 'Tugas Perlu Di Nilai',
    vlInfo: '6'
  },
];


export default function Home() {
  const { classData } = useClassStore();

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
          {classData.map((data, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}
              >
              <Link href={ROUTES.CLASS_DETAIL.route(data.id.toString())} style={{textDecoration: "none"}}>
                <ClassCard nmKelas={data.nmMatkul} jmlhMhs={data.jmlhMhs} nmJurusan={data.nmJurusan} isConfigurable={false} />
              </Link>
            </Grid>
          ))}
        </Grid>
        
        <Typography component="h2" variant="h6" sx={{ my: 2 }}>
          Jadwal Mengajar Anda untuk Hari Ini
        </Typography>
        {
          scheduleClass.map((data, idx) => (
            <TeachCard {...data} />
          ))
        }

      </Box>
    </div>
  );
}
