import { List, Stack } from '@mui/material'
import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Image from 'next/image';
import { ROUTES } from '@/lib/route';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const listMenu = [
  { text: 'Dashboard', icon: <Image src="/images/dashboard_ic.svg" alt="" width={31} height={31} />, route: ROUTES.DASHBOARD.route },
  { text: 'Daftar Kelas', icon: <Image src="/images/books_ic.svg" alt="" width={31} height={31} />, route: ROUTES.CLASS.route },
  { text: 'Daftar Mahasiswa', icon: <Image src="/images/mhs_ic.svg" alt="" width={31} height={31} /> , route: ROUTES.MHS.route},
]


function MenuContent() {
  const pathName = usePathname();

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
        <List dense>
        {listMenu.map((item, index) => {
          const isActive = (pathName.includes(item.route) && item.route.length > 1) || pathName === item.route;

          return <ListItem key={index} disablePadding sx={{ display: 'block',"&:hover": {
            backgroundColor: "#f0f0f0", // hover color
            color: "#052E58"
          },
          "&.Mui-selected": {
            backgroundColor: "#e0e0e0", // active color
            color: "#052E58",
            "&:hover": {
              backgroundColor: "#d0d0d0", // active + hover
              color: "#052E58"
            },},}}>
            <Link href={item.route} style={{ textDecoration: 'none' }}>
              <ListItemButton selected={isActive}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={{
                  color: isActive ? "#052E58" : "black"
                }}/>
              </ListItemButton>
            </Link>
            
          </ListItem>
        })}
      </List>
    </Stack>
  )
}

export default MenuContent