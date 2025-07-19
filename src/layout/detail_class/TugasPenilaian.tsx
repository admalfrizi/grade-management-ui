import { useClassStore } from '@/store/useClassStore';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useParams } from 'next/navigation';
import React from 'react'

function TugasPenilaian() {
  const { id } = useParams();
    const {classData, updateClassData} = useClassStore();
    const dtlClass = classData.find((data) => data.id === Number(id))
    
  return (
    <Box className="space-y-5">
      <Box className="flex justify-between items-center mb-5">
        <div>
          <Typography variant="h6"component="h1">Pengaturan Nilai</Typography>
          <Typography variant="subtitle2" color="gray">
            Semester {dtlClass?.semester} - {dtlClass?.thnAjar}
          </Typography>
        </div>
        {/* <BackButton /> */}
      </Box>
    </Box>
  )
}

export default TugasPenilaian