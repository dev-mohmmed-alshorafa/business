import React from 'react'
import { Stack } from '@mui/system'

function Logo() {
  return (
    <Stack sx={{width:'95%',margin:'16px auto 83px auto'}} alignItems={'center'}>
      <img style={{width:'100%',borderRadius:'12px'}} src="./icons/logo.jpg" alt="" />
    </Stack>
  )
}

export default Logo
