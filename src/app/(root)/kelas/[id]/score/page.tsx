'use client'
import { useClassStore } from '@/store/useClassStore';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useParams } from 'next/navigation';
import React from 'react'

function ClassScore() {
    const { id } = useParams();
    const {classData, updateClassData} = useClassStore();
    const dtlClass = classData.find((data) => data.id === Number(id))
    
  return (
    <Box className="space-y-5">
      <Box className="flex justify-between items-center mb-5">
        <div>
          <Typography variant="h4" >Konfigurasi Nilai</Typography>
          <Typography variant="subtitle1" color="gray">
            {dtlClass?.nmMatkul} – Semester {dtlClass?.semester}
          </Typography>
        </div>
        {/* <BackButton /> */}
      </Box>
    </Box>
  )
}

export default ClassScore