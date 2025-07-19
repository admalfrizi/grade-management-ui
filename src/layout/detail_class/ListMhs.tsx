import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import Paper from '@mui/material/Paper'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import GridViewIcon from '@mui/icons-material/GridView';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TablePagination from '@mui/material/TablePagination'

const students = [
  { name: 'Andini Putri', nim: '11220001', attendance: '100% (8/8)', status: 'Aktif', avatar: { text: 'A', color: '#f87171' } },
  { name: 'Doni Setiawan', nim: '11220002', attendance: '88% (7/8)', status: 'Aktif', avatar: { text: 'D', color: '#60a5fa' } },
  { name: 'Rina Hartono', nim: '11220003', attendance: '100% (8/8)', status: 'Aktif', avatar: { text: 'R', color: '#facc15' } },
  { name: 'Sari Lestari', nim: '11220004', attendance: '75% (6/8)', status: 'Perlu Perhatian', avatar: { text: 'S', color: '#4ade80' } },
];

interface ListMhsProps {
    page: number
    rowsPerPage: number,
    handleChangePage: (event: string, newPage: number) => void
    handleChangeRowsPerPage: (event: {
        target: {
            value: string;
        };
    }) => void
}


function ListMhs({page, rowsPerPage, handleChangePage,handleChangeRowsPerPage } : ListMhsProps) {
  return (
    <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { md: 'center' }, mb: 2, gap: 2 }}>
        <Typography variant="h6" fontWeight="bold">Daftar Mahasiswa (35)</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: { xs: '100%', md: 'auto' } }}>
            <TextField
            fullWidth
            size="small"
            placeholder="Cari nama atau NIM..."
            InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
            }}
            sx={{
                minWidth: {md: 280},
                '& .MuiOutlinedInput-root': { borderRadius: 2, bgcolor: 'grey.100' } 
            }}
            />
            <Button variant="contained" startIcon={<PersonAddIcon />}>
                <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>Tambah</Box>
            </Button>
        </Box>
        </Box>

        <TableContainer>
        <Table>
            <TableHead sx={{ bgcolor: 'grey.50' }}>
            <TableRow>
                {['NAMA LENGKAP', 'NIM', 'KEHADIRAN', 'STATUS'].map((headCell) => (
                <TableCell key={headCell} sx={{ fontWeight: 'bold', color: 'text.secondary' }}>{headCell}</TableCell>
                ))}
                <TableCell align="right" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>AKSI</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {students.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((student) => (
                <TableRow key={student.nim} hover>
                <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: student.avatar.color, color: 'white' }}>{student.avatar.text}</Avatar>
                    <Typography variant="body2" fontWeight="600">{student.name}</Typography>
                    </Box>
                </TableCell>
                <TableCell>{student.nim}</TableCell>
                <TableCell>{student.attendance}</TableCell>
                <TableCell>
                    <Chip
                    label={student.status}
                    size="small"
                    color={student.status === 'Aktif' ? 'success' : 'warning'}
                    sx={{
                        fontWeight: '600',
                        bgcolor: student.status === 'Aktif' ? 'success.light' : 'warning.light',
                        color: student.status === 'Aktif' ? 'success.dark' : 'warning.dark',
                    }}
                    />
                </TableCell>
                <TableCell align="right">
                    <IconButton size="small"><MoreVertIcon /></IconButton>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        <TablePagination
            component="div" 
            count={students.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[4, 10, 25]}
        />
    </Paper>
  )
}

export default ListMhs