import React from 'react'
import { Stack } from '@mui/system'
import CircularProgress from '@mui/material/CircularProgress'

function ProgressLoading() {
  return (
    <Stack
      className="loading-blur"
      minHeight={'100vh'}
      sx={{ background: 'rgba(47, 45, 56, 0.01)' }}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <CircularProgress />
    </Stack>
  )
}

export default ProgressLoading
