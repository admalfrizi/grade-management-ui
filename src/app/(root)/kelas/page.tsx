'use client'
import ClassCard from '@/components/MainComponents/ListData/ClassCard';
import { ROUTES } from '@/lib/route';
import { useClassStore } from '@/store/useClassStore';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react'

function Kelas() {
  const {classData, updateClassData} = useClassStore();

  console.log(classData)
  
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%'} }}>
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
          Berikut Kelas yang Anda Ampu
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ mb: (theme) => theme.spacing(2) }}
        >
          {classData.map((data, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
              <ClassCard id={data.id} nmKelas={data.nmMatkul} jmlhMhs={data.jmlhMhs} nmJurusan={data.nmJurusan} isConfigurable={true} />
            </Grid>
          ))}
        </Grid>
    </Box>
    
  )
}

export default Kelas