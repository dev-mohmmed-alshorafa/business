import React from 'react'
import { Container, Box, Stack } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import SearchIcon from '@mui/icons-material/Search'
import Drawer from '../drawer'
import { useTranslation } from 'react-i18next'
import LanguageIcon from '@mui/icons-material/Language'
import PublicIcon from '@mui/icons-material/Public'
import { IconButton } from '@mui/material'
import { actions } from '../../Redux'
import { paperClasses } from '@mui/material/Paper'

function Header() {
  const user = useSelector((state) => state.user)
  const lng = useSelector((state) => state.lng)
  const { t, i18n } = useTranslation()
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    dispatch(actions.setLng(language))
  }
  const dispatch = useDispatch()

  return (
    <Box
      className="side-menu"
      sx={{
        width: {
          md: 'calc(100% - 280px)',
          xs: '100%',
          sm: 'calc(100% - 280px)',
        },
        background: 'var(--background-nav)',
        left: lng === 'ar' && 0,
        right: lng === 'en' && 0,
        zIndex: 10,
        padding: '10px 0',
        position: 'fixed',
        top: '0',
        boxShadow:
          ' 0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: lng === 'en' ? 'row' : 'row-reverse',
          justifyContent: 'space-between',
        }}
        maxWidth="lg"
      >
        <Stack
          gap={2}
          direction={lng === 'en' ? 'row' : 'row-reverse'}
          alignItems={'center'}
        >
          <Drawer
            PaperProps={{
              sx: {
                backgroundColor: '#0000',
              },
            }}
          />
          <SearchIcon sx={{ color: 'var(--icon-nav)' }} />
        </Stack>

        <Stack
          gap={3}
          alignItems={'center'}
          direction={lng === 'en' ? 'row' : 'row-reverse'}
        >

         
          <IconButton
            onClick={() => changeLanguage(lng === 'en' ? 'ar' : 'en')}
          >
            {lng === 'ar' ? <LanguageIcon /> : <PublicIcon />}
          </IconButton>
          <Avatar alt={user.name} src="/static/images/avatar/1.jpg" />
        </Stack>
      </Container>
    </Box>
  )
}

export default Header
