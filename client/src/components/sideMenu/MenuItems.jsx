import React, { useState } from 'react'
import { Container, Stack } from '@mui/system'
import Data from '../../Data'
import MenuItem from './MuneItem'
import Logo from './Logo'
import Ecme from './Ecme'
import { Button, Divider } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import JwtService from '../../services/TokenServices'
import { actions } from '../../Redux'
import { useTranslation } from 'react-i18next'

function MenuItems() {
  const [isActive, setIsActive] = useState(0)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const activeItemMenu = useSelector((state) => state.activeItemMenu)
  return (
    <Stack className="scroll-menu-side"
      sx={{
        padding: '30px 16px 30px 20px',
        background: 'var( --background-menu-side)',
        overflowY: 'scroll',
        boxShadow:
          ' 0px 8px 10px -5px rgb(0 0 0 / 20%), 0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%)',
      }}
      height={'100vh'}
    >
      <Logo />
      {/* <Ecme /> */}
      <Stack  justifyContent={'space-between'} minHeight={'73vh'} >
    
        <Stack gap="5px">
        {Data().links.map((e, i) => (
          <MenuItem
            isActive={activeItemMenu}
            i={i}
            setIsActive={setIsActive}
            item={e}
            key={i}
          />
        ))}
        </Stack>
        <Button
          sx={{
            background: '#ffff',
            color: 'var(--main-color)',
            padding: '12px',
            marginBottom: '30px',
            borderRadius: '20px',
          }}
          onClick={() => {
            dispatch(actions.login(null))
            JwtService.destroyToken()
          }}
        >
          {t('logout')}
        </Button>
      </Stack>
    </Stack>
  )
}

export default MenuItems
