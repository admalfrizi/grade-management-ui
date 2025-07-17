'use client'
import { useParams } from "next/navigation";
import {
  AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon,
  ListItemText, Toolbar, Typography, Breadcrumbs, Link, Button, Tabs, Tab,
  Paper, InputAdornment, TextField, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Avatar, Chip, IconButton, TablePagination, useTheme, useMediaQuery
} from '@mui/material';

// --- Icon Imports ---
import GridViewIcon from '@mui/icons-material/GridView';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import React, { useState } from "react";

// --- Mock Data ---
const students = [
  { name: 'Andini Putri', nim: '11220001', attendance: '100% (8/8)', status: 'Aktif', avatar: { text: 'A', color: '#f87171' } },
  { name: 'Doni Setiawan', nim: '11220002', attendance: '88% (7/8)', status: 'Aktif', avatar: { text: 'D', color: '#60a5fa' } },
  { name: 'Rina Hartono', nim: '11220003', attendance: '100% (8/8)', status: 'Aktif', avatar: { text: 'R', color: '#facc15' } },
  { name: 'Sari Lestari', nim: '11220004', attendance: '75% (6/8)', status: 'Perlu Perhatian', avatar: { text: 'S', color: '#4ade80' } },
];

// Custom styled Tab for active state
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightBold,
  marginRight: theme.spacing(1),
  color: theme.palette.text.secondary,
  '&.Mui-selected': {
    color: theme.palette.primary.main,
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));

type EventType = {
  event: string;
  newValue: Any;
};

export default function ClassDetail() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState(0);
    const theme = useTheme();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);


    const handleTabChange = ({event, newValue} : EventType) => {
        setActiveTab(newValue);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box component="main">
            <header>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { md: 'center' }, gap: 2, mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar variant="rounded" sx={{ bgcolor: 'info.light', width: 64, height: 64 }}>
                            {/* A custom Figma icon would go here */}
                            <Typography sx={{ color: 'info.main', fontWeight: 'bold' }}>UI</Typography>
                        </Avatar>
                        <Box>
                            <Typography variant="h4" component="h1" fontWeight="bold">Desain Antarmuka Pengguna</Typography>
                            <Typography color="text.secondary">Kode Kelas: IF-401 | 3 SKS | Ruang 302</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button variant="outlined" color="secondary" startIcon={<SettingsIcon />} sx={{ textTransform: 'none' }}>Pengaturan</Button>
                        <Button variant="contained" color="primary" startIcon={<VideocamIcon />} sx={{ textTransform: 'none' }}>Mulai Kelas Online</Button>
                    </Box>
                </Box>
            </header>

            {/* Tabs */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
            <Tabs value={activeTab} onChange={handleTabChange} aria-label="class navigation tabs">
                <StyledTab label="Mahasiswa" />
                <StyledTab label="Pertemuan" />
                <StyledTab label="Tugas & Penilaian" />
                <StyledTab label="Materi Kelas" />
            </Tabs>
            </Box>

            {/* Student List Content */}
            {activeTab === 0 && (
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
            )}
      </Box>
    )
}