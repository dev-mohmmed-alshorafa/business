import React from 'react'
import { Stack } from '@mui/system'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function MenuItem({ item, isActive, i, setIsActive }) {
  const lng = useSelector((state) => state.lng)
  console.log(isActive, i)
  return (
    <Link
      className="menu-icons"
      onClick={() => setIsActive(i)}
      style={{
        background: isActive === i ? 'var(--background-icons-side-menu)' : '',
        color: 'var(--icons-side-menu)',
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
        {i === isActive ? (
          <Stack
            sx={{
              background: '#1890ff',
              padding: '8px',
              borderRadius: '8px',
              boxShadow:
                ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            }}
          >
            <img src={item.activeIcon} style={{ width: '20px' }} alt="" />
          </Stack>
        ) : (
          <Stack
            sx={{
              background: '#ffff',
              padding: '8px',
              borderRadius: '8px',
              boxShadow:
                ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            }}
          >
            <img src={item.icon} style={{ width: '20px' }} alt="" />
          </Stack>
        )}
        <p>{item.name}</p>
      </Stack>
    </Link>
  )
}

export default MenuItem
