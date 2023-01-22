import React from 'react'
import { Stack } from '@mui/system'
import CircularProgress from '@mui/material/CircularProgress'

function LoadingForm() {
  return (
    <Stack
      // className="loading-blur"
      height={'100%'}
      width={'100%'}
      sx={{ background: '#0000005e',position:'absolute',top:0,borderRadius:'8px' }}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <CircularProgress />
    </Stack>
  )
}

export default LoadingForm
