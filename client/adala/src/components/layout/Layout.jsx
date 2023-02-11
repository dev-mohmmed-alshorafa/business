import React from 'react'
import { Stack } from '@mui/system'

import { Outlet } from 'react-router-dom'
import Header from '../header'
import SideMenu from '../sideMenu'
import { useSelector } from 'react-redux'
function Layout() {
  const lng=useSelector(state=>state.lng)
  return (
    <Stack width={'100%'} justifyContent={'flex-end'} direction={lng==='en'?'row':'row-reverse'}>
      <SideMenu />
      <Stack justifyContent={'space-between'} width={{md:'calc(100% - 280px)',xs:'100%',sm:'calc(100% - 280px)'}}>
        <Header />
        <Stack dir={lng==='en'?'ltr':'rtl'}  mt={'70px'}>
        <Outlet />

        </Stack>
        <div></div>
      </Stack>
    </Stack>
  )
}

export default Layout
