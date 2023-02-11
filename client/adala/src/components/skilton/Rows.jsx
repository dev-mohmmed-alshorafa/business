import { Stack } from '@mui/system'
import React from 'react'
import Row from './Row'
import { TableBody } from '@mui/material'

function Rows() {
  return (
    <TableBody sx={{width:'100%'}}>
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </TableBody>
  )
}

export default Rows
