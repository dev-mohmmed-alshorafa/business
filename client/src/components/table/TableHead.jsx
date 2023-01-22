import React from 'react'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { useSelector } from 'react-redux'

function HeadTable({data}) {
  const lng=useSelector(state=>state.lng)
  return (
    <TableHead>
      <TableRow>
        
        {data.map((e, i) => (
          <TableCell align={i !== 0 ? 'center' :lng ==='en'? 'left':'right'} key={i}>
            {e}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default HeadTable
