'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MuiToolbar from '@mui/material/Toolbar';
import { tabsClasses } from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import SideBarMobile from './SideBarMobile';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
// import SideMenuMobile from './SideMenuMobile';
 import MenuIcon from './MenuIcon';
import Image from 'next/image';
// import ColorModeIconDropdown from '.././theme/ColorModeIconDropdown';

const Toolbar = styled(MuiToolbar)({
  width: '100%',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '12px',
  flexShrink: 0,
  [`& ${tabsClasses.flexContainer}`]: {
    gap: '8px',
    p: '8px',
    pb: 0,
  },
});

export default function TopBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        display: { xs: 'auto', md: 'none' },
        paddingInline: 2,
        boxShadow: 0,
        bgcolor: "#052E58",
        backgroundImage: 'none',
        borderBottom: '1px solid',
        borderColor: 'divider',
        top: 'var(--template-frame-height, 0px)',
      }}
    >
      <Toolbar variant="dense" disableGutters>
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between'
          }}
        >
          <Stack
            direction="row"
            sx={{ justifyContent: 'space-between', mr: 'auto',alignItems: 'center', gap: 1 }}
          >
            <Image src="/images/logo_udinus.png" width={70} height={70} alt='icon'/>
            <Box sx={{ mr: 'auto' }}>
                <Typography variant="h6" sx={{ fontWeight: 500, lineHeight: '16px', color: "white"}}>
                    Siadin 
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                    Sistem Akademik Udinus
                </Typography>
            </Box>
          </Stack>
          {/* <ColorModeIconDropdown /> */}
          <Image onClick={toggleDrawer(true)} style={{marginRight: 20, cursor: 'pointer'}} src="/images/mobile_menu_ic.svg" height={20} width={20} alt='icon'/>
        </Stack>
      </Toolbar>
      <SideBarMobile open={open} toggleDrawer={toggleDrawer} />
    </AppBar>
  );
}

export function CustomIcon() {
  return (
    <Box
      sx={{
        width: '1.5rem',
        height: '1.5rem',
        bgcolor: 'black',
        borderRadius: '999px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundImage:
          'linear-gradient(135deg, hsl(210, 98%, 60%) 0%, hsl(210, 100%, 35%) 100%)',
        color: 'hsla(210, 100%, 95%, 0.9)',
        border: '1px solid',
        borderColor: 'hsl(210, 100%, 55%)',
        boxShadow: 'inset 0 2px 5px rgba(255, 255, 255, 0.3)',
      }}
    >
      {/* <DashboardRoundedIcon color="inherit" sx={{ fontSize: '1rem' }} /> */}
    </Box>
  );
}