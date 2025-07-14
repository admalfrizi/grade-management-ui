'use client'
import React from 'react'
import MuiDrawer , {drawerClasses} from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import HeaderSidebar from './Header/HeaderSidebar';
import MenuContent from './MenuContent';

const drawerWidth = 240;

export default function Navbar() {
  const Drawer = styled(MuiDrawer)({
    width: drawerWidth,
    flexShrink: 0,
    boxSizing: 'border-box',
    mt: 10,
    [`& .${drawerClasses.paper}`]: {
      width: drawerWidth,
      boxSizing: 'border-box',
    },
  });

  return (
   <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Box>
        <HeaderSidebar/>
      </Box>
      <Divider />
      <Box
        sx={{
          overflow: 'auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MenuContent />
        {/* <CardAlert /> */}
      </Box>
      <Stack>
        <Stack
          direction="row"
          sx={{
            px: 2,
            pt: 1,
            gap: 1,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Avatar
            sizes="small"
            alt="Riley Carter"
            src="/static/images/avatar/7.jpg"
            sx={{ width: 36, height: 36 }}
          />
          <Box sx={{ mr: 'auto' }}>
            <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
              Nama Dosen
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', textOverflow: "ellipsis", }}>
              111202012767@mhs.dinus.ac.id
            </Typography>
          </Box>
        </Stack>
        <Box sx={{p: 2}}>
          <Button variant="outlined" fullWidth>
            Logout
          </Button>
        </Box>
      </Stack>
      
      
    </Drawer>
  )
}
