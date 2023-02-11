import * as React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItems from '../sideMenu/MenuItems'
import { IconButton } from '@mui/material'
import { useSelector } from 'react-redux'

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })
  const lng = useSelector((state) => state.lng)
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '280px',
        borderRadius:lng === 'ar' ? '20px 0 0 20px' : '0 20px 20px 0' ,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        zIndex: 9999,
        // background: 'var(--main-color)',
        // width:'80%'
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <MenuItems />
    </Box>
  )

  return (
    <div>
      {[lng === 'ar' ? 'right' : 'left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            sx={{
              display: {
                sm: 'none',
                xs: 'block',
                marginTop: '5px',
                padding: 0,
              },
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon sx={{ color: 'var(--icon-nav)' }} />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  )
}
