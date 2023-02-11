import React from 'react'
import MenuItems from './MenuItems'
import { Stack } from '@mui/system'
import { useSelector } from 'react-redux'

function Mene() {
  const lng=useSelector(state=>state.lng)
  return (
    <Stack width={{sm:'280px',xs:'100%',md:'280px'}} 
     sx={{display:{sm:'block',xs:'none',position:'fixed',top:0,left:lng==='en' &&0
    ,right:lng==='ar'&& 0}}}>
      <MenuItems/>
    </Stack>
  )
}

export default Mene
