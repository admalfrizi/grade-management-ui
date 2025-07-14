import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

function HeaderSidebar() {
  return (
    <Stack direction="row"
        sx={{
          p: 2,
          gap: 2,
          alignItems: 'center',
          borderTop: '1px solid',
          borderColor: 'divider',
          background: "#052E58"
        }}>
            <Image src="/images/logo_udinus.png" width={70} height={70} alt='icon'/>
            <Box sx={{ mr: 'auto' }}>
                <Typography variant="h6" sx={{ fontWeight: 500, lineHeight: '16px', color: "white"}}>
                    Siadin 
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                    Sistem Akademik
                </Typography>
            </Box>
    </Stack>
  )
}

export default HeaderSidebar