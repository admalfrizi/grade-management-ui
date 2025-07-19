import { Avatar, Button, Chip, Divider, IconButton, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography'
import { ParamValue } from 'next/dist/server/request/params';
import React from 'react'

interface Props {
    id: ParamValue,
    dataKls: DataKelas | undefined,
    page: number,
    rowsPerPage: number,
    handleChangePage: (event: string, newPage: number) => void
    handleChangeRowsPerPage: (event: {
        target: {
            value: string;
        };
    }) => void
}
function MateriBab({id,dataKls,page,rowsPerPage,handleChangePage,handleChangeRowsPerPage}: Props) {
    console.log(dataKls?.listBab)
  return (
    <Box className="space-y-5">
      <Paper elevation={0} sx={{mt: 3, p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { md: 'center' }, mb: 2, gap: 2 }}>
            <Typography variant="h6"component="h1">Materi Bab</Typography>
            <Button variant="contained" sx={{ textTransform: "none", borderRadius: 2 }}>
                Tambahkan Bab Baru
            </Button>
           
        </Box>
        <TableContainer>
            <Table>
                <TableHead sx={{ bgcolor: 'grey.50' }}>
                    <TableRow>
                        {['Nama Bab', 'Deskripsi'].map((headCell) => (
                            <TableCell key={headCell} sx={{ fontWeight: 'bold', color: 'text.secondary' }}>{headCell}</TableCell>
                        ))}
                        <TableCell align="right" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataKls?.listBab?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((bab) => (
                    <TableRow key={bab.babId} hover>
                        <TableCell > 
                            <Typography variant="body2" fontWeight="600">
                                Bab {bab.babId} - {bab.title}
                            </Typography>
                        </TableCell>
                        <TableCell>{bab.desc}</TableCell>
                        <TableCell align="right">
                            <IconButton size="small"></IconButton>
                        </TableCell>
                    </TableRow>    
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="subtitle2" color="gray">
            Total Jumlah : {dataKls?.listBab?.length}
        </Typography>
      </Paper>
    </Box>
  )
}

export default MateriBab;