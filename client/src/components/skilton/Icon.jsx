import { Skeleton } from '@mui/material'
import React from 'react'

function Icon() {
  return (
    <>
          <Skeleton
            variant="rectangular"
            width={20}
            sx={{ borderRadius: '50%' }}
            height={20}
          />
    </>
  )
}

export default Icon
