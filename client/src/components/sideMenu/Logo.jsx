import React from 'react'
import { Stack } from '@mui/system'

function Logo() {
  return (
    <Stack sx={{width:'75%',margin:'16px auto 83px auto'}} alignItems={'center'}>
      <img style={{width:'90%'}} src="./assets/images/white-logo.svg" alt="" />
    </Stack>
  )
}

export default Logo
