'use client'
import { useParams } from "next/navigation";
import {
  AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon,
  ListItemText, Toolbar, Typography, Breadcrumbs, Link, Button, Tabs, Tab,
  Paper, InputAdornment, TextField, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Avatar, Chip, IconButton, TablePagination, useTheme, useMediaQuery
} from '@mui/material';

// --- Icon Imports ---

import { styled } from '@mui/material/styles';
import React, { useState } from "react";
import { useClassStore } from "@/store/useClassStore";
import ListMhs from "@/layout/detail_class/ListMhs";
import SettingsIcon from '@mui/icons-material/Settings';
import Pertemuan from "@/layout/detail_class/Pertemuan";
import TugasPenilaian from "@/layout/detail_class/TugasPenilaian";
// --- Mock Data ---

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

export default function ClassDetail() {
    const { id } = useParams();
    const {classData, updateClassData} = useClassStore();

    const [activeTab, setActiveTab] = useState(0);
    const theme = useTheme();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);
    const dtlClass = classData.find((data) => data.id === Number(id))


    const handleTabChange = (event: string, newValue : number) => {
        setActiveTab(newValue);
    };

    const handleChangePage = (event: string, newPage : number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box component="main">
            <header>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { md: 'center' }, gap: 2, mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar variant="rounded" sx={{ bgcolor: 'info.light', width: 64, height: 64 }}>
                            <Typography sx={{ color: 'info.main', fontWeight: 'bold' }}>UI</Typography>
                        </Avatar>
                        <Box>
                            <Typography variant="h4" component="h1" fontWeight="bold">{dtlClass?.nmMatkul}</Typography>
                            <Typography color="text.secondary">Kode Kelas: {dtlClass?.kdmk} | {dtlClass?.ruangKls}</Typography>
                        </Box>
                    </Box>
                </Box>
            </header>

            {/* Tabs */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                <Tabs value={activeTab} onChange={handleTabChange} aria-label="class navigation tabs">
                    <StyledTab label="Mahasiswa" />
                    <StyledTab label="Pengaturan Nilai Kelas" />
                </Tabs>
            </Box>
            {activeTab === 0 && (
                <ListMhs page={page} rowsPerPage={rowsPerPage} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} />
            )}

            {activeTab === 1 && (
                <TugasPenilaian/>
            )}
      </Box>
    )
}