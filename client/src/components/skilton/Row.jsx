import { Skeleton, TableCell, TableRow } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import { Stack } from '@mui/system'
import Icon from './Icon'
import String from './String'

function Row() {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        <Logo />
      </TableCell>
      <TableCell>
        <String />
      </TableCell>
      <TableCell>
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

export default Row
