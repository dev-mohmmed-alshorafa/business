import { Stack } from '@mui/system'
import React from 'react'
import { TableBody } from '@mui/material'
import UserRow from './UserRow'

function UserRows() {
  return (
    <TableBody sx={{width:'100%'}}>
      <UserRow />
      <UserRow />
      <UserRow />
      <UserRow />
      <UserRow />
    </TableBody>
  )
}

export default UserRows
