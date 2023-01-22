import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
function Ecme() {
  return (
    <Stack sx={{background: 'rgba(255, 255, 255, 0.04)',
      borderRadius: '8px',padding:'15px'}} direction={'row'} justifyContent={'space-between'}>
      <Stack gap={'10px'}>
        <Typography
          sx={{ fontWeight: 500, fontSize: '16px', color: 'var(--icons-side-menu)' }}
          variant="body"
          gutterBottom
        >
          Acme Inc
        </Typography>{' '}
        <Typography
          sx={{ fontWeight: 400, fontSize: {sm:'14px',xs:'12px'}, color: '#9CA3AF' }}
          variant="body"
          gutterBottom
        >
          Your tier: Premium{' '}
        </Typography>
      </Stack>
      <Stack>
        <KeyboardArrowUpIcon sx={{ color: '#9CA3AF',height:'23px' }} />
        <KeyboardArrowDownIcon sx={{ color: '#9CA3AF',height:'23px' }} />
      </Stack>
    </Stack>
  )
}

export default Ecme
