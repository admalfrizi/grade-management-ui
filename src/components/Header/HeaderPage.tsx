'use client'

import { Stack } from '@mui/material'
import React from 'react'
import Breadcrumb from './BreadCrumb'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MenuIcon from '../MenuIcon';

interface Props {
    namePage?: string
    searchVl?: string
}

function HeaderPage({ namePage, searchVl } : Props) {
  return (
    <Stack
      direction="row"
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
        <Breadcrumb />
        <MenuIcon showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuIcon>
    </Stack>
  )
}

export default HeaderPage