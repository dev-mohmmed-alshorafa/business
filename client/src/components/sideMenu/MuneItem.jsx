import React from 'react'
import { Stack } from '@mui/system'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function MenuItem({ item, isActive, i, setIsActive }) {
  const lng = useSelector((state) => state.lng)
  return (
    <Link
      className="menu-icons"
      onClick={() => setIsActive(i)}
      style={{
        background: isActive === i ? 'var(--background-icons-side-menu)' : '',
        color: '#ffff !important',
        textDecoration: 'none',
        padding: '9px 20px',
        borderRadius: '8px',
        fontWeight: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: lng === 'en' ? 'flex-start' : 'flex-end',
      }}
      to={item.path}
    >
      <Stack
        color={'primary'}
        gap={'15px'}
        alignItems={'center'}
        direction={lng === 'en' ? 'row' : 'row-reverse'}
      >
        <img src={item.icon} />
        <p style={{ color: '#ffff' }}>{item.name}</p>
      </Stack>
    </Link>
  )
}

export default MenuItem
