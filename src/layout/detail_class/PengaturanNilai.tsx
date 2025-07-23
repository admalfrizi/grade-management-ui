import { tipeBobotNilai } from '@/data/classData';
import { useClassStore } from '@/store/useClassStore';
import { Button, Card, Divider, Paper, Stack, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ParamValue } from 'next/dist/server/request/params';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react'

interface Props {
  id: ParamValue,
  dataKls: DataKelas | undefined
}

function PengaturanNilai({id,dataKls}: Props) {
  const babComponents = useMemo(() => {
    return (
      dataKls?.listBab?.map((data: Chapter) => ({
        ...data,
      })) ?? []
    );
  }, [dataKls]);
  const components = useMemo(() => {
    return (
      dataKls?.component?.map((data: InputBobotNilaiPerComponent) => ({
        ...data,
      })) ?? []
    );
  }, [dataKls?.component]);

  const [listBab, setListBab] = useState(babComponents);
  const [component, setComponents] = useState(components)
  const { updateClassData } = useClassStore()
  const router = useRouter();

  //console.log(listBab)

  const handleWeightChange = (index: number, bobot: number) => {
    const newData = [...listBab];
    newData[index].bobotNilai = bobot;
    setListBab(newData);
  };

  const handleContributionChange = (idx: number, value: number) => {
    const newData = [...component];
    newData[idx].vlBobotNilai = value;
    setComponents(newData);
  };

  const getTotalBobot = () => listBab.reduce((acc, data) => acc + data.bobotNilai!!, 0);
  //const getTotalBobotKomponen = (compIdx: number) => component[compIdx].vlBobotNilai?.reduce((acc, val) => acc + val.vlBobotNilai!!, 0);

  // const validateCheck = () => {
  //   const totalBobotValidate = getTotalBobot() == 100
  //   const checkValid = listBab.every((data) => {
  //     if(data.bobotNilai === 0) return true

  //     return getTotalBobotKomponen(listBab.indexOf(data)) === 100
  //   })

  //   return totalBobotValidate && checkValid
  // }

  const storeConfig = () => {
    if(!dataKls) return

    updateClassData(dataKls.id, {
        listBab: listBab,
    })

    router.push("/kelas")
  }

  useEffect(() => {
    if(dataKls && dataKls.listBab?.length!! > 0){
      setListBab(babComponents)
      setComponents(components)
    } 
  }, [dataKls,babComponents, components])

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
      <Paper 
        elevation={0} sx={{mt: 3, p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}
      >
        <Typography variant="h6" gutterBottom>
          Konfigurasi Per Komponen
        </Typography>
        <Divider />
        <Stack sx={{gap: 3, mb: 3, flex: "display", flexDirection: {xs : "column", md: "row"}}}>
        {
          component.map((vl, idx) => (
            <Box key={idx} sx={{ p: 2, mt: 3, border: "1px solid #eee", borderRadius: 2, backgroundColor: "#fafafa" }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {vl.component}
              </Typography>
              <Stack direction="row" sx={{justifyContent: "space-between", gap: 2, alignItems: 'center'}}>
                <TextField
                  size="small"
                  type="number"
                  sx={{
                    bgcolor: "white"
                  }}
                  fullWidth
                  value={vl.vlBobotNilai}
                  onChange={(e) => {
                    const newVal: string = e.target.value;
                    handleContributionChange(idx, newVal === "" ? 0 : parseInt(newVal));
                  }}
                  //error={getContribTotal(i) !== 100}
                  //helperText={val < 0 || val > 100 ? "Nilai harus antara 0–100" : ""}
                  //disabled={comp.weight === 0}
                />
                <Typography>
                  %
                </Typography>
              </Stack>
              
            </Box>
          ))
        }
        </Stack>
        <Box sx={{ p: 2, mt: { xs: 0, md: 3}, color: 'white', border: "1px solid #eee", borderRadius: 2, backgroundColor: "#1e40ae" }}>
          <Stack direction="row" sx={{justifyContent: "space-between", alignItems: 'center'}}>
            <Typography variant="body2">
              Total Bobot Nilai Semua Komponen  
            </Typography>
            <Typography variant="subtitle2">
              {/* {getTotalBobotKomponen(idx)} %   */}
            </Typography>
          </Stack>
        </Box>
        
      </Paper>
      <Paper 
        elevation={0} sx={{mt: 3, p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}
      >
        <Typography variant="h6" gutterBottom>
          Daftar Bab
        </Typography>
        {
          listBab?.map((data, idx) => (
            <Box key={idx}>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Bab {data.babId} - {data.title}
              </Typography>
              <Stack direction="row" sx={{mt: 2, mb: 1, alignItems: 'center'}}>
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
                {/* {
                  data.componentScore.map((valComp, compIdx) => 
                    (<Box key={compIdx} sx={{ p: 2, mt: 3, border: "1px solid #eee", borderRadius: 2, backgroundColor: "#fafafa" }}>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        {valComp.component}
                      </Typography>
                      <Stack direction="row" sx={{justifyContent: "space-between",gap: 2, alignItems: 'center'}}>
                        <TextField
                          size="small"
                          type="number"
                          sx={{
                            bgcolor: "white"
                          }}
                          fullWidth
                          value={valComp.vlBobotNilai}
                          onChange={(e) => {
                            const newVal: string = e.target.value;
                            handleContributionChange(compIdx, idx, newVal === "" ? 0 : parseInt(newVal));
                          }}
                          //error={getContribTotal(i) !== 100}
                          //helperText={val < 0 || val > 100 ? "Nilai harus antara 0–100" : ""}
                          //disabled={comp.weight === 0}
                        />
                        <Typography>
                          %
                        </Typography>
                      </Stack>
                      
                    </Box>)
                  )
                } */}
                
              </Stack>
              
            </Box>
          ))
        }
        <Divider sx={{ mb: 2 }} />
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'}}  >
          <Typography>Total Seluruh Bobot Nilai per Bab : {getTotalBobot()}%</Typography>
          <Button onClick={storeConfig} variant="contained" sx={{ textTransform: "none", borderRadius: 2 }}>
            Simpan Rumus Nilai
          </Button>
        </Box>
      </Paper>
      
    </Box>
  )
}

export default PengaturanNilai

