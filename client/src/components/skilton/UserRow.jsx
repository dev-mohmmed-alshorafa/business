import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import { Stack } from '@mui/system'
import Icon from './Icon'
import String from './String'

function UserRow() {
  return (
    <TableRow
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
      }}
    >
      <TableCell sx={{ padding: '20px' }} component="th" scope="row">
        <String />
      </TableCell>
      <TableCell>
        <String />
      </TableCell>
      <TableCell>
        <String />
      </TableCell>
      <TableCell>
        <Stack direction={'row'} justifyContent={'space-evenly'}>
          <Icon />
          <Icon />
        </Stack>
      </TableCell>
    </TableRow>
  )
}

export default UserRow
