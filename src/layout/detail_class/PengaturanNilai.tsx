import { useClassStore } from '@/store/useClassStore';
import { Button, Card, Divider, Stack, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ParamValue } from 'next/dist/server/request/params';
import { useParams } from 'next/navigation';
import React, { useMemo, useState } from 'react'

interface Props {
  id: ParamValue,
  dataKls: DataKelas | undefined
}

const tipeBobotNilai : InputBobotNilaiPerComponent[] = [
  {
    component: "Tugas",
    vlBobotNilai: 0
  },
  {
    component: "UTS",
    vlBobotNilai: 0
  },
  {
    component: "UAS",
    vlBobotNilai: 0
  },
  {
    component: "Proyek",
    vlBobotNilai: 0
  },
  {
    component: "Kuis",
    vlBobotNilai: 0
  }
]

function PengaturanNilai({id,dataKls}: Props) {
  const fixedComponents = useMemo(() => {
    return (
      dataKls?.listBab?.map((data) => ({
        ...data,
        componentScore: Array.from({ length: dataKls.jmlhBab }, (_, i) => data.componentScore[i] ?? 0)
      })) ?? []
    );
  }, [dataKls, dataKls?.jmlhBab]);
  const [components, setComponents] = useState(fixedComponents);

  //console.log("dataKls: ", components)

  const handleWeightChange = (index: number, bobot: number) => {
    const newData = [...components];
    newData[index].bobotNilai = bobot;
    setComponents(newData);
  };

  return (
    <Box className="space-y-5">
      <Box className="flex justify-between items-center mb-5">
        <div>
          <Typography variant="h6"component="h1">Pengaturan Nilai</Typography>
          <Typography variant="subtitle2" color="gray">
            Semester {dataKls?.semester} - {dataKls?.thnAjar}
          </Typography>
        </div>
        {/* <BackButton /> */}
      </Box>
      <Card 
       elevation={3}
        sx={{
          p: 3,
          mt: 3,
          borderRadius: 3,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Daftar Bab
        </Typography>
        {
          dataKls?.listBab?.map((data, idx) => (
            <Box key={idx} sx={{ mb: 4 }}>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Bab {data.babId} - {data.title}
              </Typography>
              <Stack direction="row" sx={{mt: 2, mb: 1}}>
                <Typography variant="body2" sx={{ minWidth: 130, my: 1, mr: 2 }}>
                  Bobot Nilai per Bab (%)
                </Typography>
                <TextField
                  size="small"
                  type="number"
                  value={data.bobotNilai}
                  onChange={(e) => {
                    const val: string = e.target.value;
                    handleWeightChange(idx, val === "" ? 0 : parseInt(val));
                  }}
                  sx={{ width: 100 }}
                  //error={getTotalWeight() !== 100}
                />
              </Stack>
              <Stack sx={{gap: 3, mb: 3, flex: "display", flexDirection: {xs : "column", md: "row"}}}>
                {
                  tipeBobotNilai.map((data, idx) => 
                    (<Box key={idx} sx={{ p: 2, mt: 3, border: "1px solid #eee", borderRadius: 2, backgroundColor: "#fafafa" }}>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        {data.component}
                      </Typography>
                      <TextField
                        size="small"
                        type="number"
                        fullWidth
                        //value={val}
                        // onChange={(e) => {
                        //   const newVal: string = e.target.value;
                        //   handleContributionChange(i, babIdx, newVal === "" ? 0 : parseInt(newVal));
                        // }}
                        //error={getContribTotal(i) !== 100}
                        //helperText={val < 0 || val > 100 ? "Nilai harus antara 0–100" : ""}
                        //disabled={comp.weight === 0}
                      />
                    </Box>)
                  )
                }
                
              </Stack>
              <Box sx={{ p: 2, mt: { xs: 0, md: 3}, color: 'white', border: "1px solid #eee", borderRadius: 2, backgroundColor: "#1e40ae" }}>
                <Stack direction="row" sx={{justifyContent: "space-between", alignItems: 'center'}}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Total Bobot Nilai Semua Komponen  
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    80 %  
                  </Typography>
                </Stack>
              </Box>
            </Box>
          ))
        }
        <Divider sx={{ mb: 2 }} />
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'}}  >
          <Typography>Total Seluruh Bobot Nilai per Bab : 0%</Typography>
          <Button variant="contained" sx={{ textTransform: "none", borderRadius: 2 }}>
            Simpan Konfigurasi
          </Button>
        </Box>
      </Card>
      
    </Box>
  )
}

export default PengaturanNilai