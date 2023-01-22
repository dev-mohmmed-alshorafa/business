import React from 'react'
import TableBody from '@mui/material/TableBody'
import Row from './Row'
function BodyTable({ data }) {

  return (
    <TableBody >
      {data.map((row, i) => (
        <Row key={i} row={row} />
      ))}
    </TableBody>
  )
}

export default BodyTable
